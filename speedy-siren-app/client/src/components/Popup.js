import { useState } from 'react';
import './style.css'
import axios from 'axios'

function Popup(props) {
  const [row, setRow] = useState('');
  const [column, setColumn] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const findNearestHospital = async (e) => {
    e.preventDefault();

    if (row < 1 || row > 10 || column < 1 || column > 10) {
      setErrorMessage('Enter values from 1-10');
      return;
    }

    const response = await axios.post('http://localhost:3002/find-hospital', {
      row: parseInt(row),
      column: parseInt(column),
    });
    const { distance } = response.data;
    console.log("RESPONSE!!!!!!", distance)
    e.preventDefault();
    props.onClose()
    setRow('')
    setColumn('')
    setErrorMessage('')
  };

  const handleRowChange = (e) => {
    setRow(e.target.value);
  };

  const handleColumnChange = (e) => {
    setColumn(e.target.value);
  };

  function handleSubmit(event) {
    props.onClose()
    setRow('')
    setColumn('')
    setErrorMessage('')
  }

  return (
    <div id="contactForm" style={{ display: props.showPopup ? 'block' : 'none' }}>
      <button onClick={handleSubmit} style={{ position: 'absolute', right: '10px', top: '10px' }}>X</button>
      <h2 style={{ color: "#000000" }}>Address</h2>
      <form onSubmit={handleSubmit} >
        <div className="user-box">
          <label style={{ color: "#d82c2c" }}>
            Row:
          </label>
          <input type="number" value={row} onChange={handleRowChange} />
        </div>
        <div className="user-box">
          <label style={{ color: "#d82c2c" }}>
            Column:
          </label>
          <input type="number" value={column} onChange={handleColumnChange} />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button onClick={findNearestHospital} type="submit" id="formBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Popup;
