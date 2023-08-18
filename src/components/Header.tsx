import {
  Container,
  Group,
  Image,
  Header as MantineHeader,
  Text,
} from "@mantine/core";

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
        </Group>
      </Container>
    </MantineHeader>
  );
}

export default Header;
