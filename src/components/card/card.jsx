import './card.css';

const Card = ({monster}) => {
  const { name, email, id } = monster;
  return (
    <div className='card-container' key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class CardContainer extends Component {
//   render() {
//     const { name, email, id } = this.props.monster;
//     return (
//       <div>
//         <div className='card-container' key={id}>
//               <img
//                 alt={`monster ${name}`}
//                 src={`https://robohash.org/${id}?set=set2&size=180x180`}
//               />
//               <h2>{name}</h2>
//               <p>{email}</p>
//             </div>
//       </div>
//     )
//   } 
// };

export default Card;