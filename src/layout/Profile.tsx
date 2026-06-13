import {
  User,
  ShoppingBag,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import { useAppSelector } from "../hooks/useredux";

const ProfilePage = () => {
  const { user } = useAppSelector((state) => state.auth);

  const firstName = user?.name?.split(" ")[0] || "";
  const lastName = user?.name?.split(" ").slice(1).join(" ") || "";

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Sidebar */}
          <div className="w-full lg:w-[320px] space-y-4">
            {/* User Card */}
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-yellow-400 flex items-center justify-center text-xl font-bold text-white">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </div>

                <div>
                  <p className="text-sm text-gray-500">Hello,</p>
                  <h3 className="font-semibold text-lg">
                    {user?.name || "Guest User"}
                  </h3>
                </div>
              </div>
            </div>

            {/* Orders */}
            <div className="bg-white rounded shadow-sm">
              <div className="flex items-center justify-between p-4 border-b cursor-pointer">
                <div className="flex items-center gap-3">
                  <ShoppingBag size={20} />
                  <span className="font-medium">MY ORDERS</span>
                </div>

                <ChevronRight size={18} />
              </div>

              {/* Account Settings */}
              <div>
                <div className="flex items-center gap-3 p-4 border-b">
                  <User size={20} />
                  <span className="font-medium">ACCOUNT SETTINGS</span>
                </div>

                <div className="bg-blue-50 text-blue-600 px-10 py-3">
                  Profile Information
                </div>

                <div className="px-10 py-3 hover:bg-gray-50 cursor-pointer">
                  Manage Addresses
                </div>

                <div className="px-10 py-3 hover:bg-gray-50 cursor-pointer">
                  PAN Card Information
                </div>
              </div>

              {/* Payments */}
              <div className="border-t">
                <div className="flex items-center gap-3 p-4">
                  <CreditCard size={20} />
                  <span className="font-medium">PAYMENTS</span>
                </div>

                <div className="px-10 py-3 flex justify-between">
                  <span>Gift Cards</span>
                  <span className="text-green-600">₹0</span>
                </div>

                <div className="px-10 py-3">Saved UPI</div>

                <div className="px-10 py-3">Saved Cards</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded shadow-sm p-4 md:p-8">
            {/* Personal Information */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-semibold">Personal Information</h2>

                <button className="text-blue-600 font-medium">Edit</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  value={firstName}
                  readOnly
                  className="border p-3 rounded"
                />
                <input
                  value={lastName}
                  readOnly
                  className="border p-3 rounded"
                />
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-3">Your Gender</h4>

                <div className="flex gap-8">
                  <label className="flex items-center gap-2">
                    <input type="radio" checked readOnly />
                    Male
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="radio" readOnly />
                    Female
                  </label>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mt-12">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-semibold">Email Address</h2>

                <button className="text-blue-600 font-medium">Edit</button>
              </div>

              <input
                value={user?.email || ""}
                readOnly
                className="border p-3 rounded w-full md:w-[400px]"
              />
            </div>

            {/* Mobile */}
            <div className="mt-12">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-semibold">Mobile Number</h2>

                <button className="text-blue-600 font-medium">Edit</button>
              </div>

              <input
                value={user?.phone || "Not Added"}
                readOnly
                className="border p-3 rounded w-full md:w-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
