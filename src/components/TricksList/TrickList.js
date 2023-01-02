import React from 'react'
import TrickCard from '../TrickCard/TrickCard'

function TrickList({tricks}) {
    const allTricks = tricks.map(trick => {
        return (
            <TrickCard 
                key={trick.id}
                id={trick.id}
                stance={trick.stance}
                name={trick.name}
                obstacle={trick.obstacle}
                tutorial={trick.tutorial}
            />
        )
    })

  return (
    <div className='trick-list-container'>
        { allTricks }
    </div>
  )
}

export default TrickList