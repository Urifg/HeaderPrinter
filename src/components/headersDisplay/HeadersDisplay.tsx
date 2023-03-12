import React from 'react';
import "./headers-display.css";
import { useFetch } from '../../hooks/useFetch';

interface props {
    protocol: string,
    route: string
}

const HeadersDisplay = ({protocol, route}: props) => {

  const {requestHeaders,
    responseHeaders,
    callEndpoint} = useFetch();

  const handleClick = () => {
    callEndpoint(`${protocol}${route}`);
  }

  return (
    <div className='headers-display'>
      <span>Calling: {`${protocol}${route}`}</span>
      <button onClick={handleClick}>Submit!</button>
      <h3>Request´s Headers</h3>
      <hr />
      {requestHeaders && 
         <span>{JSON.stringify(requestHeaders)}</span>
      }
     
      <h3>Response´s Headers</h3>
      <hr />
      <ol>
        {responseHeaders && 
          responseHeaders.map( (header: {value: string, key: string}, index: number) => <li key={index}>{`${header.key}  ---> ${header.value}`}</li>)
        }
      </ol>
    </div>
  )
}

export default HeadersDisplay