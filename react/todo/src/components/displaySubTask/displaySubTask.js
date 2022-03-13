import Item from '../displayItem/displayItem'

const DisplaySubTask = (props) => {
    return (
        <div> 
                {
                    props.subTask.map( (details) => (
                        console.log(details)
                    //  <Item value = {details}></Item>
                    ))
                }
        </div>
    );
};

export default DisplaySubTask;
