import { useUserContext } from "../context/UserContext"
const postTask = async(user) =>{
   try {
    const response = await fetch(`https://task-casa-default-rtdb.firebaseio.com/${user}/0/.json`,{
      method:'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
     },
     body: JSON.stringify({
      category:"prueba"
     })
    })
    const data = response.json()
    console.log(data)
   } catch (error) {
      
   }

}

export default postTask