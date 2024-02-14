import { getDatabase, ref, push } from "firebase/database"


const newUserSpace = (email, tarea, categoria, usuarioSolicitante, completado) =>{
    const db = getDatabase()
    push(ref(db, `${email}/` + 0),{
        usuarioSolicitante: usuarioSolicitante,
        category: categoria,
        tarea: tarea,
        id: Date.now(),
        completado: completado
    })
    push(ref(db, `${email}/` + 1),{
        category: categoria,
        usuarioSolicitante: usuarioSolicitante,
        tarea: tarea,
        completado: completado,
        id: Date.now()
    })
    push(ref(db, `${email}/` + 2),{
        category: categoria,
        usuarioSolicitante: usuarioSolicitante,
        tarea: tarea,
        completado: completado,
        id: Date.now()
    })
}
export default newUserSpace;