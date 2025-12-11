import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BuildingOffice2Icon,
  UserGroupIcon,
  UserIcon,
  AcademicCapIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const Login = () => {
  const primary = "rgb(49, 232, 198)";
  const primaryDark = "rgb(29, 180, 155)";
  const primaryLight = "rgb(178, 255, 240)";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"candidate" | "mentor" | "company">(
    "candidate"
  );
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType === "company") navigate("/dashboard/company");
    else if (userType === "mentor") navigate("/dashboard/mentor");
    else navigate("/dashboard/candidate");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: `linear-gradient(135deg, ${primaryLight}, white)`,
      }}
    >
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl space-y-8">
        {/* Branding */}
        <div className="text-center">
          <div
            className="mx-auto mb-4 p-4 rounded-xl inline-flex"
            style={{
              background: primary,
            }}
          >
            <AcademicCapIcon className="h-12 w-12 text-white" />
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900">CVQupid</h1>
          <p className="text-sm text-gray-500 -mt-1">
            A match made in the boardroom
          </p>

          <h2 className="mt-6 text-xl font-bold text-gray-800">
            Sign in to your account
          </h2>
        </div>

        {/* User Type */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { type: "candidate", icon: <UserIcon className="h-8 w-8 mb-2" /> },
            { type: "mentor", icon: <UserGroupIcon className="h-8 w-8 mb-2" /> },
            {
              type: "company",
              icon: <BuildingOffice2Icon className="h-8 w-8 mb-2" />,
            },
          ].map(({ type, icon }) => (
            <button
              key={type}
              onClick={() => setUserType(type as any)}
              className="flex flex-col items-center p-4 rounded-lg border-2 transition-all"
              style={{
                borderColor: userType === type ? primary : "#e5e7eb",
                backgroundColor:
                  userType === type ? `${primaryLight}` : "white",
                color: userType === type ? primaryDark : "#374151",
              }}
            >
              {icon}
              <span className="text-sm font-medium capitalize">{type}</span>
            </button>
          ))}
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-3 border rounded-lg focus:outline-none"
                style={{
                  borderColor: primary,
                  boxShadow: `0 0 0 1px ${primary}`,
                }}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-3 border rounded-lg focus:outline-none"
                style={{
                  borderColor: primary,
                  boxShadow: `0 0 0 1px ${primary}`,
                }}
              />
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              Remember me
            </label>

            <a href="#" style={{ color: primary }}>
              Forgot your password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2"
            style={{
              background: primary,
            }}
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 text-white" />
            Sign in as {userType}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{ color: primary }}
              className="font-medium"
            >
              Choose registration type
            </Link>
          </p>
          <p className="text-xs text-gray-400 mt-4">
            By signing in, you agree to our Terms & Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
