import React from "react";
import LoginForm from "../components/login-form";
import CustomModal from "../components/custom-modal";
import Layout from "../components/layout";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <CustomModal title="Login">
        <LoginForm />
      </CustomModal>

      <Layout>
        <Heading>Dashboard</Heading>
      </Layout>
    </div>
  );
}
