import React from 'react'

export const CarouseItem = ({item}) => {
  return <div className='carousel-item'>
    <div></div>
    <img className='carousel-img' src={item.imgUrl} alt='hannover' />
    <div className='carousel-text' >{item.description}</div> 
  </div>
  
}
