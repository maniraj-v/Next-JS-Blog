import Header from "@/components/Header";
import React from "react";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="px-10">{children}</main>
    </>
  );
};
export default RootLayout;
