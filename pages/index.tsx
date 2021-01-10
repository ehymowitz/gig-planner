import React from 'react'
import Head from 'next/head'
import { Box } from "@chakra-ui/react"
import LoginForm from '../components/login-form'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Gig Planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box bg="gray.400" w="100%" h="100vh" p={4} color="white">
        Menu on the left, content on the right. Login first
        <LoginForm/>
      </Box>
    </div>
  )
}
