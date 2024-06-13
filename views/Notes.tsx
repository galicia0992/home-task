import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ModalAddNotes } from '../components/modals/ModalAddNotes'
import { useBooleanNotesContext } from '../context/NotesBooleanContext'
export default function Notes() {
  const booleanNotes = useBooleanNotesContext()

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