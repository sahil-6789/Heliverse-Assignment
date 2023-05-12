import React from 'react';
import Card from './Card';
import './Team.css'
import { useDispatch } from 'react-redux';
import { teamActions } from '../store/team-slice';
import CardButton from './CardButton';
const Team=(props)=>{
const dispatch=useDispatch();
    const changeHandler=(event)=>{
  event.preventDefault();
  dispatch(teamActions.front());
    }
const Data=props.data;
return(
    <div className='body'>
        
    <h1 className='team-text'>Selected Team</h1>
    <div className='team-head'>
    <CardButton onClick={changeHandler}>HomePage</CardButton>
   
    </div>
 <div className='crypto_list'>
            {Data.map((user) => {
                return (
                    <Card
                    key={user.id}
                    image={user.image}
                    firstname={user.firstname}
                    lastname={user.lastname}
                    email={user.email}
                    gender={user.gender}
                    domain={user.domain}
                    available={user.available}
                    />
                    );
                })}
        </div>
                </div>
  
);
};

export default Team;