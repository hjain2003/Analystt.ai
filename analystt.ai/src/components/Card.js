import React, { useState } from 'react';
import Collapsible from 'react-collapsible';

const Card = (props) => {

  const [value,setvalue]=useState("More info");
  const [style,setstyle]=useState({
    textDecoration:'underline',
    fontStyle:'italic'
  })
  
  const toggle_open=()=>{
    if(value=="More info"){
    setvalue("Show less");
    }
  }
  const toggle_close=()=>{
    if(value=="Show less"){
    setvalue("More info");
    }
  }
  return (
    <>
      <div id="main_card_col">
        <div id="main_card_row">
          <span id="detail_1" className='info'>Hello <b>{props.username} !</b></span>
          <span id="detail_2" className='info'><b>Name</b> <br />{props.name}</span>
          <span id="detail_3" className='info'><b>Contact</b><br />{props.email}</span>
          <span id="detail_4" className='info'><b>Company</b> <br />{props.company}</span>
        </div>
      </div>
      
      <Collapsible trigger={value} onTriggerOpening={toggle_open} onTriggerClosing={toggle_close} triggerStyle={style}>
        
        <div id="more_info">
          <h3><u>Description</u></h3>
          <span id="desc_heading">{props.company}</span>
          <br />
          <div id="desc_row">
            <div id="desc_col_1">
            <b><i>Contact person:</i> </b>{props.name}
            <br /><br/>
            <b><i>Phone:</i></b> {props.phone}
            <br/><br/>
            <b><i>Email :</i></b> {props.email}
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div id="desc_col_2">
            <b><i>Company goals:</i></b> {props.desc}
            <br/><br/>
            <b><i>Company Website:</i></b> {props.website}
            <br /><br/>
            <b><i>Company address:</i> </b>{props.add_street}, {props.add_suite}, {props.add_city}
            </div>
            </div>
          </div>
      </Collapsible>
    </>
  )
}

export default Card
