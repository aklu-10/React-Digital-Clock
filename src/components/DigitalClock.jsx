import {useState} from 'react';

function DigitalClock()
{
    let time=new Date().toLocaleTimeString();
    let [ctime,setctime]=useState(time);
    
    setInterval(() => {
        let time=new Date().toLocaleTimeString();
        setctime(time);
    }, 1000);

    return (

        <>
            <h1>{ctime}</h1>        
        </>
    )
}

export default DigitalClock;