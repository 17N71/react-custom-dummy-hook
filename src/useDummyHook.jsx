import {useEffect, useState} from "react";
export function useDummyHook(){
    const [array, setArray] = useState([]);
    function createArray(n=9){
        let customArray = []
        for (let i = 0; i < n; i++) {
            customArray[i] = i+1
        }
        return (function (){
            setArray(customArray)
        }())
    }

    useEffect(() => {
        createArray()
    },[]);

    function randomF(){
        if(!array){
            return
        }
        const random = Math.round(Math.random()*100)
        setArray([...array,random])
    }
    function changeAndRemove(){
        if(!array){
            return
        }
        if (array.length < 2){
            alert("array length less then 2")
            location.reload()

        }
        array[1]=9
        setArray(array=>array.slice(0,-1))
    }
    function  removeLast(){
        if (!array){
            return
        }
        if (array.length <2){
            alert("array length less then 2 page will be reloaded")
            location.reload()
        }
        setArray([...array.slice(0,-1)])
    }
    function keep5(){
        setArray(array=>array.filter(item=>item<=5))
    }
    function setToOneTwo(){
        setArray(array=>array.filter(item=>item==1||item==2))
    }
    function clear(){
        setArray()
    }
    return {createArray,array,randomF,changeAndRemove,removeLast,keep5,setToOneTwo,clear}
}
