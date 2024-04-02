import { Button } from '@mantine/core';

function NavButtons() {
  return (
    <>
      <CustomNavButton label='Home' />
      <CustomNavButton label='Blog' />
      <CustomNavButton label='Contacts' />
      <CustomNavButton label='Support' />
    </>
  );
}

export default NavButtons;

interface CustomNavButtonProps {
  label: string;
}

function CustomNavButton(props: CustomNavButtonProps) {
  return (
    <Button size='md' variant='subtle'>
      {props.label}
    </Button>
  );
}
