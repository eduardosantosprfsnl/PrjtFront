import {
    Avatar,
    Flex,
    HStack,
    Icon,
    IconButton,
    Text,
    useBreakpointValue,
} from  "@chakra-ui/react";
import React from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
import { IoIosArrowForward } from "react-icons/io";


const HeaderOrc = () => {
    const isMobile = useBreakpointValue({
        base: true,
        lg: false,
    });

    const { onOpen } = useSidebarContext();

    return (
        <Flex
        as="headerorc"
        w="100%"
        max={1120}
        h="20"
        mx="auto"
        px="2"
        py="2"
        align="center"
        color="gray.500"
        fontWeight="bold"
        >

            {isMobile && (
                <IconButton
                icon={<Icon as={IoIosArrowForward} />}
                onClick={onOpen}
                variant="unstyled"
                fontSize="20"
                mr="2"
                ></IconButton>
            )}

       
            <Flex ml="auto" w="1280px">
                <HStack>
                    <Text fontSize={20}>GASTOS</Text>
                </HStack>
            </Flex>
        </Flex>
    );
};

export default HeaderOrc;