import { Box, Flex, ThemeIcon } from "@mantine/core";
import FaceitPlusLogo from "@/components/svg/FaceitPlusLogo";
import SubscriptionFaceitText from "@/components/subscriptionSection/SubscriptionFaceitText";
import FaceitPremiumLogo from "@/components/svg/FaceitPremiumLogo";

interface Props {
  memberships: string[];
}

function SubscriptionHeader({ memberships }: Props) {
  const membershipSet = new Set(memberships);
  let subscriptionType = "";
  if (membershipSet.has("premium")) {
    subscriptionType = "PREMIUM";
  } else if (membershipSet.has("plus")) {
    subscriptionType = "PLUS";
  }
  if (subscriptionType === "") {
    return null;
  }

  return (
    <Box
      sx={{
        position: "absolute",
        minHeight: "48px",
        top: "-34px",
        left: "-3px",
        display: "flex",
      }}
    >
      <Flex align="center">
        <ThemeIcon color="transparent" size={48} sx={{ zIndex: 1 }}>
          {subscriptionType === "PLUS" && <FaceitPlusLogo />}
          {subscriptionType === "PREMIUM" && <FaceitPremiumLogo />}
        </ThemeIcon>
        <Box
          sx={{
            backgroundColor: "black",
            padding: "3px 6px",
            borderBottomRightRadius: "2px",
            borderTopRightRadius: "2px",
            border: "1px solid #ff5500",
            display: "flex",
            alignItems: "center",
            position: "relative",
            left: "-4px",
            zIndex: 0,
            fontSize: "12px",
            letterSpacing: "0.02",
            lineHeight: "12px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          <SubscriptionFaceitText />
          {subscriptionType}
        </Box>
      </Flex>
    </Box>
  );
}

export default SubscriptionHeader;
