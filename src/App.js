import { useState  } from 'react';
import './index.css';

function App() {
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [bmistate, setBmiState] = useState("");

  const agess = () => {
    if (age >= 20) {
      if (bmi <= 18.5) {
        setBmiState("Underweight");
      } 
      else if (bmi >= 18.5 && bmi <= 24.9) {
        setBmiState("Normal or Healthy Weight");
      } 
      else if (bmi >= 25.0 && bmi <= 29.9) {
        setBmiState("Overweight");
      } 
      else if (bmi >= 30.0) {
        setBmiState("Obese");
      }
    }
    else {
      if (bmi <= 18.5) {
        setBmiState("Underweight");
      } 
      else if (bmi > 18.5 && bmi <= 24.9) {
        setBmiState("Healthy Weight");
      } 
      else if (bmi >= 25 && bmi <= 29.9) {
        setBmiState("At risk of overweight");
      } 
      else if (bmi >= 30.0) {
        setBmiState("overweight");
      } 
    }
  };

  const clear = () =>{
    
    setAge("");
    setHeight("");
    setWeight("");
    setBmi("");
    setBmiState('');
   
  }
  const calc = () => {

    if (weight !== null && height !== null) {
      console.log("age = ",age,"weight = ",weight," height = ",height);
      const calculatedBmi = parseFloat((weight / (height * height)) * 10000).toFixed(2);
      setBmi(calculatedBmi);
    }
    else {
      console.log("enter height and weight");
    }
    
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    calc();
    agess();
  };
  return (
    <>
      <div style={{border: '3px solid black', justifyContent:'center' ,borderRadius: 20 }} className="container center left my-5 py-5">
        <div style={{textAlign:'center'}}>
        <h1 className='mx-5'>BMI Calulation</h1>
        <form className='m-5' onSubmit={handleSubmit}>

          <div className='center'>
            <label className='mx-4'> Enter Age </label>
            <input className='forinput my-3 center' type="text" value={age} onChange={(e) => { setAge(e.target.value) }} />
          </div>

          <div className='center'>
            <label className='center'>Enter Height (cm) </label>
            <input className='forinput mx-3 my-3 ' type="text" value={height} onChange={(e) => { setHeight(e.target.value) }} />
          </div>

          <div className='center'>
            <label className='center'>Enter weight (Kg) </label>
            <input className='forinput mx-3 my-3 ' type="text" value={weight} onChange={(e) => { setWeight(e.target.value) }} />
          </div>

          <input type="submit" value={'Calculate'} className="center btn btn-success my-3" onClick={calc} />
          <input type="button" value={'Clear'} className="center btn btn-danger mx-2 my-3" onClick={clear} />

          {bmistate.length>0
          ?
          <div>
            <h2 style={{ marginTop: 3 }}> BMI :{bmi} </h2>
            <h2 style={{ marginTop: 3 }}>BMI-State : {(bmistate)}</h2> 
          </div>
          : <h3>Enter all parameters</h3>}
        </form>
        </div>
      </div>
    </>
  );
}

export default App;
