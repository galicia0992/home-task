import {getDatabase, ref, onValue} from 'firebase/database';

const getTask = async (setListaLinks, email) => {
  const db = getDatabase();
  const starCountRef = ref(db, `${email}/0`);
  onValue(starCountRef, snapshot => {
    const data = snapshot.val();
    let arr = []
    Object.values(data).map(item => {
      arr.push(item);
    });
    setListaLinks(arr);
  });
};
export default getTask;