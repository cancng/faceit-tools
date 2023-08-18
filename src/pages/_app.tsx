import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { MantineProvider, TypographyStylesProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { api } from "@/utils/api";

import "@/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ fontFamily: "Play", colorScheme: "dark" }}
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
