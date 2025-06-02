import React from 'react';
import Bio from "../components/Bio"
import jobs from "../helper/Jobs"
import JobItem from "../components/JobItem"
const About = () => {
  return (
<main className='about'>
<div className="about-bgImg-container">
<Bio/>
</div>
<div className="about__container">
    {
        jobs.map((job,index)=>(
            <JobItem key = {index}
                year={job.year}
                company = {job.company}
                title={job.title}
                description = {job.description}
            />
        ))
    }
</div>
</main>
  )
}

export default About