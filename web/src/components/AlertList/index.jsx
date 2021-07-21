import React, {useEffect , useState} from "react";
import api from '../../services/api';
import './index.css';

export default function AlertList(){
    const [alerts, setAlerts] = useState([]);
    useEffect(()=> {
        api.get('alerts').then(({data})=> {
            setAlerts(data);
        });
       
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return(
        <div>
            <div>
                aqui vai a busca
            </div>
            {alerts?.map((alert)=>(
                <div 
                className="alertcard"
                key={alert.id}>
                    {alert.description} - 
                    {alert.server}
                </div>
            ))}
        </div>
    );
}