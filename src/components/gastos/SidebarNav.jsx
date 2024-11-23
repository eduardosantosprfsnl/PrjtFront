import React from "react";
import { Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";




const SidebarNav = () => {
    const { asPath } = useRouter();

    return (
        <Stack spacing="6">
            <Stack>
                <Text fontSize="xs" fontWeight="bold" color="gray.400" >
                    CADASTRAR
                </Text>
                <Stack>
                    <ChakraLink
                        _hover={{ bg: "gray.100" }}
                        px="4"
                        py="2"
                        borderRadius={5}
                        bg={asPath === "/CadDespesas" ? "gray.200" : ""}
                    >
                        <Link href="/CadDespesas">
                            <Text fontSize="md" fontWeight="medium" color="gray.500" >
                                DESPESAS
                            </Text>
                        </Link>
                    </ChakraLink>
                </Stack>
            </Stack>
            <Stack>
                <Text fontSize="xs" fontWeight="bold" color="gray.400" >
                    MOVIMENTAÇÕES
                </Text>
                <Stack>
                    <ChakraLink
                        _hover={{ bg: "gray.100" }}
                        px="4"
                        py="2"
                        borderRadius={5}
                        bg={asPath === "/TotalGastos" ? "gray.200" : ""}
                    >
                        <Link href="/TotalGastos">
                            <Text fontSize="md" fontWeight="medium" color="gray.500">
                                TOTAL
                            </Text>
                        </Link>
                    </ChakraLink>
                    <ChakraLink
                        _hover={{ bg: "gray.100" }}
                        px="4"
                        py="2"
                        borderRadius={5}
                        bg={asPath === "/Metas" ? "gray.200" : ""}
                    >
                        <Link href="/Metas">
                            <Text fontSize="md" fontWeight="medium" color="gray.500">
                                METAS
                            </Text>
                        </Link>
                    </ChakraLink>
                    <ChakraLink
                        _hover={{ bg: "gray.100" }}
                        px="4"
                        py="2"
                        borderRadius={5}
                        bg={asPath === "/Gastos" ? "gray.200" : ""}
                    >
                        <Link href="/Gastos">
                            <Text fontSize="md" fontWeight="medium" color="gray.500">
                                GASTOS
                            </Text>
                        </Link>
                    </ChakraLink>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default SidebarNav;