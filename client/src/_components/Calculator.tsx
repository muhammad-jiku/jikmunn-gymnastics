import { useState } from 'react';
import { toast } from 'react-toastify';

const Calculator = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [bmi, setBmi] = useState<string>('');

  const calculateBMI = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error('Please enter valid height, weight and gender.');
      return;
    }

    const heightInMeters = Number(height) / 100;
    const bmiCalculated = Number(weight) / (heightInMeters * heightInMeters);
    const bmiValue = bmiCalculated.toFixed(2);
    setBmi(bmiValue);

    if (bmiCalculated < 18.5) {
      toast.warning(
        'You are underweight. Consider seeking advice from a healthcare provider.'
      );
    } else if (bmiCalculated >= 18.5 && bmiCalculated < 24.9) {
      toast.success(
        'You have normal weight. Keep maintaining a healthy lifestyle.'
      );
    } else if (bmiCalculated >= 25 && bmiCalculated < 29.9) {
      toast.warning(
        'You are overweight. Consider seeking advice from a healthcare provider.'
      );
    } else {
      toast.error(
        'You are in the obese range. It is recommended to seek advice from a healthcare specialist.'
      );
    }
  };

  return (
    <section className='bmi'>
      <h1>BMI CALCULATOR</h1>
      <div className='container'>
        <div className='wrapper'>
          <form onSubmit={calculateBMI}>
            <div>
              <label htmlFor='height'>Height (cm)</label>
              <input
                id='height'
                type='number'
                value={height}
                placeholder='Enter your height in cm'
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor='weight'>Weight (kg)</label>
              <input
                id='weight'
                type='number'
                value={weight}
                placeholder='Enter your weight in kg'
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor='gender'>Gender</label>
              <select
                id='gender'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value=''>Select Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
            </div>
            <button type='submit'>Calculate BMI</button>
          </form>
          {bmi && (
            <div>
              <h2>Your BMI: {bmi}</h2>
            </div>
          )}
        </div>
        <div className='wrapper'>
          <img src='/bmi.jpg' alt='BMI Calculation illustration' />
        </div>
      </div>
    </section>
  );
};

export default Calculator;
