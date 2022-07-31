import React from 'react';
import Lottie from 'react-lottie'
import Message from './btn-loading.json'

export function MessageConfirm(){
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: Message,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  return(
    <Lottie options={defaultOptions}/>
  )
}