import React from "react";
import { LayoutParams } from "@/src/types/next";
import { Navbar } from "@/src/components/landing/navbar";
import { Footer } from "@/src/components/landing/Footer";

export default async function RouteLayout(props: LayoutParams) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
