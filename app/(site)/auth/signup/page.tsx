import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page ",

  // other metadata
  description: "This is Sign Up page"
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
