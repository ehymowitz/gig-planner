import { Box, Link, VStack } from '@chakra-ui/react'
import NextLink from "next/link"
import React from 'react'
import { FaGuitar, FaBeer, FaClock, FaMoneyBill } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'

const FadingLink = ({ children, link }) => {
  return (
    <NextLink href={link} passHref>
      <Link opacity="0.5" _hover= {{ opacity: "1"}}>
        {children}
      </Link>
    </NextLink>
  )
}

const SideMenu = () => {
  return (
    <Box bg="yellow.800" w="100%" p={6} pt={10} color="white">
      <VStack spacing={6}>
        <NextLink href="/" passHref>
          <Link pb={6}>
            Logo here
          </Link>
        </NextLink>
        <FadingLink link="/bands">
          <FaGuitar style={{margin: "auto"}} fontSize="36"/>
          Bands
        </FadingLink>
        <FadingLink link="/guests">
          <BsFillPersonFill style={{margin: "auto"}} fontSize="36"/>
          Guests
        </FadingLink>
        <FadingLink link="/money">
          <FaMoneyBill style={{margin: "auto"}} fontSize="36"/>
          Money
        </FadingLink>
        <FadingLink link="/timing">
          <FaClock style={{margin: "auto"}} fontSize="36"/>
          Timing
        </FadingLink>
        <FadingLink link="/venue">
          <FaBeer style={{margin: "auto"}} fontSize="36"/>
          Venue
        </FadingLink>
      </VStack>
    </Box>
  )
}

export default SideMenu
