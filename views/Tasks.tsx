import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useSetBooleanNavContext } from '../context/BottomNavContext'

type Props = {}

const Tasks = ():JSX.Element => {
    const setBooleanNav = useSetBooleanNavContext()
    useEffect(() => {
      setBooleanNav(true)
    }, [])
    
  return (
    <View>
      <Text>Tasks</Text>
    </View>
  )
}

export default Tasks