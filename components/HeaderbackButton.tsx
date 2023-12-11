import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useSetBooleanNavContext } from '../context/BottomNavContext'
import { useNavigation } from '@react-navigation/native'

export default function HeaderbackButton() {
    const setBooleanNav = useSetBooleanNavContext()
    const navigation = useNavigation()

    const logOut = (): void =>{
      setBooleanNav(false)
      navigation.navigate("Log in", )
    }
  return (
    <View>
      <Button
      onPress={logOut}
      title='Log Out'
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({})