import { useDisclosure } from '@mantine/hooks';
import { AppShell, Center, Stack } from '@mantine/core';
import Header from './Header';
import NavButtons from './NavButtons';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: opened }
      }}
      padding='md'>
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar py='md' px={4}>
        <Center>
          <Stack>
            <NavButtons />
          </Stack>
        </Center>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

export default Layout;
