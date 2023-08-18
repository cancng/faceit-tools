import {
  AppShell,
  Button,
  Container,
  JsonInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { type NextPage } from "next";
import { api } from "@/utils/api";
import Header from "@/components/Header";
import { z } from "zod";
import { notifications } from "@mantine/notifications";

const schema = z.object({
  username: z.string().nonempty("Username is required"),
});

const Home: NextPage = () => {
  const getBansMutation = api.openFaceit.getBans.useMutation({
    onError(error) {
      notifications.show({
        title: "Error",
        message: error.message || "Something went wrong",
        color: "red",
      });
    },
  });
  const form = useForm({
    initialValues: {
      username: "",
    },
    validate: zodResolver(schema),
  });

  return (
    <AppShell header={<Header />}>
      <Container size="xl">
        <Title>Ban Checker</Title>
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values);
            getBansMutation.mutate({ username: values.username });
          })}
        >
          <TextInput
            placeholder="Faceit Username"
            rightSection={
              <Button type="submit" loading={getBansMutation.isLoading}>
                Send
              </Button>
            }
            {...form.getInputProps("username")}
          />
        </form>

        <JsonInput
          value={JSON.stringify(
            getBansMutation.data?.result.queueBans,
            null,
            2
          )}
          autosize
        />
      </Container>
    </AppShell>
  );
};

export default Home;
