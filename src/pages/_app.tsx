import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import {
  MantineProvider,
  MantineThemeOverride,
  TypographyStylesProvider,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { api } from "@/utils/api";

const mantineTheme: MantineThemeOverride = {
  fontFamily: "Play",
  colorScheme: "dark",
  colors: {
    faceit: ["#FF5500"],
  },
  globalStyles: (theme) => ({
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
