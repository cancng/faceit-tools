import {
  Alert,
  Button,
  Card,
  Flex,
  List,
  Skeleton,
  Tabs,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  Image,
  Group,
  Avatar,
  Box,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { type NextPage } from "next";
import { api } from "@/utils/api";
import { z } from "zod";
import Flag from "react-world-flags";
import dayjs from "dayjs";
import Layout from "../components/ui/Layout";
import SubscriptionHeader from "@/components/subscriptionSection/SubscriptionHeader";
import PlayerCard from "@/components/player/PlayerCard";

const schema = z.object({
  username: z.string().nonempty("Username is required"),
});

// TODO: change get player from useQuery to useMutation
const Home: NextPage = () => {
  const form = useForm({
    initialValues: {
      username: "",
    },
    validate: zodResolver(schema),
  });
  const useGetPlayerMutation = api.openFaceit.getPlayer.useMutation();

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
                    playerData.cover_image ||
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
