import React, { useEffect } from 'react'

const Cardspace = () => {

    const fetch_data=async()=>{
        try{
            let url="https://jsonplaceholder.typicode.com/users";

            const res=await fetch(url);
            const data = await res.json();

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
    </>
  )
}

export default Cardspace
