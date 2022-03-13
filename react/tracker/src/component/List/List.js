import ListItem from '../ListItem/ListItem'
import './List.css';
// const ListData = [
//     {
//         title: 'Practice',
//         description: 'Practice helps us to improve'
//     },
//     {
//         title: 'Apple',
//         description: 'An apple a day keeps the doctor away'
//     },
//     {
//         title: 'Plan',
//         description: 'A goal without a plan is just a wish'
//     }
// ];

const List = (props) =>{
    return (
        <div>
          { props.listData.map((details,items) => (
              <ListItem
                key = {items}
                title = {details.title}
                description = {details.description} 
              ></ListItem>
            )
          )
          }
        </div>
    );
};

export default List;