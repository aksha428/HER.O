import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, HeroO, HeroQ, HeroR, HeroBtnWrapper, ArrowForward, ArrowRight, Img, ImgWrap} from './HeroElements';
import {Button} from '../ButtonElements';
import HeroImage from '../../images/svg-1.png';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type = 'video.mp4'/>
      </HeroBg>
      <HeroContent>
  <ImgWrap>
    <Img src={HeroImage} alt='Hero Image' />
  </ImgWrap>
  
  <div style={{ display: 'flex' }}>
          <HeroP style={{ color: '#1ad1ff' }}>Where we emphasize the&nbsp; </HeroP>
          <HeroO style={{ color: '#FFFF5C' }}> HER &nbsp;</HeroO>
          <HeroQ style={{ color: '#1ad1ff' }}>in&nbsp;</HeroQ>
          <HeroR style={{ color: '#FFFF5C' }}> Hero</HeroR>
        </div>


  <HeroBtnWrapper>
    <Button
      to='signup'
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      primary='true'
      dark='true'
    >
      Check it out! {hover ? <ArrowForward /> : <ArrowRight />}
    </Button>
  </HeroBtnWrapper>
</HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
