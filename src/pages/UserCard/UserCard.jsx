import React from 'react'
import { User } from '../../widgets/infoUser/User'

export default function UserCard() {
  return (
    <div className='container'>
        <img src={User.img} alt="" style={{width:200}}/>
        <div>Имя:{User.firsname} </div>
        <div>Фамилия:{User.lastname}</div>
        <div>Почта:{User.email}</div>    
    </div>
  )
}
