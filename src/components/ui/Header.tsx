import {
  Container,
  Group,
  Image,
  Header as MantineHeader,
  Text,
} from "@mantine/core";
import Link from "next/link";

function Header() {
  return (
    <MantineHeader height="64px">
      <Container size="xl" sx={{ height: "100%" }}>
        <Group sx={{ height: "100%" }}>
          <Image
            src="/img/faceit-logo.svg"
            alt="faceit logo"
            width={24}
            height={24}
          />
          <Text tt="uppercase" fw="bold">
            Faceit Tools
          </Text>
          <Link href="/">Home</Link>
          <Link href="/ban">Bans</Link>
        </Group>
      </Container>
    </MantineHeader>
  );
}

export default Header;
