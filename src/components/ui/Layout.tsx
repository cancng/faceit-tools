import { AppShell, Container } from "@mantine/core";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <AppShell header={<Header />}>
      <Container size="xl">{children}</Container>
    </AppShell>
  );
}

export default Layout;
