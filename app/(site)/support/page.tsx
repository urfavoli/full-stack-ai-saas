import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page ",

  // other metadata
  description: "This is Support page it"
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <li>
        type ...
      </li>
      <Contact />
    </div>
  );
};

export default SupportPage;
