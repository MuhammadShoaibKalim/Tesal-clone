import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import Footer from './Footer';

const Home = () => {
  return (
    <Container>
      <Section 
        title="3 Model"
        description="Long Range AWD From $34,9901"
         price="After Est. Savings"
        backgroundImg="model-3.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
        <Section
        title="Y Model"
        description="From $31,4902"
         price="After Est. Savings"
        backgroundImg="model-y.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="X Model"
        description="From $63,9903"
         price="After Est. Savings"
        backgroundImg="model-x.jpg"
       leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="S Model"
        description="From $66,4904"
         price="After Est. Savings"
        backgroundImg="model-s.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
        <Section
        // backgroundImg="cyber truck.jpg"
        backgroundImg="elon-musk-cybertruck.webp"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImg="solar-panel.jpg"
        leftBtnText=" Order Now"
        rightBtnText="Learn more"
      />
      <Section 
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText=" Order Now"
        rightBtnText="Learn more"
      />
      <Section 
        title="Power Wall"
        backgroundImg="wall.jpg"
        leftBtnText=" Order Now"
        rightBtnText="Learn more"
      />
      <Section 
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtnText=" Shop Now "
      />
      <Footer/>
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`;
