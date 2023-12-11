import {FIREBASE_AUTH} from '../firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';

export const logInUser = async (email, pass, navigation) => {
  const auth = FIREBASE_AUTH;
  try {
    const response = await signInWithEmailAndPassword(auth, email, pass);
    navigation.navigate('Tasks');
  } catch (error) {
    console.log(error.message)
  }
};
