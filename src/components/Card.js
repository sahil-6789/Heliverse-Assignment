import { useDispatch,useSelector } from 'react-redux';
import './Card.css';
import CardButton from './CardButton';
import  { teamActions } from '../store/team-slice';


const Card = (props) => {
  const dispatch=useDispatch();
  const frontPage=useSelector(state=>state.team.frontPage);
    const name=props.firstname+' '+props.lastname;
    let availables= "false";
    if(props.available===true){
        availables="true";
    }
    
    const { id,image,firstname,lastname,email,gender,domain,available} = props;
    const addUserHandler = (event) => {
      event.preventDefault();
      dispatch(
     teamActions.addUser({
          id,
          image,
          firstname,
          lastname,
          email,
          gender,
          domain,
          available,
          
       
        })
   
      );
    };


  return (
    <div className="card">
      <img className="avatar" src={props.image} alt="Avatar" />
      <div className="info">
        <h2 className="name">{name}</h2>
        <p className="email">{props.email}</p>
        <p className="availability">Availability: {availables}  </p>
        <p className="domain">Domain: {props.domain}</p>
        <p className="gender">Gender: {props.gender}</p>
       { frontPage && <CardButton type="submit" onClick={addUserHandler}>ADD USER</CardButton>}
      </div>
    
    </div>
  );
};

export default Card;


