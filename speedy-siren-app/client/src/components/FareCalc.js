import React,{useState} from 'react';
import './style.css';
import intercity from '../images/inter.gif'
import axios from 'axios'

const FareCalc = () => {
    const [row1, setRow1] = useState('');
    const [column1, setColumn1] = useState('');
    const [displayedDistance, setDisplayedDistance] = useState(null);
    const handleRowChange1 = (e) => {
        setRow1(e.target.value);
      };
      
      const handleColumnChange1 = (e) => {
        setColumn1(e.target.value);
      };

      const calculate = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3002/find-hospital', {
          row: parseInt(row1),
          column: parseInt(column1),
        });
        const { distance } = response.data;
         console.log("RESPONSE!!!!!!", distance)
         setDisplayedDistance(distance)
      };
  return (
<section>
  <div className="grid-flex">
    <img src={intercity} className="col col-image"></img>
    <div className="col col-text">
      <div className="Aligner-item">
        <h1 style={{ color: '#0055b3', marginTop:'200px' }}>Intra City Fare Calculator</h1>
        <p>This calculator helps in giving an estimate for intra city ambulance need</p>
        <form>
          <div className="input-group">
            <div className="label-group">
              <span className="label">From</span>
            </div>
            <div className="user-box">
              <label htmlFor="inp-to-row" className="inp">
                <input onChange={handleRowChange1} value={row1} type="text" id="inp-to-row" placeholder="&nbsp;" />
                <span className="label">Row</span>
              </label>
            </div>
            <div className="user-box">
              <label htmlFor="inp-to-col" className="inp">
                <input onChange={handleColumnChange1} value={column1} type="text" id="inp-to-col" placeholder="&nbsp;" />
                <span className="label">Column</span>
              </label>
            </div>
          </div>
        </form>
        <br />
        <br />
        <br />
        <div className="container">
          <button onClick={calculate} className="button-30" role="button">
            Click here
          </button>
          <br>
          </br>
          <br></br>
          {displayedDistance !== null && (
          <div>
            <p>Cost from nearest hospital: Rs.{displayedDistance*70}</p>
          </div>
        )}

        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default FareCalc;
