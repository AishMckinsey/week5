import "./ListItem.css";


const ListItem = (props) =>{
    return (
        <div className='list-item-container'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};
export default ListItem;