import React from 'react'

const Card = (props) => {
  return (
    <div id="card">
        <span id="detail_1">Hello <b>{props.name} !</b></span>
        <span id="detail_2"><b>Username</b> <br/>{props.username}</span>
        <span id="detail_3"><b>Address</b><br/>{props.add}</span>
        <span id="detail_4"><b>Email</b> <br/>{props.email}</span>
        <br />
        <button>More</button>
    </div>
  )
}

export default Card
