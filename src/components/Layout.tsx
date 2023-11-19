import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Group,
  Button,
  Text,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import SVGsun from "../assets/SVGSun";
import SVGMoon from "../assets/SVGMoon";

function Layout() {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Text
              variant="gradient"
              gradient={{ from: "blue", to: "lime", deg: 90 }}
              size="xl"
              fw={900}
            >
              {"<themsv/>"}
            </Text>
            <Group ml="xl" gap={0} visibleFrom="sm">
              <Button variant="subtle">Home</Button>
              <Button variant="subtle">Blog</Button>
              <Button variant="subtle">Contacts</Button>
              <Button variant="subtle">Support</Button>
              {colorScheme === "dark" ? (
                <ActionIcon
                 
                variant="transparent"
                  onClick={toggleColorScheme}
                >
                  <SVGMoon />
                </ActionIcon>
              ) : (
                <ActionIcon
                  color="orange"
                  variant="white"
                  onClick={toggleColorScheme}
                >
                  <SVGsun />
                </ActionIcon>
              )}
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Button variant="subtle">Home</Button>
        <Button variant="subtle">Blog</Button>
        <Button variant="subtle">Contacts</Button>
        <Button variant="subtle">Support</Button>
      </AppShell.Navbar>

      <AppShell.Main>
        Navbar is only visible on mobile, links that are rendered in the header
        on desktop are hidden on mobile in header and rendered in navbar
        instead.
      </AppShell.Main>
    </AppShell>
  );
}

export default Layout;
