import React from 'react';
import Lottie from 'react-lottie'
import Dev from './dev.json'

export function LottieHome(){
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Dev,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  return(
    <Lottie options={defaultOptions}/>
  )
}