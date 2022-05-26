import React, { useState, useRef } from 'react';
import { HTMLStreamElement, Stream } from "@cloudflare/stream-react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { UploadVideo } from '../../modals';
import Router from 'next/router'
import S from './style.module.scss'


const PlayerView = ({ videos }) => {
  //const [modalOpen, setModalOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const onClick1 = () => {
    Router.push('/548a1762f17f8ea1cda8344e0e48de7a')
  }

  const onClick2 = () => {
    Router.push('/f093769230f52d709c553ddb15d7570a')
  }

  const onClick3 = () => {
    Router.push('/a7d0a14f8d889a74a3860348e3d06f49')
  }

  const onClick4 = () => {
    Router.push('/5f24f38af8340c2b76514dc1bd66b91b')
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
    <div>
      {/* <Button onClick={handleShow} className={S.addVideo} variant="primary">Ajouter un video</Button>
      <UploadVideo show={show} setShow={setShow}/> */}
      <Container>
        <Row >
          <Col>
            <Card className={S.cardsStyle} >
              <Stream controls src={videos[0].uid} />
              <Card.Body>
                <Card.Title>{videos[0].meta.name}</Card.Title>
                <Card.Text>{videos[0].created}</Card.Text>
                <Button onClick={onClick1} style={{ marginBottom: "10px" }} variant="primary">Go to video</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className={S.cardsStyle} >
              <Stream controls src={videos[1].uid} />
              <Card.Body>
                <Card.Title>{videos[1].meta.name}</Card.Title>
                <Card.Text>{videos[1].created}</Card.Text>
                <Button onClick={onClick2} style={{ marginBottom: "10px" }} variant="primary">Go to video</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className={S.cardsStyle} >
              <Stream controls src={videos[2].uid} />
              <Card.Body>
                <Card.Title>{videos[2].meta.name}</Card.Title>
                <Card.Text>{videos[2].created}</Card.Text>
                <Button onClick={onClick3} style={{ marginBottom: "10px" }} variant="primary">Go to video</Button>
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
                <Button onClick={onClick4} style={{ marginBottom: "10px" }} variant="primary">Go to video</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  );
}
export default PlayerView
