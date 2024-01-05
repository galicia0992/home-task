
const getTask = async (setData, user) => {
  
    try {
    const response = await fetch(`https://task-casa-default-rtdb.firebaseio.com/${user}/.json`)
    const data = await response.json()
    Object.values(data[0]).map(item =>{
      setData(item)
    })
    } catch (error) {
      console.log(error)
    }
    
};
export default getTask;