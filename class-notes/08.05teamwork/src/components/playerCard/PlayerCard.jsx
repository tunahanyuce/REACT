import React from 'react'

import "./PlayerCard.scss"
import { useState } from 'react'

const PlayerCard = ({player}) => {

  const [visible,setVisible] = useState(true)
  return (
    <div className='player-card' onClick={()=>setVisible(!visible)}>
    {visible ? (<img src={player.img} alt="" />) : (<div className="statistics">
          {player.statistics.map((statistic,index)=><p key={index}>🏀 {statistic}</p>
          )}
        </div>)}
        <h4>{player.name}</h4>
    </div>
  )
}

export default PlayerCard