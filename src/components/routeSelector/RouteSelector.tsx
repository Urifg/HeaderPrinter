import React from 'react';
import "./route-selector.css";

interface props {
    handleProtocolChange: React.ChangeEventHandler<HTMLSelectElement>,
    handleRouteChange: React.ChangeEventHandler<HTMLInputElement>
}

const RouteSelector = ({handleProtocolChange, handleRouteChange}: props) => {
    

  return (
    <div className='route-selector'>
        <select className="protocol" name="protocol" onChange={handleProtocolChange}>
            <option value="http://">http://</option>
            <option value="https://">https://</option>
            <option value="">No protocol</option>
        </select>
        <input type="text" className='route' onChange={handleRouteChange}/>
    </div>
  )
}

export default RouteSelector