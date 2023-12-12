import { getDatabase, ref, push } from "firebase/database"


const nameUser = (email, name, lastName) =>{
    const db = getDatabase()
    push(ref(db, `${email}/` + "user"),{
        name:name,
        lastName:lastName
    })
}
export default nameUser;