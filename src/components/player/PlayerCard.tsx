import SubscriptionHeader from "@/components/subscriptionSection/SubscriptionHeader";
import { type PlayerData } from "@/types/playerData";
import { type EloAndVerificationPayload } from "@/types/playerEloAndVerification";
import { Box, Flex, Text, Title } from "@mantine/core";
import dayjs from "dayjs";
import Flag from "react-world-flags";
import ClassicVerificationBadge from "../svg/ClassicVerificationBadge";
import VIPVerificationBadge from "../svg/VIPVerificationBadge";

interface Props {
  playerData: PlayerData["payload"];
  eloAndVerificationData: EloAndVerificationPayload | undefined;
}

function PlayerCard({ playerData, eloAndVerificationData }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.38)",
        padding: "20px 15px 12px 15px",
        position: "relative",
      }}
    >
      <SubscriptionHeader memberships={playerData.memberships} />

      <Flex mb={4} align="center">
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
        {eloAndVerificationData?.verificationLevel == 2 && (
          <Box display="flex" ml="8px">
            <ClassicVerificationBadge />
          </Box>
        )}
        {eloAndVerificationData?.verificationLevel == 3 && (
          <Box display="flex" ml="8px">
            <VIPVerificationBadge />
          </Box>
        )}
      </Flex>
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
