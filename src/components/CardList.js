import React from "react";



import "./CardList.css";
import Card from "./Card";

const CardList = ({ Data }) => {

  
    return (
        <div className='crypto_list'>
            {Data.map((user) => {
                return (
                    <Card
                        key={user.id}
                        id={user.id}
                        image={user.avatar}
                        firstname={user.first_name}
                         lastname={user.last_name}
                         email={user.email}
                         gender={user.gender}
                         domain={user.domain}
                         available={user.available}
                    />
                );
            })}
        </div>
    );
};

export default CardList;