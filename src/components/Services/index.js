import React from 'react';
import Icon1 from '../../images/svg-6.svg';
import Icon2 from '../../images/svg-7.svg';
import Icon3 from '../../images/svg-4.svg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>OUR SERVICES</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Raise Awareness</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Collect Funds</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Empower Women</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;
