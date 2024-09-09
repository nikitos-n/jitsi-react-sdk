import React from 'react'
import { JitsiMeeting } from '@jitsi/react-sdk'

export default function Jitsi() {
  return (
    <JitsiMeeting
      roomName='test room'
      displayName='test name'
      onApiReady={(api) => console.log('Hello everyone!')}
      getIFrameRef = { (iframeRef) => { 
        iframeRef.style.width = '100%';
        iframeRef.style.height = '100vh';
      } }
    />
  )
}
