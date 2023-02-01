import React from 'react'
import Collapsible from 'react-collapsible'

const Card = (props) => {
  return (
    <div id="card">
        <div id="main_card">
        <span id="detail_1">Hello <b>{props.name} !</b></span>
        <span id="detail_2"><b>Username</b> <br/>{props.username}</span>
        <span id="detail_3"><b>Address</b><br/>{props.add}</span>
        <span id="detail_4"><b>Email</b> <br/>{props.email}</span>
        </div>
        <br />
        <div id="more_info">
        <Collapsible trigger="More">
        More
        hello
        </Collapsible>
        </div>
    </div>
  )
}

export default Card
