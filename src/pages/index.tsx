import { Flex, Stack, Button } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/Form/Input";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Digite um email válido")
    .required("Email obrigatório!"),
  password: Yup.string().required("Senha obrigatório!"),
});

export default function Home() {
  const { handleSubmit, register, formState } = useForm<SignInFormData>({
    resolver: yupResolver(schema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async ({
    email,
    password,
  }) => {
    console.log("values", email, password);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack>
          <Input
            type="email"
            name="email"
            label="E-mail"
            error={formState.errors.email}
            {...register("email")}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            error={formState.errors.password}
            {...register("password")}
          />
        </Stack>
        <Button
          mt="6"
          type="submit"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
