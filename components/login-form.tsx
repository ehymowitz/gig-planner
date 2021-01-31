import React from "react";
import {
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { Form, Field, Formik } from "formik";
import { createGig, gigLogin } from "../utils/crud";

const LoginForm = () => {
  function validateName(value: String) {
    let error: String;
    if (!value) {
      error = "Gig name is required";
    }
    return error;
  }

  // need to add gig to context after login
  // and create - returned from functions

  return (
    <Flex>
      <Box pr={4}>
        <Formik
          initialValues={{ name: "" }}
          onSubmit={(values, actions) => {
            gigLogin({ name: values.name });
            actions.setSubmitting(false);
          }}
        >
          {(props) => (
            <Form>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <Input {...field} id="name" placeholder="Gig Name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                my={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <Spacer />
      <Box pl={4}>
        <Formik
          initialValues={{ name: "" }}
          onSubmit={(values, actions) => {
            createGig(values);
            actions.setSubmitting(false);
          }}
        >
          {(props) => (
            <Form>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <Input {...field} id="name" placeholder="Create Gig" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                my={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Add Gig
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default LoginForm;
