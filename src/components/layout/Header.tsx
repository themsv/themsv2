import { ActionIcon, Burger, Group, Text, useMantineColorScheme } from '@mantine/core';
import SVGMoon from '../../assets/SVGMoon';
import SVGsun from '../../assets/SVGSun';
import NavButtons from './NavButtons';

interface HeaderProps {
  readonly opened: boolean;
  readonly toggle: () => void;
}

function Header(props: HeaderProps) {
  const { opened, toggle } = props;
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Group h='100%' px='md'>
      <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
      <Group justify='space-between' style={{ flex: 1 }}>
        <Text
          variant='gradient'
          gradient={{ from: 'blue', to: 'lime', deg: 90 }}
          size='xl'
          fw={900}>
          {'<themsv/>'}
        </Text>
        <Group ml='xl' gap={0} visibleFrom='sm'>
          <NavButtons />
          {colorScheme === 'light' ? (
            <ActionIcon variant='transparent' onClick={toggleColorScheme}>
              <SVGMoon />
            </ActionIcon>
          ) : (
            <ActionIcon color='orange' variant='subtle' onClick={toggleColorScheme}>
              <SVGsun />
            </ActionIcon>
          )}
        </Group>
      </Group>
    </Group>
  );
}

export default Header;
