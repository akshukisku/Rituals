import { Query } from "appwrite";
import { account, ID, tablesDB } from "../../lib/appwrite.config";
import type {
  LoginPayload,
  SignupPayload,
} from "../../typescript/interface/auth.interface";

export const RegisterUserFns = async (data: SignupPayload) => {
  const userAuth = await account.create({
    userId: ID.unique(),
    email: data.email,
    password: data.password,
    name: data.name,
  });

  console.log("userauth", userAuth);

  const user = await tablesDB.createRow({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "users",
    rowId: ID.unique(),
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "user",
    },
  });

  return {
    userAuth,
    user,
  };
};

export const LoginUserFns = async (data: LoginPayload) => {
  const findUser = await tablesDB.listRows({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: "users",
    queries: [Query.equal("email", [data.email])],
  });
  console.log("find user", findUser);
  if (findUser.rows.length > 0) {
    await account.createEmailPasswordSession({
      email: data.email,
      password: data.password,
    });
    return {
      success: true,
      message: "Login Successfully",
      user: findUser?.rows?.[0],
    };
  } else {
    return {
      success: false,
      message: "User Not Found",
    };
  }
};
