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
  };
  const handleRowChange = (e) => {
    setRow(e.target.value);
  };
  
  const handleColumnChange = (e) => {
    setColumn(e.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setRow('')
    setColumn('')
    props.onClose();
  }

  return (
    <div class="login-box" style={{ display: props.showPopup ? 'block' : 'none' }}>
    <h2>Address</h2>
      <form onSubmit={findNearestHospital}>
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
        <button type="submit" className='button-48'> 
        Submit</button>
      </form>
    </div>
  );
}

export default Popup;
