import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Content>
        <PriceDetails>
          <PriceText>Price before estimated savings is $47,490, excluding taxes and fees. Subject to change.</PriceText>
          <LearnMore href="#">Learn about est. gas savings.</LearnMore>
          <PriceText>Price before estimated savings is $44,990, excluding taxes and fees. Subject to change.</PriceText>
          <LearnMore href="#">Learn about est. gas savings.</LearnMore>
          <PriceText>Price before estimated savings is $77,990, excluding taxes and fees. Subject to change.</PriceText>
          <LearnMore href="#">Learn about est. gas savings.</LearnMore>
          <PriceText>Price before estimated savings is $72,990, excluding taxes and fees. Subject to change.</PriceText>
          <LearnMore href="#">Learn about est. gas savings.</LearnMore>
        </PriceDetails>
        <FooterLinks>
          <FooterLink href="#">Tesla © 2024</FooterLink>
          <FooterLink href="#">Privacy & Legal</FooterLink>
          <FooterLink href="#">Vehicle Recalls</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">News</FooterLink>
          <FooterLink href="#">Get Updates</FooterLink>
          <FooterLink href="#">Locations</FooterLink>
        </FooterLinks>
      </Content>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  padding: 20px 0;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const PriceDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const PriceText = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 5px 0;
`;

const LearnMore = styled.a`
  font-size: 14px;
  font-weight:bold;
  color: white;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 10px 15px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

