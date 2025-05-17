import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Login Page ",

  // other metadata
  description: "This is the Login page "
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
