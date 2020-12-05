
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Global, Local, Provinsi } from './page'
import { Container, Jumbotron, Breadcrumb, Carousel, Spinner } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Covid-Tracker</h1>
        <nav>
        <ul>
        <li>
    <Jumbotron fluid>
                
    <Container>

    <Breadcrumb>
        <Breadcrumb.Item href="Global">Global</Breadcrumb.Item>
        <Breadcrumb.Item href="Local">Local</Breadcrumb.Item>
        <Breadcrumb.Item href="Provinsi">Province</Breadcrumb.Item>
    </Breadcrumb>

    <Carousel>
        <Carousel.Item>
          <img
          className="d-block w-100"
          style = {{width: '800px',height: '400px',marginBottom: '20px'}}
          src="https://cherishealth.com/wp-content/uploads/2020/03/corona-scaled.jpg"
          alt="First slide"/>

    <Carousel.Caption>
          <h3>Covid-19</h3>
          <p>
            Coronavirus disease (COVID-19) is an infectious disease caused 
            by a newly discovered coronavirus.
            Most people infected with the COVID-19 virus will experience 
            mild to moderate respiratory illness and recover without requiring special treatment. 
            Older people, and those with underlying medical problems like cardiovascular disease, diabetes, 
            chronic respiratory disease, and cancer are more 
            likely to develop serious illness.
          </p>
</Carousel.Caption>

</Carousel.Item>

        <Carousel.Item>
         <img
          className="d-block w-100"
          style = {{width: '800px',height: '400px',marginBottom: '20px'}}
          src="https://i.pinimg.com/564x/fd/69/d7/fd69d7b336152709d9a5d3a8f71a1a42.jpg"
          alt="Second slide"/>

    <Carousel.Caption>
          <p>
            Social distancing, also called “physical distancing,” 
          means keeping a safe space between yourself and other people
          who are not from your household.
          To practice social or physical distancing, stay at least 6 feet 
          (about 2 arms’ length) from other people who are not from your household in 
          both indoor and outdoor spaces.
          </p>
</Carousel.Caption>

</Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      style = {{width: '800px',height: '400px',marginBottom: '20px'}}
      src="https://thumbs.dreamstime.com/b/medical-antibacterial-protective-blue-face-mask-black-background-copy-space-concept-prevention-respiratory-sickness-182732225.jpg"
      alt="Third slide"/>

    <Carousel.Caption>
      <h3>Mask</h3>
      <p>
          Yes, if you are in a public place where you will encounter other people, 
          you should wear a mask. Masks help contain respiratory droplets that
         can transmit SARS-CoV-2, the coronavirus that causes COVID-19,
         from people who do not know they have the virus.
      </p>
</Carousel.Caption>

</Carousel.Item>

</Carousel>

<>
  <Spinner animation="border" size="sm" />
  <Spinner animation="border" />
  <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" />
</>
<h1>Know About Covid-19
    See the Realtime  Global, Local, Province Covid-19 situation!
    </h1>
    <p>
      The coronavirus, or Covid-19, is inciting panic for a number of reasons, it's a new virus, meaning
      no one has immunity, and there is no Vaccine. 
    </p>
    
  </Container>
  
</Jumbotron>
</li>
 
            </ul>
          </nav>
      </div>
      <Switch>
        <Route path="/global">
        <Global/>
        </Route>
        <Route path="/local">
        <Local/>
        </Route>
        <Route path="/provinsi">
        <Provinsi/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;