import { ReactNode } from 'react';
import {
  Group,
  Text,
  Image,
  Stack,
  Box,
  Title,
  Divider,
  List,
  ActionIcon,
  ActionIconProps
} from '@mantine/core';
import styles from './about.module.css';
import SVGLinkedIn from '../../../assets/SVGLinkedIn';
import SVGInstagram from '../../../assets/SVGInstagram';
import SVGGithub from '../../../assets/SVGGithub';
import image from '../../../assets/saivenkat_photo.jpg';
import SVGMail from '../../../assets/SVGMail';
import SVGTwitter from '../../../assets/SVGTwitter';

function About() {
  return (
    <Box className={styles.container}>
      <Stack gap='md' align='center' w='50%'>
        <Image
          src={image}
          alt="Saivenkat's face did not load"
          h={220}
          radius='50%'
          fallbackSrc='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png'
        />

        <Stack gap='0' align='center'>
          <Text
            size='xl'
            fw={800}
            variant='gradient'
            gradient={{ from: 'lime', to: 'blue', deg: 90 }}>
            Saivenkat Mahendrakar
          </Text>
          <Text>Software Engineer</Text>
          <Text>Wissen Technology</Text>
          <Group>
            <CustomActionIcon href='https://www.linkedin.com/in/themsv'>
              <SVGLinkedIn />
            </CustomActionIcon>
            <CustomActionIcon href='https://www.instagram.com/themsv/' color='pink'>
              <SVGInstagram />
            </CustomActionIcon>
            <CustomActionIcon href='https://twitter.com/themsv7'>
              <SVGTwitter />
            </CustomActionIcon>
            <CustomActionIcon href='https://github.com/themsv' color='gray'>
              <SVGGithub />
            </CustomActionIcon>
            <CustomActionIcon href='mailto:saivenkat108@gmail.com'>
              <SVGMail />
            </CustomActionIcon>
          </Group>
        </Stack>
      </Stack>

      <Box>
        <Title c='pink'>About Me</Title>
        <Text size='md' component='span'>
          I'm a passionate frontend developer with 4 years of experience crafting user-centric web
          experiences. I bring a blend of technical expertise and creative flair to every project,
          ensuring beautiful and functional interfaces that engage users.
        </Text>
        <Divider my='sm' />
        <Title order={4}>What I Do</Title>
        <List>
          <List.Item>
            I translate design mockups and prototypes into clean, responsive, and performant web
            applications using HTML, CSS, and JavaScript with ReactJs, NextJS.
          </List.Item>
          <List.Item>
            I prioritize accessibility and user experience, ensuring my code is inclusive and
            user-friendly for everyone.
          </List.Item>
          <List.Item>
            I stay up-to-date with the latest frontend development trends and technologies,
            constantly expanding my skillset to deliver the best possible solutions.
          </List.Item>
        </List>
        <Divider my='sm' />
        <Title order={4}>What I'm Passionate About</Title>
        <List>
          <List.Item>
            Building innovative and interactive web experiences that push the boundaries of
            possibility.
          </List.Item>
          <List.Item>
            Collaborating with designers and back-end developers to bring projects to life.{' '}
          </List.Item>
          <List.Item>
            Seeing the positive impact my work has on users' lives and businesses.
          </List.Item>
        </List>
      </Box>
    </Box>
  );
}

export default About;

interface CustomActionIconProps extends ActionIconProps {
  children: ReactNode;
  href: string;
}

function CustomActionIcon(props: CustomActionIconProps) {
  const { children, ...rest } = props;
  return (
    <ActionIcon variant='transparent' component='a' target='_blank' size='lg' {...rest}>
      {children}
    </ActionIcon>
  );
}
