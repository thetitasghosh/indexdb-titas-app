import Dexie from "dexie";
// import {useLiveQuery} from 'dexie-react-hooks'

const IndexDB = new Dexie("TitasTodoDB");
IndexDB.version(1).stores({
  todos: "id,name,text,checked",
});
export default IndexDB;
