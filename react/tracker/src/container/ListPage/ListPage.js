import {useState} from "react";
import List from '../../component/List/List'
import NewListItem from '../../component/NewListItem/NewListItem';

const INPUT_DUMMY_DATA = [
    {
        title: 'Practice',
        description: 'Practice helps us to improve'
    },
    {
        title: 'Apple',
        description: 'An apple a day keeps the doctor away'
    },
    {
        title: 'Plan',
        description: 'A goal without a plan is just a wish'
    },
]; 

const ListPage = () => {

    const [initalData, setInitialData] = useState(INPUT_DUMMY_DATA);

    const onSaveListData = (newListItem) => {
      setInitialData((prevState)=>[newListItem, ...prevState])
    };
   
    return (
        <div className='App'>
        <List listData={initalData} />
        <NewListItem saveListData={onSaveListData}/>
    </div>
    );
};

export default ListPage;