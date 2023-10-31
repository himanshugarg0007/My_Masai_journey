import { useEffect, useState } from "react";

export default function Timer() {
  let [count, setcount] = useState(10);
  
useEffect(()=>{
    
    let timer = null;
    timer = setInterval(() => {
          setcount((prevcount)=>{
            return prevcount -1;
          });
        }, 1000)
        function cleanup(){
            clearInterval(timer);
        }
       return cleanup
},[])


  return (
    <>
      <h1>timer : {count}</h1>
    </>
  );
}
