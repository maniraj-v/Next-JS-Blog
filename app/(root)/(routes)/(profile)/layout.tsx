import Insights from "@/components/Common/Insights";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Insights />
      {children}
    </main>
  );
};
export default ProfileLayout;
