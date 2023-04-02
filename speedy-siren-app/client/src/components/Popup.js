import { useState } from 'react';
import './style.css'
import axios from 'axios'
import Map from '../pages/Graph/Map'

function Popup(props) {
  const [row, setRow] = useState('');
  const [column, setColumn] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isClick,setIsClick]=useState(false)

  const sendRequest = async () => {
    if (row < 1 || row > 10 || column < 1 || column > 10) {
      setErrorMessage('Enter values from 1-10');
      return;
    }
    setIsClick(true)
    try {
      const response = await axios.get('/get-data', {
        params: {
          row: row,
          column: column,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
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
    <>
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
        <button onClick={sendRequest} type="submit" id="formBtn">
          Submit
        </button>
      </form>
    </div>
    {
      isClick && 
      <Map/>
    }
    </>
  );
}

export default Popup;
