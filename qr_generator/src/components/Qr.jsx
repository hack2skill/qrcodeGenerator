import React , { useState } from 'react'
import './Qr.css';

export default function Qrcode() {
    const [qrcode,setQrcode]=useState('');
    const handleName = (e) => {
            setQrcode(e.target.value);
        
      };

    const hello=qrcode;
 
    return (

            <div className="body">
        <div className="main">
            <div className="head">
                QR Generator
            </div>
        <div className='box'>
            <form className='form'>
                <input type="text" placeholder='Enter Text' value={qrcode}  onChange={handleName}></input><br />
                
            </form>
            <img src={`https://chart.apis.google.com/chart?cht=qr&chs=250x250&chl=${hello}&choe=UTF-8`} alt=''/>
        </div>
        </div>
        </div>
    )
}







