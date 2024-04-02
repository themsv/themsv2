import { Box, Center, Text } from '@mantine/core';

function Footer() {
  return (
    <Box py='xs'>
      <Center>
        <Text>&#169;{new Date().getFullYear()} Saivenkat Mahendrakar</Text>
      </Center>
      <Center>
        <Text variant='gradient' gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
          Made with love React
        </Text>
      </Center>
    </Box>
  );
}

export default Footer;
