import SubscriptionHeader from "@/components/subscriptionSection/SubscriptionHeader";
import { Box, Flex, Text, Title } from "@mantine/core";
import Flag from "react-world-flags";
import dayjs from "dayjs";
import { type PlayerData } from "@/types/playerData";

interface Props {
  playerData: PlayerData;
}

function PlayerCard({ playerData }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.38)",
        padding: "20px 15px 12px 15px",
        position: "relative",
      }}
    >
      <SubscriptionHeader memberships={playerData.memberships} />

      <Box mb={4}>
        <Title
          order={5}
          m={"0!important"}
          sx={{
            fontSize: "22px!important",
            color: "white",
          }}
        >
          {playerData.nickname}
        </Title>
      </Box>
      <Flex align="center">
        <Flag
          code={playerData.country}
          width="24px"
          style={{
            borderRadius: "2px",
          }}
        />
        <Text
          ml={8}
          sx={{
            letterSpacing: "0.02em",
            fontSize: "14px",
            fontWeight: "bold",
            lineHeight: "20px",
            color: "white",
          }}
        >
          Member since {dayjs(playerData.activated_at).format("MMM DD, YYYY")}
        </Text>
      </Flex>
    </Box>
  );
}

export default PlayerCard;
