import PlayerCard from "@/components/player/PlayerCard";
import { api } from "@/utils/api";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  List,
  Skeleton,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { BadgeInfo, User } from "lucide-react";
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
  const playerEloAndVerificationData =
    useGetPlayerMutation.data?.playerEloAndVerificationData;
  const playerStats = useGetPlayerMutation.data?.playerStatsData;

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
          <>
            <Card
              withBorder
              shadow="sm"
              padding="sm"
              radius="md"
              mb="md"
              mt="md"
            >
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
                    <Avatar
                      src={playerData.avatar}
                      size="160px"
                      radius="100%"
                    />

                    <PlayerCard
                      playerData={playerData}
                      eloAndVerificationData={playerEloAndVerificationData}
                    />
                  </Group>
                </Box>
              </Card.Section>
            </Card>

            <Card
              withBorder
              shadow="sm"
              padding="sm"
              radius="md"
              mb="md"
              mt="md"
            >
              <Title
                order={4}
                m={"0!important"}
                sx={{
                  fontSize: "22px!important",
                  color: "white",
                }}
              >
                Lifetime Stats
              </Title>
              <Alert icon={<BadgeInfo />} title="Information" color="cyan">
                The statistics here are lifetime statistics, some data may not
                be accurate.
              </Alert>
              {/* TODO: make icons for each stat */}
              <List spacing="md" center pl={"0 !important"}>
                {playerStats?.lifetime &&
                  Object.entries(playerStats.lifetime).map(([key, value]) => (
                    <List.Item
                      key={key}
                      icon={
                        <ThemeIcon color="green" size={32} radius="xl">
                          <User size={18} />
                        </ThemeIcon>
                      }
                    >
                      {key}: {value}
                    </List.Item>
                  ))}
              </List>
            </Card>
          </>
        )
      )}
    </Layout>
  );
};

export default Home;
