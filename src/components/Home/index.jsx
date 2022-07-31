import { Container } from "./styles"

import {Spring, animated} from 'react-spring'

import UbuntuImg from "../../assets/icons/ubuntu-stroke.svg"

import { LottieHome } from "../../animations/HomeAnimation"

export function Home(){

  return(
    <Spring
      from={{opacity: 0}}
      to={[
        {opacity:1},
      ]}
    >
      {styles =>(
        <animated.div style={styles}>
          <Container>
            <div className="left">
              <div className="lottie">
              <LottieHome />
              </div>
            </div>
            <div className="right">
              <div className="content">
                <div className="header">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div><p>murgia@thiago</p></div>
                </div>
                <div className="content-body">
                  <div className="wrapper-server">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div><img src={UbuntuImg}/></div>
                    <div className="anglex"></div>
                    <div className="angley"></div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </animated.div>
      )}
    </Spring>
  );
}