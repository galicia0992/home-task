import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import newUserSpace from "./newUserSpace"
import { FIREBASE_AUTH } from "../firebaseConfig"
import { Alert } from "react-native"


const createUser = async (email, pass, setSelectedIndex) =>{
    
    const auth = FIREBASE_AUTH
    try {
        const response = await createUserWithEmailAndPassword(auth, email, pass)
        Alert.alert(` La cuenta ${email}, se ha dado de alta correctamente`, [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
          setSelectedIndex(0)
    } catch (error) {
        console.log(error.message)
        Alert.alert(`${error.message}`, [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
    }
    finally{
    newUserSpace(email.replace(/\./g, '1'), "", "")
    }
    
}

export default createUser