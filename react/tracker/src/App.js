
import './App.css';
import ListPage from "./container/ListPage/ListPage";


const App = () => {
  const setMyTaskPage = false;

  return (
    <div className="App">
    {/* {setMyTaskPage ? <TaskPage></TaskPage> : <ListPage></ListPage>} */}
    {/* <TaskPage></TaskPage> */}
    <ListPage></ListPage>
  </div>
  );
}

export default App;
