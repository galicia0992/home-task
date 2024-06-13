import {FIREBASE_AUTH} from '../firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';


export const logInUser = async (email, pass, navigation, setShowSpinner, setIsDisabled, setEmail, setPassword) => {
  setShowSpinner(true)
  const auth = FIREBASE_AUTH;
  try {
    const response = await signInWithEmailAndPassword(auth, email, pass);
    navigation.navigate('Home');
  } catch (error) {
    console.log(error.message)
  }finally{
    setShowSpinner(false)
    setIsDisabled(true)
    setEmail("")
    setPassword("")
  }
};
