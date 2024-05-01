import { Outlet } from 'react-router-dom';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { AppShell, Center, Stack, useMantineTheme } from '@mantine/core';

import Header from './Header';
import NavButtons from './NavButtons';
import Footer from './Footer';

import styles from './Layout.module.css';

function Layout() {
  const [opened, { toggle }] = useDisclosure();

  const theme = useMantineTheme();

  const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.sm} )`);

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

      <AppShell.Main className={isMobile ? '' : styles.centerMain}>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

export default Layout;
