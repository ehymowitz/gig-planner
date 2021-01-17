import React from 'react'
import { Grid } from '@chakra-ui/react'
import Head from 'next/head'
import SideMenu from './side-menu'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Gig Planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        templateColumns="1fr 5fr"
        gap={4}
        h="100vh"
      >
        <SideMenu />
        { children }
      </Grid>
    </div>
  )
}

export default Layout
