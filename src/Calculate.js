import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function Calculate(){
 const [input, setInput] = useState('');


 const handleButtonClick = (value) => {
    if (value === 'ac') {
        setInput('');
    } else if (value === '=') {
        try {
            setInput(eval(input).toString()); 
        } catch (err) {
            setInput('Error');
        }
    } else {
      setInput((prevInput) => prevInput + value);
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    handleCalculation();

};
    const handleCalculation = () => {
        try { 
            setInput(eval(input).toString()); 
    } catch (err) {
      setInput('');
    }
};
const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1)); 
  };
return(
    <div>
        <div class="container ">
              
      <form onSubmit={handleSubmit} className='back-btn
' >

<div class="grid text-center">
<label>
    <input type='text'
    value={input} className='border border-info'></input></label></div>
    <br/>
    <div class="grid text-center">
    <div class="row">
        <div className=' g-col-4'></div>
        <div class="g-col-3">
            <button type="button" className="btn btn-primary calc-btn" onClick={() => handleButtonClick('ac')}>AC</button> 
            <button type="button" className="btn btn-primary calc-btn" onClick={() => handleButtonClick('+')}>+</button>
            <button type="button" className="btn btn-primary calc-btn" onClick={() => handleButtonClick('-')}>-</button>
            <button type="button" className="btn btn-primary calc-btn" onClick={() => handleButtonClick('%')}>%</button>
        </div>
        <div className='g-col-5'></div>
    </div>
    </div><br/>
    <div class="grid text-center">
    <div className=' g-col-4'></div>
     <div class="g-col-3">
        <button type="button" className="btn btn-primary cal-btn" onClick={() => handleButtonClick('7')}>7</button>
        <button  type='button' className="btn btn-primary cal-btn" onClick={() => handleButtonClick('8')}>8</button>
        <button type="button"  className="btn btn-primary cal-btn"onClick={() => handleButtonClick('9')}>9</button>
        <button type="button"  className="btn btn-primary cal-btn"onClick={() => handleButtonClick('*')}>*</button>
     </div>
      <div className='g-col-5'>
      </div>
    </div>
        <br/>
        <div class="grid text-center">
        <div className='g-col-4'></div>
        <div class="g-col-3">
        <button type="button" className="btn btn-primary calu-btn" onClick={() => handleButtonClick('4')}>4</button>
        <button type="button" className="btn btn-primary calu-btn" onClick={() => handleButtonClick('5')}>5</button>
        <button type="button" className="btn btn-primary calu-btn" onClick={() => handleButtonClick('6')}>6</button>
        <button type="button" className="btn btn-primary calu-btn" onClick={() => handleButtonClick('=')}>=</button>
        </div>
    
        <div className='g-col-5'></div><br/>
        </div>
        <div class="grid text-center">
        <div className='g-col-4'></div>
        <div class="g-col-3">
        <button type="button" className="btn btn-primary cale-btn" onClick={() => handleButtonClick('3')}>3</button>
        <button type="button" className="btn btn-primary cale-btn" onClick={() => handleButtonClick('2')}>2</button>
        <button type="button" className="btn btn-primary cale-btn" onClick={() => handleButtonClick('1')}>1</button>
        <button type="button" className="btn btn-primary cale-btn" onClick={() => handleButtonClick('0')}>0</button>

        <div className='g-col-5'>
    </div>
    </div>
    </div><br/>
        <div class="grid text-center">
        <div className='g-col-4'></div>
        <div class="g-col-3">
        <button type="button" className="btn btn-primary cale-btn" onClick={() => handleButtonClick('.')}>.</button>

        <button type='submit' className="btn btn-primary">submit</button>
        <button type='delete' className="btn btn-primary" onClick={handleDelete}>delete</button>
        <div className='col-5'></div></div></div>

</form>
    </div>
    </div>
)

};
export default Calculate;




