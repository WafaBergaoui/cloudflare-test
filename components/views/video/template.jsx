import React from 'react'
import { Stream } from "@cloudflare/stream-react";
import { Container, Row, Card } from 'react-bootstrap'

const Video = ({ videoID }) => {
  return (
    <Container>
      <Row>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Stream controls src={videoID} />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )

}
export default Video
