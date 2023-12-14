"use client";

import { wait } from "@/lib/helpers";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useBoolean();
  const [submitSuccess, setSubmitSuccess] = useBoolean();

  const onSubmit = async ({ email }: FormValues) => {
    setIsLoading.on();
    await wait();
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/coming-soon-emails`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { email } }),
      }
    ).finally(async () => setIsLoading.off());
    if (result.ok) {
      setSubmitSuccess.on();
    }
  };

  return (
    <>
      {!submitSuccess ? (
        <FormControl
          color="main"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          isDisabled={isLoading}
        >
          <FormLabel>Sign up for updates</FormLabel>
          <InputGroup>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <InputRightElement width="4.5rem">
              <Button color="main" type="submit" isLoading={isLoading}>
                Sign up
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      ) : null}
      {submitSuccess ? (
        <Text color="main" fontWeight="bold">
          Thanks for signing up!
        </Text>
      ) : null}
    </>
  );
};
