import { useState } from 'react'
import './App.css'
import Timer from './timer';


export default function App() {
  let [timer, showtimer] = useState(true);
  return (
    <>
      <button onClick={() => showtimer(!timer)}>show and hide timer</button>
      {timer && <Timer />}
    </>
  );
}
