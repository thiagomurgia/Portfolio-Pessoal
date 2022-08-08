import React from 'react';
import Lottie from 'react-lottie'
import Message from './api-loading.json'

export function ApiLoading(){
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Message,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  return(
    <Lottie options={defaultOptions} style={{width: '30%'}}/>
  )
}