import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import newUserSpace from "./newUserSpace"
import { FIREBASE_AUTH } from "../firebaseConfig"

const createUser = async (email, pass) =>{
    const auth = FIREBASE_AUTH
    try {
        const response = await createUserWithEmailAndPassword(auth, email, pass)
    } catch (error) {
        console.log(error.message)
    }
    finally{
    newUserSpace(email.replace(/\./g, '1'), "", "")
    console.log("alta correcta")
    }
    
}

export default createUser