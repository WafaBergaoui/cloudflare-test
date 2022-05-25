import React from 'react'
import { Stream } from "@cloudflare/stream-react";
import { Container, Row, Card } from 'react-bootstrap'
import S from './style.module.scss'

const Video = () => {
  return (
    <Container>
      <Row>
        <Card className={S.videoStyle}>
          <Card.Body>
            <Stream controls src="548a1762f17f8ea1cda8344e0e48de7a" />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )

}
export default Video
