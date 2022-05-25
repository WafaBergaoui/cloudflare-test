import React, { useRef } from 'react';
import { HTMLStreamElement, Stream } from "@cloudflare/stream-react";
import { Container, Row, Col, Card } from 'react-bootstrap'

const PlayerView = ({ videos }) => {
  const streamRef = useRef<HTMLStreamElement>(null);
  console.log(videos);

  // {videos?.map((video, key) => {
  //   return (
  //     <div key={key}>
  //       <Stream controls src={video.uid} />
  //     </div>
  //   )
  // })}

  return (
    <Container>
      <Row >
        <Col>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Stream controls src={videos[0].uid} />
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Stream controls src={videos[1].uid} />
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Stream controls src={videos[2].uid} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '25rem' }}>

            <Card.Body>
              <Stream controls src={videos[3].uid} />
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}
export default PlayerView
