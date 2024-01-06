
const getTask = async (setData, user) => {
  const arr = []
    try {
    const response = await fetch(`https://task-casa-default-rtdb.firebaseio.com/${user}/.json`)
    const data = await response.json()
    Object.values(data[0]).map(item =>{
      arr.push(item)
    })
    } catch (error) {
      console.log(error)
    }
    finally{
      setData(arr)
    }
    
};
export default getTask;