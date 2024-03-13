import React from 'react';
import './List.css'


const List = (props) => {
    const {
    text,
    } = props

  return (
   <li className='li'>{text}</li>
  )
}
export default List