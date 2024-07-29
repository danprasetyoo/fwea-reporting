import { Flex, Icon, useColorModeValue } from '@chakra-ui/react';

export default function NavItem(props: any) {
  const { icon, children, ...rest } = props;
  const color = useColorModeValue('gray.600', 'gray.300');

  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      cursor="pointer"
      color="inherit"
      _hover={{
        bg: 'blue.200',
        color: 'black',
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="4"
          _groupHover={{
            color: color,
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
}
