import React from 'react';
import './Header.css'


const Header = (props) => {
    const {
    text,
    } = props

  return (
   <h1 className='h1'>{text}</h1>
  )
}
export default Header