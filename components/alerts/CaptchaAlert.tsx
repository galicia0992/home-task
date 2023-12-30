import { View } from 'react-native'
import { useState } from 'react';
import React from 'react'
import {
    AlertDialog,
    AlertDialogBackdrop,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogFooter,
    AlertDialogBody,
    Button,
    Text,
    Center,
    ButtonText,
    HStack,
    Icon,
    Heading,
    CheckCircleIcon
  } from '@gluestack-ui/themed';

type Props = {
    showAlertDialog:boolean,
    setShowAlertDialog:any
}

const CaptchaAlert = ({showAlertDialog, setShowAlertDialog}: Props) => {
    
  return (
    <>
      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false)
        }}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader borderBottomWidth="$0">
            <HStack space="sm" alignItems="center">
              <Icon
                as={CheckCircleIcon}
                color="$success700"
                $dark-color="$success300"
              />
              <Heading size="lg">¡Verificación completada!</Heading>
            </HStack>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="sm">
              Gracias por confirmar que eres humano.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter borderTopWidth="$0">
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowAlertDialog(false)
              }}
            >
              <ButtonText>Continuar</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default CaptchaAlert