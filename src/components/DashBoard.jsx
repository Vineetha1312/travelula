import React from "react";
import { useUser, UserButton } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome, {user?.fullName || "User"}! 🎉</h1>
      <UserButton />
    </div>
  );
};

export default Dashboard;