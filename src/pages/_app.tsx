import {
  MantineProvider,
  TypographyStylesProvider,
  type MantineThemeOverride,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "@/utils/api";

const mantineTheme: MantineThemeOverride = {
  fontFamily: "Play",
  headings: {
    fontFamily: "Play",
  },
  colorScheme: "dark",
  colors: {
    faceit: ["#FF5500"],
  },
  globalStyles: (_theme) => ({
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    img: {
      margin: "0!important",
    },
  }),
};

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        inherit
        theme={mantineTheme}
      >
        <Notifications />
        <TypographyStylesProvider>
          <Component {...pageProps} />
        </TypographyStylesProvider>
      </MantineProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
