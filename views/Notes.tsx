import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { ModalAddNotes } from '../components/modals/ModalAddNotes'
import { useBooleanNotesContext } from '../context/NotesBooleanContext'
export default function Notes() {
  const booleanNotes = useBooleanNotesContext()
  const [notas, setNotas] = useState("")
useEffect(() => {
  setNotas("notas")
}, [])
console.log(notas)
  return (
    <View style={{backgroundColor:"white", height:"100%"}}>
      <Text>Notes</Text>
      {
        booleanNotes ? <ModalAddNotes></ModalAddNotes>:""
      }
    </View>
  )
}

const styles = StyleSheet.create({})