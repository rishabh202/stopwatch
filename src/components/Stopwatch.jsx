import React, {useState, useEffect, useRef} from 'react'

const Stopwatch = () => {

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {

  }, [isRunning]);
   
  function start(){

  }
  function stop(){

  }
  function reset(){

  }
  function format(){
   return `00:00:00`;
  }

  
  return (
  <div className='stopwatch'>
    <div className='display'>
      {format()}
    </div>
    <div className='controls'>
      <button onClick={start} className='start-btn'>Start</button>
      <button onClick={stop} className='stop-btn'>Stop</button>
      <button onClick={reset} className='reset-btn'>Reset</button>
      <button onClick={format} className='format-btn'>Format</button>
    </div>

  </div>
  )
}

export default Stopwatch
