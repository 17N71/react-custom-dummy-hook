import {useDummyHook} from "./useDummyHook.jsx";
import {useEffect} from "react";

function App() {
  const {createArray,array,randomF,changeAndRemove,removeLast,keep5,setToOneTwo,clear} = useDummyHook()

  useEffect(() => {
    //write if you need own array length createArray(// your number
    // )
  },[]);
  return (
    <div>
      <p>
        {JSON.stringify(array)}
      </p>
      <div>
        <br/>
      <button onClick={()=>randomF()}>Add random on last position</button><br/>
      <button onClick={()=>changeAndRemove()}>change second number to 9 and remove last position</button><br/>
      <button onClick={()=>removeLast()}>remove last position </button><br/>
      <button onClick={()=>keep5()}>keep number less then 5 </button><br/>
      <button onClick={()=>setToOneTwo()}>set to1 and 2 </button><br/>
      <button onClick={()=>clear()}>clear</button><br/>
    </div>
    </div>
  )
}

export default App;
