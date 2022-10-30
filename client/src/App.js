import './App.css';
import { PDF_QR_JS } from 'pdf-qr';

var configs = { // create and populate configs variable
  scale: {
    once: true,
    value: 1
  },
  resultOpts: {
    singleCodeInPage: true
  },
  improve: true,
  jsQR: {}
};

function App() {
  const generate = async () => {
    console.log('ingenerateFunction..')
    // let obj = {string: document.getElementById('stringInput').value};
    // const response = await (await fetch('http://localhost:5000/', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(obj),
    //     })).json();
    // console.log(response);

    // document.getElementById('qrCode').src = response.image;
    // var input_file = document.getElementById('pdfentryfile');

    // create callback which handles the result 
    // var callback = await function (result) {
    //   if (result.success)
    //     console.log(result.codes)
    //   else
    //     console.log(result.message);
    // }
    // console.log('Call back',callback);
    //  var temp = await  PDF_QR_JS.decodeDocument(input_file, configs, callback);
    //  console.log('Input File is working',input_file);
    //  console.log("config ",configs);
    //  console.log("Temp is working",temp);
}
return (
  <div className="flex flex-col gap-12 p-12 justify-center items-center bg-black">
    <div className='w-100 flex justify-center items-center'><img src='/H2S_Gradient_Logo.png' width='120' /></div>
    <div className='flex flex-col md:flex-row gap-5 lg:w-4/5'>
      <div className='flex flex-col md:w-1/2 p-6 gap-6 bg-black rounded-lg lightShadow justify-center items-center'>
        <h1 className='text-yellow-500 text-5xl bg-black font-mono '>Genrate QR Code</h1>
        <input id="stringInput" className=' p-2 w-10/12 rounded-md bg-yellow-300' placeholder='Enter URL Here' />
        <div className='flex flex-col justify-start w-4/5 gap-6'>
          <div className='flex gap-2 bg-black w-100 justify-start'>
            <input type='color' className=' bg-black' />
            <label className='bg-black'>Customise the color</label>
          </div>
          <div className='flex gap-2 bg-black'>
            <input type='color' className=' bg-black' />
            <label className='bg-black'>Customise the Background Color</label>
          </div>
        </div>
        <div className='flex w-4/5 bg-black justify-center items-center'>
          <div className='w-1/3'><hr /></div>
          <div>&nbsp; OR &nbsp;</div>
          <div className='w-1/3'><hr /></div>
        </div>
        <div className='flex flex-col justify-start w-4/5 gap-4'>
          <input id='pdfentryfile' className = 'bg-red' type='file' />
        </div>
        <button onClick={generate} className='text-black p-2 rounded-md bg-yellow-400'>Generate</button>
      </div>
      <div className='flex flex-col md:w-1/2 rounded-lg justify-center items-center bg-yellow-300'>
        <img src='' id='qrCode' width='250' />
      </div>
    </div>
  </div>
);
}

export default App;
