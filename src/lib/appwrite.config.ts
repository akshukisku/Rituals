import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint(import.meta.env.APPWRITE_ENDPOINT)
    .setProject(import.meta.env.APPWRITE_PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
