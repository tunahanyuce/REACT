import React from 'react'
import developers from '../helper/developers'
import { useParams } from 'react-router-dom'
import slugify from '../helper/Slugify'
import { Card,Button} from 'react-bootstrap'

const DeveloperDetails = () => {
    console.log(developers)

    const {name}=useParams()

    const developer=  developers.find((dev)=>slugify(dev.name)===name)

   if (!developer){
      return <p>Loading..</p>
    }

    
  return (
      <Card
      className="text-white bg-dark m-auto shadow-lg developer-card"
      style={{
        paddingTop:"1rem",
        width: "25rem",
        borderRadius: "1rem",
        transition: "transform 0.3s",
      }}
    >
      <Card.Img
        variant="top"
        src={developer.avatar}
        alt={developer.title}
        style={{
          objectFit: "cover",
          height: "250px",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
        }}
      />
      <Card.Body className="bg-gradient text-white rounded-bottom">
        <Card.Title className="text-danger fw-bold">{developer.title}</Card.Title>
        <Card.Text className="text-secondary" style={{ minHeight: "80px" }}>
          {developer.bio}
        </Card.Text>
        <Button variant="danger" className="w-100">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  )
}

export default DeveloperDetails