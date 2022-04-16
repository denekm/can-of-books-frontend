import { Component } from 'react';
import { Card } from 'react-bootstrap';
import bob from './bobby.png';
import './About.css';
import marta from './marta.jpeg';
import danny from './danny.jpg';

class About extends Component {
  render() {
    return (
      <>
        <h1 id="h1-title">The Team</h1>

        <div id="container-bob">
          <Card id="bob" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={bob} />
            <Card.Body>
              <Card.Title id="username">Meet = Bob</Card.Title>
              <Card.Text>
                CEO of Team-Toxic. Sweetest guy on the planet.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="bob" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={marta} />
            <Card.Body>
              <Card.Title id="username">Meet = Marta</Card.Title>
              <Card.Text>
                Hello my name is Marta Deneke , I am originally from Ethiopia. I
                received my bachelor's in MIS in 2020. Since, the pandemic had
                just started right before my graduation I had a difficult time
                finding a job. So I started to look into becoming a software
                engineer and researched different boot camps. Then, I joined
                Code Fellows in November. While attending Western Washington
                University, I worked and volunteered at various companies in
                order to find my true passion. As a first generation college
                graduate I have faced different challenges to be where I am
                today and once I land my dream job and become a Software
                Engineer I would like to start a nonprofit in Ethiopia for young
                women that are interested in tech but don't know where to start.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="bob" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={danny} />
            <Card.Body>
              <Card.Title id="username">Meet = Danny</Card.Title>
              <Card.Text>
                Hello, my name is Danny. I recently was managing a warehouse for
                over 5 years and decided I needed a change. For most of my life
                I've been involved in music, be it writing, producing , and/or
                performing. Needless to say I have a strong creative side and
                wanted to express myself in a different medium. Software
                development allows just that. My friend was a drummer in my band
                and took on coding and suggested I looked into it and so I did.
                The creative process is a lot like writing music in software
                development. I work well with teams and love to motivate people
                and bring them together in achieving one goal. I believe my
                management skills along with my creative side I will be able to
                be an asset in a team environment. Taking classes in codeFellows
                and creating a page that I'm actually proud of has giving me the
                drive I need to continue exploring this path.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default About;
