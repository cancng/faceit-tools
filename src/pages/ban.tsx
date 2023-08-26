import {
  Alert,
  Button,
  Card,
  Flex,
  List,
  Skeleton,
  Tabs,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { type NextPage } from "next";
import { api } from "@/utils/api";
import { z } from "zod";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { User, Feather, TimerReset, ShieldCheck } from "lucide-react";
import {
  type OperationPayload2,
  type OperationPayload1,
} from "@/types/operationResponse";
import dayjs from "dayjs";
import Layout from "../components/ui/Layout";

const schema = z.object({
  username: z.string().nonempty("Username is required"),
});

const Ban: NextPage = () => {
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

  const [activeTab, setActiveTab] = useState<string | null>("first");

  return (
    <Layout>
      <Title>Ban Tool</Title>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
          getBansMutation.mutate({ username: values.username });
        })}
      >
        <Flex>
          <TextInput
            placeholder="Faceit Username"
            mr="md"
            w="100% "
            {...form.getInputProps("username")}
          />
          <Button type="submit" loading={getBansMutation.isLoading}>
            Send
          </Button>
        </Flex>
      </form>

      {getBansMutation.isLoading ? (
        <Skeleton height={240} mt="xl" />
      ) : (
        getBansMutation.data && (
          <Tabs value={activeTab} onTabChange={setActiveTab} mt="lg">
            <Tabs.List mb="lg">
              <Tabs.Tab value="first">Queue Bans</Tabs.Tab>
              <Tabs.Tab
                value="second"
                onClick={() => {
                  console.log("sheriff bans 👉");
                }}
              >
                Sheriff Bans
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="first">
              {getBansMutation.data?.result.queueBans.map((banData) => {
                const ban = banData as OperationPayload1;
                return (
                  <Card
                    key={ban.id}
                    withBorder
                    shadow="sm"
                    padding="sm"
                    radius="md"
                    mb="md"
                  >
                    <List spacing="xs" center pl={"0 !important "}>
                      <List.Item
                        icon={
                          <ThemeIcon color="green" size={32} radius="xl">
                            <User size={18} />
                          </ThemeIcon>
                        }
                      >
                        {ban.nickname}
                      </List.Item>
                      <List.Item
                        icon={
                          <ThemeIcon color="red" size={32} radius="xl">
                            <Feather size={18} />
                          </ThemeIcon>
                        }
                      >
                        {ban.type} - {ban.reason}
                      </List.Item>
                      <List.Item
                        icon={
                          <ThemeIcon color="blue" size={32} radius="xl">
                            <TimerReset size={18} />
                          </ThemeIcon>
                        }
                      >
                        {dayjs(ban.banStart).format("DD-MM-YYYY HH:mm:ss")} --{" "}
                        {dayjs(ban.banEnd).format("DD-MM-YYYY HH:mm:ss")} (
                        {dayjs(ban.banEnd).diff(ban.banStart, "hours")} hours)
                      </List.Item>
                    </List>
                  </Card>
                );
              })}
            </Tabs.Panel>
            <Tabs.Panel value="second">
              {getBansMutation.data?.result.sheriffBans.length === 0 ? (
                <Alert
                  icon={<ShieldCheck />}
                  title="User is not banned"
                  color="teal"
                  variant="filled"
                >
                  User is not banned currently by FACEIT Admins. Good job!
                </Alert>
              ) : (
                getBansMutation.data?.result.sheriffBans.map((banData, i) => {
                  const ban = banData as OperationPayload2;
                  return (
                    <Card
                      key={i}
                      withBorder
                      shadow="sm"
                      padding="sm"
                      radius="md"
                      mb="md"
                    >
                      <List spacing="xs" center pl={"0 !important "}>
                        <List.Item
                          icon={
                            <ThemeIcon color="green" size={32} radius="xl">
                              <User size={18} />
                            </ThemeIcon>
                          }
                        >
                          {ban.nickname}
                        </List.Item>
                        <List.Item
                          icon={
                            <ThemeIcon color="red" size={32} radius="xl">
                              <Feather size={18} />
                            </ThemeIcon>
                          }
                        >
                          {ban.type} - {ban.reason}
                        </List.Item>
                        <List.Item
                          icon={
                            <ThemeIcon color="blue" size={32} radius="xl">
                              <TimerReset size={18} />
                            </ThemeIcon>
                          }
                        >
                          {dayjs(ban.starts_at).format("DD-MM-YYYY HH:mm:ss")}{" "}
                          -- {dayjs(ban.ends_at).format("DD-MM-YYYY HH:mm:ss")}{" "}
                          ({dayjs(ban.ends_at).diff(ban.starts_at, "hours")}{" "}
                          hours)
                        </List.Item>
                      </List>
                    </Card>
                  );
                })
              )}
            </Tabs.Panel>
          </Tabs>
        )
      )}
    </Layout>
  );
};

export default Ban;
