import React from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default RootLayout;
