import React from "react";
import Layout from "../../Layout";
import Header from "../../components/ui/Header";

const AddUser = () => {
  return (
    <Layout>
      <Header title="Create New User" />
      <div className="p-4 shadow-md border">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                className="block border p-3 w-full border-gray-300 rounded outline-none focus:border-emerald-600"
                name="fullName"
                id="fullName"
                placeholder="Your Full Name"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="mobile">
                Mobile
              </label>
              <input
                type="text"
                className="block border p-3 w-full border-gray-300 rounded outline-none focus:border-emerald-600"
                name="mobile"
                id="mobile"
                placeholder="Enter Your Number(Without +88)"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                className="block border p-3 w-full border-gray-300 rounded outline-none focus:border-emerald-600"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                className="block border p-3 w-full border-gray-300 rounded outline-none focus:border-emerald-600"
                name="address"
                id="address"
                placeholder="Enter Your Address"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                className="block border p-3 w-full border-gray-300 rounded outline-none focus:border-emerald-600"
                name="username"
                id="username"
                placeholder="Lower Case & No Space"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="password">
                Password
              </label>
              <input
                type="text"
                className="block border p-3 w-full border-gray-300 rounded outline-none focus:border-emerald-600"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-medium"
                htmlFor="confirmPassword"
              >
                Confirm password
              </label>
              <input
                type="text"
                className="block border p-3 w-full border-gray-300 rounded outline-none focus:border-emerald-600"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="privilege">
                Privilege
              </label>
              <select
                className="block border p-3 w-full border-gray-300 rounded outline-none focus:border-emerald-600"
                name="privilege"
                id="privilege"
              >
                <option value="#">Select Privilege</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-end mt-5 gap-3">
            <button className="button">Submit</button>
            <button className="button">Reset</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddUser;
