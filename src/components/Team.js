import React from 'react';
import Card from './Card';
import './Team.css'
const Team=(props)=>{

const Data=props.data;
return(
    <div className='body'>
    <h1 className='team-text'>Selected Team</h1>
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