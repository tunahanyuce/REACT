import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <Container className='py-5'>
        <Row className='align-items-center'>
          <Col>
            <h1 className='display-1'>Welcome to GameZone</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero.</p>
            <button className='btn btn-danger'>
              Explore Games
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home