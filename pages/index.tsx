import React from 'react'
import Head from 'next/head'
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react"
import LoginForm from '../components/login-form'


export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Head>
        <title>Gig Planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </ModalContent>
      </Modal>

      {
        // put ui here (behind modal)
      }
    </div>
  )
}
