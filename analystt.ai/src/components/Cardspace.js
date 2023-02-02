import React, { useEffect, useState } from 'react'
import Card from './Card';

const Cardspace = () => {
    
    const [details,setdetails]=useState([]);
    const [currentPage,setcurrentPage]=useState(1);
    const [postsPerPage,setpostsPerPage]=useState(3);

    const [isLoading,setisLoading]=useState(true);

    const fetch_data=async()=>{
        try{
            let url="https://jsonplaceholder.typicode.com/users";

            const res=await fetch(url);
            const data = await res.json();
            setisLoading(false);
            setdetails(data);
            console.log(data);
        }catch(error){
            console.log("error");
        }
    }

    useEffect(()=>{
        fetch_data();
    },[]);

    const lastPostIndex=currentPage*postsPerPage;
    const firstPostIndex=lastPostIndex-postsPerPage;
    const currentPosts=details.slice(firstPostIndex,lastPostIndex)

    const prevPage=()=>{
        if(currentPage==1){
            alert("No pages before this")
        }
        else{
            setcurrentPage(currentPage-1);
        }
    }
    const nextPage=()=>{
        if(currentPage==4){
            alert("No pages after this")
        }
        else{
            setcurrentPage(currentPage+1);
        }
    }


 if (isLoading){
    return (
        <>
        <h1 align="center">Loading...</h1>
        </>
    )
 }
  return (
    <>
        <div id="prev_next_btn">
            <button id="prev" onClick={prevPage}>Prev</button>
            <button id="next" onClick={nextPage}>Next</button>
        </div>
        <div id="container">
            <div className="card_details">
                {
                    currentPosts.map((element)=>{
                        return(
                            <Card 
                            name={element.name}
                            username={element.username} 
                            add_street={element.address.street} 
                            add_suite={element.address.suite}
                            add_city={element.address.city}
                            email={element.email} 
                            phone={element.phone}
                            company={element.company.name}
                            desc={element.company.bs}
                            website={element.website}
                            />
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Cardspace
