import React,{useState} from 'react';
import './style.css';

const FareCalc = () => {
    const [row, setRow] = useState('');
    const [column, setColumn] = useState('');
    const handleRowChange = (e) => {
        setRow(e.target.value);
      };
      
      const handleColumnChange = (e) => {
        setColumn(e.target.value);
      };
  return (
    <section>
      <div className="grid-flex">
        <div className="col col-image" style={{ backgroundImage: 'url(airmed.jpg)' }} />
        <div className="col col-text">
          <div className="Aligner-item">
            <h1 style={{ color: '#0055b3' }}>Intra City Fare Calculator</h1>
            <p>This calculator helps in giving an estimate for intra city ambulance need</p>
            <div className="input-row">
            <label htmlFor="inp" className="inp">
              <input type="text" id="inp" placeholder="&nbsp;" />
              <span className="label">To(City)</span>
              <form>
      <div class="user-box">
        <label>
          Row:
        </label>
        <input type="number" value={row} onChange={handleRowChange} />
        </div>
        <div class="user-box">
        <label>
          Column:
        </label>
        <input type="number" value={column} onChange={handleColumnChange} />
        </div>
      </form>
              <span className="focus-bg"></span>
            </label>
            <br />
            <br />
            <label htmlFor="inp" className="inp">
              <input type="text" id="inp" placeholder="&nbsp;" />
              <span className="label">From</span>
              <form>
      <div class="user-box">
        <label>
          Row:
        </label>
        <input type="number" value={row} onChange={handleRowChange} />
        </div>
        <div class="user-box">
        <label>
          Column:
        </label>
        <input type="number" value={column} onChange={handleColumnChange} />
        </div>
      </form>
              <span className="focus-bg"></span>
            </label>
            <br />
            <br />
            <br />
            </div>
            <div className="container">
              <button className="button-30" role="button">
                Click here
              </button>
            </div>
          </div>
          </div>
      </div>
    </section>
  );
};

export default FareCalc;
