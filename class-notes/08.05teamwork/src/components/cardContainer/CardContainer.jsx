import React from 'react'
import PlayerCard from '../playerCard/PlayerCard';

import "./CardContainer.scss"

const CardContainer = ({data,searchPlayer}) => {

  const filteredData =  searchPlayer.trim()==='' ? data : data.filter(player=>player.name.toLowerCase().includes(searchPlayer.trim().toLowerCase()))

  return (
    <main>

      <div className="cards">
        {filteredData.length>0 ?(
          filteredData.map((player,index)=>
            <PlayerCard player={player} key={index}/>
          )
        ): (<h3> No Player Found. Please ensure you're typing the correct name.</h3>)
        }
      </div>
      
    </main>
  )
}

export default CardContainer