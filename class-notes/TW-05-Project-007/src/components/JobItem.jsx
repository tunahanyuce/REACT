import React from 'react'

const JobItem = ({year,company,title,description}) => {
  return (
    <div className='about__job'>
        <h2 className='text-secondary'>{year}</h2>
        <h3>{company}</h3>
        <h6>{title}</h6>
        <p>{description}</p>

    </div>
  )
}

export default JobItem