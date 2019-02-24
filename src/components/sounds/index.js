import React from 'react';
import song from './return.mp3'

const Sound = ({play}) => {
  if (play) {
    return(
      <audio src={song} type="mp3" autoPlay/>
  )} else {
    return null;
  }
}

export default Sound;