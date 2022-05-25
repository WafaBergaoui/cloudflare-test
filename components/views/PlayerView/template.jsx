import React, { useRef } from 'react';
import { HTMLStreamElement, Stream } from "@cloudflare/stream-react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Router from 'next/router'
import S from './style.module.scss'


const PlayerView = ({ videos }) => {
  const videoRef = useRef(null);
  console.log(videos);

  const onClick = () => {
    Router.push('/548a1762f17f8ea1cda8344e0e48de7a')
  }

  // videos?.map((video, key) => {
  //   return (
  //     <Stream
  //       controls
  //       streamRef={videoRef}
  //       src={video.uid} />
  //   )
  // })

  return (
    <Container>
      <Row >
        <Col>
        <Card className={S.cardsStyle} >
              <Stream controls src={videos[0].uid} />
          <Card.Body>
            <Card.Title>{videos[0].meta.name}</Card.Title>
            <Card.Text>{videos[0].created}</Card.Text>
            <Button onClick={onClick} style ={{marginBottom: "10px"}} variant="primary">Go to video</Button>
          </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className={S.cardsStyle} >
              <Stream controls src={videos[1].uid} />
            <Card.Body>
              <Card.Title>{videos[1].meta.name}</Card.Title>
              <Card.Text>{videos[1].created}</Card.Text>
              <Button onClick={onClick} style ={{marginBottom: "10px"}} variant="primary">Go to video</Button>
            </Card.Body>          
          </Card>
        </Col>

        <Col>
          <Card className={S.cardsStyle} >
              <div onClick={onClick}>
                <Stream controls src={videos[2].uid} />
              </div>
            <Card.Body>
              <Card.Title>{videos[2].meta.name}</Card.Title>
              <Card.Text>{videos[2].created}</Card.Text>
              <Button style ={{marginBottom: "10px"}} variant="primary">Go to video</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={S.cardsStyle} >
              <div>
                <Stream controls src={videos[3].uid} />
              </div>
          <Card.Body>
              <Card.Title>{videos[3].meta.name}</Card.Title>
              <Card.Title>{videos[3].created}</Card.Title>
              <Button style ={{marginBottom: "10px"}} variant="primary">Go to video</Button>
            </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default PlayerView
