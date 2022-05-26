import React from 'react'
import { Stream } from "@cloudflare/stream-react";
import { Container, Row, Card } from 'react-bootstrap'
import S from './style.module.scss'

const Video = ({videoID}) => {
  return (
    <Container>
      <Row>
        <Card className={S.videoStyle}>
          <Card.Body>
            <Stream controls src={videoID} />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )

}
export default Video
