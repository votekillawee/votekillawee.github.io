import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Admin(props) {
  const { password } = props;
  const [statusText, setStatusText] = useState('Attempting to log in...');
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getRows() {
      try {
        const response = await axios.get(
          `https://api.micahdb.com/emails?password=${password}`
        );

        // the data should be an array of objects with name and email keys
        setRows(response.data);
        setStatusText(`${response.data.length} emails retrieved!`);
      } catch (error) {
        setStatusText('Failed to log in.');
        console.log(statusText);
      }
    }

    getRows();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <hr />
      <p>{statusText}</p>
      <hr />
      {rows && rows.length ? (<>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {rows.map(row => (
            <tr>
              <td>{row.name}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </table>
        <hr />
        <p>Just Emails (e.g., to paste into BCC):</p>
        <p className='emails'>
          {rows.map(row => row.email).join(' ')}
        </p>
      </>) : []}
    </>
  );
}
