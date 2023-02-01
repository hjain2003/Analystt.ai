import React, { useEffect, useState } from 'react'
import Card from './Card';

const Cardspace = () => {
    
    const [details,setdetails]=useState([]);

    const fetch_data=async()=>{
        try{
            let url="https://jsonplaceholder.typicode.com/users";

            const res=await fetch(url);
            const data = await res.json();

            setdetails(data);
            console.log(data);
        }catch(error){
            console.log("error");
        }
    }

    useEffect(()=>{
        fetch_data();
    },[]);

    

  return (
    <>
        <div id="container">
            <div className="card_details">
                {
                    details.map((element)=>{
                        return(
                            <Card name={element.name} username={element.username} add={element.address.street} email={element.email}/>
                        )
                    })
                }
                <Card/>
            </div>
        </div>
    </>
  )
}

export default Cardspace
