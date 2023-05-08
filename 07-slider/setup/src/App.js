import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import people from './data';
function App() {
  const[poeple,setPeople] = useState(data)
  const [index,setIndex] = useState(0)
  return <section className='section'>
    <div className="title">
      <h2><span>/</span>Reviews</h2>
    </div>
    <div className="section-center">

    {people.map ((person,personIndex)=>{
   const{id,name,quote,image,title} = person
let  position = 'nextSlide'
if(personIndex === index){
  position = 'activeSlide'
}
return <article className={position} key={id}>
      <img src={image} className='person-img' alt="" />
    <h4>{name}</h4>
    <p className="title">{title}</p>
    <p className="text">{quote}</p>
    <FaQuoteRight/>
    </article>
    })}
    <button className="prev" onClick={()=>
      {if(index>0)setIndex(index-1)}}><FiChevronLeft/></button>
    <button className="next" onClick={()=>{
      if(index<3)setIndex(index+1)
    }}><FiChevronRight/></button>
    </div>
    
      </section>
}

export default App;
