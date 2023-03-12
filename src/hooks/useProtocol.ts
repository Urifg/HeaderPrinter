import {useState} from 'react';

export const useProtocol = () => {
    const [protocol, setProtocol] = useState<string>("http://");
    const [route, setRoute] = useState<string>("");

    const setNewRoute = (newRoute: string) => {
        setRoute(newRoute)
    }

    const changeProtocol = (newProtocol = "") => {
        setProtocol(newProtocol);
    }

    return {route, protocol, setNewRoute, changeProtocol}
}