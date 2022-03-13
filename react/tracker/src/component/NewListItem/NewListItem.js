import {useState} from "react";
const NewListItem = (props)=>{

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");

    const submitHandler =(event) =>{
        event.preventDefault();

        const newListData = {
            title: enteredTitle,
            description : enteredDescription,
        };

        props.saveListData(newListData);

        setEnteredTitle("");
        setEnteredDescription("");
    }

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredTitle(event.target.value);
    };
    const descriptionChangHandler = (event) => {
        setEnteredDescription(event.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label> Title: </label>
                <input value={enteredTitle} onChange={titleChangeHandler} type="text"></input>
            </div>
            <div>
                <label> Description: </label>
                <input value={enteredDescription} onChange={descriptionChangHandler} type="text"></input>
            </div>
            <button type="submit">SUBMIT</button>
        </form>
        
    );
};
export default NewListItem;