import React from 'react'
import "./route-trigger.css";
import RouteSelector from '../routeSelector/RouteSelector';
import HeadersDisplay from '../headersDisplay/HeadersDisplay';
import { useProtocol } from '../../hooks/useProtocol';

const RouteTrigger = () => {
    const {route, protocol, changeProtocol, setNewRoute} = useProtocol();

    const handleProtocolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        changeProtocol(event.target.value);
    }

    const handleRouteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewRoute(event.target.value);
    }

  return (
    <div className='route-trigger'>
        <RouteSelector handleProtocolChange={handleProtocolChange} handleRouteChange={handleRouteChange}/>
        <HeadersDisplay route={route} protocol={protocol}/>
    </div>
  )
}

export default RouteTrigger