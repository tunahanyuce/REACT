import React from 'react'
import contactInfo from '../helper/ContactInfo';

const Contacts = () => {
  return (
    <div className='contact-bgImg-container'>
    <main className='contact'>
        <h2>Contact Me...</h2>
        <div className='contact__list'>
            {
                contactInfo.map((itemiindex)=>(
                    <div key={index} className='contact__item'>
                        <i className='{item.icon}'></i>{itemiindex.label}
                        <div className='text-secondary'>{itemiindex.value}

                        </div>

                    </div>
                ))
            }

        </div>

    </main>

    </div>
  )
}

export default Contacts