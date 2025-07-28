'use client';

import { Flex, Image, Box, useDisclosure, } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'

import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link, close, children, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link passHref href={link}>
      <Box
        onClick={() => close(false)}
        {...props}
        color="#213047"
        fontSize={{ base: "32px", lg: "18px" }}
        fontFamily={{ base: "'Libre Baskerville', sans-serif", lg: "'Space Grotesk', sans-serif" }}
        textDecoration={isActive ? "underline" : "none"}
        fontWeight={isActive ? "bold" : "normal"}
        cursor="pointer"
        _hover={{
          textDecoration: "underline",
        }}
      >
        {children}
      </Box>
    </Link>
      
  )
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const {isOpen, onOpen, onClose} = useDisclosure();



  useEffect(() => {
    if(!isDrawerOpen){
      onClose()
    }else {
      onOpen()
    }
  }, [isDrawerOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        size="100%"
      >
        <DrawerOverlay />
        <DrawerContent
          background="linear-gradient(180deg, #F8D9D8 0%, #F8D9D8 50%, #FEEFDB 75%, #FEEFDB 100%)"
        >
          <DrawerHeader padding={{ base: "0 1rem", lg: "0" }} >
            <Flex direction="row" alignItems="center" justifyContent="space-between">
              <Image
                width={{ base: "75px", lg: "120px" }}
                height={{ base: "75px", lg: "120px" }}
                src="kasama-logo.png"
              />
              <Box
                onClick={() => setIsDrawerOpen(false)}
                width="47px"
                height="47px"
                borderRadius="full"
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#fdebd2"
                fontSize="26px"
              >
                <RxCross1 />
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody mt={16}>
            <Flex
              direction="column"
              gap={6}
            >
              <NavLink close={setIsDrawerOpen} link="/work">Work</NavLink>
              <NavLink close={setIsDrawerOpen} link="/about">About</NavLink>
              <NavLink close={setIsDrawerOpen} link="/partners">Partners</NavLink>
              <NavLink close={setIsDrawerOpen} link="/news">News</NavLink>
              <NavLink close={setIsDrawerOpen} link="/careers">Careers</NavLink>
              <NavLink close={setIsDrawerOpen} link="/contact">Contact</NavLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

       <Flex
        position="sticky"
        top="0"
        zIndex="sticky"
        direction="row"
        padding={{ base: "0 1rem", lg: "0" }}
        justifyContent={{ base: "space-between", lg: "center" }}
        alignItems="center"
        gap={12}
        backgroundColor={isScrolled ? "rgba(248, 217, 216, 0.4)" : "#F8D9D8"}
        backdropFilter={isScrolled ? "blur(10px)" : "none"}
        transition="all 0.3s ease"
        boxShadow={isScrolled ? "sm" : "none"}
      >
        <Image
          width={{ base: "75px", lg: "120px" }}
          height={{ base: "75px", lg: "120px" }}
          src="kasama-logo.png"
        />
        <Box
          onClick={() => setIsDrawerOpen(true)}
          width="47px"
          height="47px"
          borderRadius="full"
          display={{ base: "flex", lg: "none" }}
          justifyContent="center"
          alignItems="center"
          backgroundColor="#fdebd2"
          fontSize="26px"
        >
          <RxHamburgerMenu />
        </Box>
        <Flex
          display={{ base: "none", lg: "flex" }}
          direction="row"
          padding="1rem 2rem"
          gap={12}
          borderRadius={4}
          backgroundColor="#FDEADA"
        >
          <NavLink close={setIsDrawerOpen} link="/work">Work</NavLink>
          <NavLink close={setIsDrawerOpen} link="/about">About</NavLink>
          <NavLink close={setIsDrawerOpen} link="/partners">Partners</NavLink>
          <NavLink close={setIsDrawerOpen} link="/news">News</NavLink>
          <NavLink close={setIsDrawerOpen} link="/careers">Careers</NavLink>
          <NavLink close={setIsDrawerOpen} link="/contact">Contact</NavLink>
        </Flex>
      </Flex>
    </>
  )
}

export default Header;