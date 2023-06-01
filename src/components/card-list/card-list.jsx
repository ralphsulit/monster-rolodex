import Card from '../card/card';
import './card-list.css';

const CardList = ({monsters}) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card monster={monster}/>;
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props

//     return (
//       // map through the monster array
//       <div className='card-list'>
//       {monsters.map((monster) => {
//           return (
//             <Card monster={monster} />
//           )
//         })}
//       </div>
//     )
//   }
// }

export default CardList;