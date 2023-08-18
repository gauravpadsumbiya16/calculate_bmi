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
      if (weight <= 5) {
        setBmiState("Underweight");
      } 
      else if (weight >= 5 && bmi <= 85) {
        setBmiState("Healthy Weight");
      } 
      else if (bmi > 85.0 && bmi <= 95) {
        setBmiState("At risk of overweight");
      } 
      else if (bmi >= 95.0) {
        setBmiState("Overweight");
      }
    }
  };
  const calc = () => {

    if (weight !== null && height !== null) {
      const calculatedBmi = parseFloat((weight / (height * height)) * 10000).toFixed(2);
      setBmi(calculatedBmi);
    }
    else {
      console.log("enter height and width");
    }
    
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    calc();
    agess();
  };
  return (
    <>
      <div style={{ height: 600, width: 500, border: '1px solid black', borderRadius: 20 , textAlign: 'center' }} className="container my-5 py-5">
        <h1>BMI Calulation</h1>
        <form className='m-5' onSubmit={handleSubmit}>

          <div className='center'>
            <label className='mx-3'> Enter Age </label>
            <input className='forinput mx-4 my-3' type="text" value={age} onChange={(e) => { setAge(e.target.value) }} />
          </div>

          <div className='div center'>
            <label className='center'>Enter weight (Kg) </label>
            <input className='forinput mx-3 my-3' type="text" value={weight} onChange={(e) => { setWeight(e.target.value) }} />
          </div>

          <div className='div center'>
            <label className='center'>Enter Height (cm) </label>
            <input className='forinput mx-3 my-3' type="text" value={height} onChange={(e) => { setHeight(e.target.value) }} />
          </div>


          <input type="submit" value={'Calculate'} className="center btn btn-success mx-5 my-3" onClick={calc} />

          <h2 style={{ marginTop: 3 }}>BMI:{bmi}</h2>
          <h2 style={{ marginTop: 3 }}>BMI-State: {(bmistate)}</h2>

        </form>
      </div>
    </>
  );
}

export default App;
