/* eslint-disable import/no-unresolved */
import { Container } from './styles'

import {Spring, animated} from 'react-spring'

import { LottieHome } from '../../animations/HomeAnimation'

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
                <div className="header"><h5>thiago@murgia/home</h5></div>
                <div className="body-card">
                  <div className="line">
                    <div><p>murgia{'#'} <span>ls</span></p></div>
                    <div>
                      <ul>
                        <li>Apaixonado por tecnologia &nbsp;๐ซ</li>
                        <li>Adepto de sistemas open-source&nbsp;๐ง</li>
                        <li>Adora escrever cรณdigos&nbsp;๐จโ๐ป</li>
                        <li>Eterno estudante&nbsp;๐จโ๐</li>
                        <li>Compartilha conhecimento&nbsp;๐จโ๐ซ</li>
                        <li>Trabalha em equipe&nbsp;๐ค</li>
                        <li>Busca sempre a melhor maneira para resolver problemas&nbsp;๐ต๏ธโโ๏ธ</li>
                        <li>Adora escutar de mรบsica&nbsp;๐งโ๐ค</li>
                        <li>Joga video game no tempo livre&nbsp;๐ฎ</li>
                      </ul>
                    <div><p>murgia{'#'} <span>|</span></p></div>
                    </div>
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