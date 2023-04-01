import { useState } from 'react';
import './style.css'
import axios from 'axios'

function Popup(props) {
  const [row, setRow] = useState('');
  const [column, setColumn] = useState('');
  const findNearestHospital = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3002/find-hospital', {
      row: parseInt(row),
      column: parseInt(column),
    });
    const { distance } = response.data;
     console.log("RESPONSE!!!!!!", distance)
     e.preventDefault();
     setRow('')
     setColumn('')
     props.onClose();
  };
  const handleRowChange = (e) => {
    setRow(e.target.value);
  };
  
  const handleColumnChange = (e) => {
    setColumn(e.target.value);
  };

  function handleSubmit(event) {

  }

  return (
    <div  id="contactForm" style={{ display: props.showPopup ? 'block' : 'none' }}>
    <h2 style={{color:"#000000"}}>Address</h2>
      <form onSubmit={handleSubmit} >
      <div class="user-box">
        <label style={{color:"#d82c2c"}}>
          Row:
        </label>
        <input type="number" value={row} onChange={handleRowChange} />
        </div>
        <div class="user-box">
        <label style={{color:"#d82c2c"}}>
          Column:
        </label>
        <input type="number" value={column} onChange={handleColumnChange} />
        </div>
        <button onClick={findNearestHospital}  type="submit" id="formBtn" > 
        Submit
        </button>
      </form>
    </div>
  );
}

export default Popup;
