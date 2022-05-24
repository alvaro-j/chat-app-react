import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import ChatRoom from './ChatRoom'

const Dictator = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <ChatRoom transcript={transcript} />
    </div>
  )
}
export default Dictator;