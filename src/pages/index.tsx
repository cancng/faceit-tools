import PlayerCard from "@/components/player/PlayerCard";
import { api } from "@/utils/api";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Skeleton,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { type NextPage } from "next";
import { z } from "zod";
import Layout from "../components/ui/Layout";

const schema = z.object({
  username: z.string().nonempty("Username is required"),
});

const Home: NextPage = () => {
  const form = useForm({
    initialValues: {
      username: "",
    },
    validate: zodResolver(schema),
  });
  const useGetPlayerMutation = api.openFaceit.getPlayer.useMutation({
    onError: (error) => {
      notifications.show({
        title: "Error",
        message: error.message || "Something went wrong",
        color: "red",
      });
    },
  });

  const playerData = useGetPlayerMutation.data?.result;
  return (
    <Layout>
      <Title>Home</Title>
      <form
        onSubmit={form.onSubmit((values) => {
          useGetPlayerMutation.mutate({ username: values.username });
        })}
      >
        <Flex>
          <TextInput
            placeholder="Faceit Username"
            mr="md"
            w="100%"
            {...form.getInputProps("username")}
          />
          <Button type="submit" loading={useGetPlayerMutation.isLoading}>
            Send
          </Button>
        </Flex>
      </form>

      {useGetPlayerMutation.isLoading ? (
        <Skeleton height={240} mt="xl" />
      ) : (
        playerData && (
          <Card withBorder shadow="sm" padding="sm" radius="md" mb="md" mt="md">
            <Card.Section>
              <Box pos="relative">
                <Image
                  alt="cover"
                  src={
                    playerData.cover_image_url ||
                    "https://cdn-frontend.faceit-cdn.net/web/static/media/profile_header.bebdd408.jpg"
                  }
                  height="320px"
                />
                <Group pos="absolute" bottom={30} left={30}>
                  <Avatar src={playerData.avatar} size="160px" radius="100%" />
                  <PlayerCard playerData={playerData} />
                </Group>
              </Box>
            </Card.Section>
          </Card>
        )
      )}
    </Layout>
  );
};

export default Home;
