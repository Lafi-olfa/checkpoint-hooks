import React from 'react'
import CardMovie from '../cardMovie/CardMovie'

const ListCard = ({movie,del}) => {
  console.log(movie)
  return (
    <div className='list'>
      {
        movie.map((el)=>(
          <div key={el.id} >
            <CardMovie movie={el} del={del} />
            </div> 
        ))
      }
    </div>
  )
}

export default ListCard
