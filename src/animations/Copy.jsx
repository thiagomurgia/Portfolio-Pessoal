import React from 'react';
import Lottie from 'react-lottie'
import CopyAnim from './copy-anim.json'

export function Copy(){
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: CopyAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  return(
    <Lottie options={defaultOptions} style={{maxWidth:'25px'}}/>
  )
}