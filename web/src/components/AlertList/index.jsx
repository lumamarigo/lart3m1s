import React, {useEffect , useState} from "react";
import { Card, Row, Col } from "antd";
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

    const handleSearch = (event)=>{
        let value = event.target.value.toLowerCase();

        api.get('alerts?filter='+value).then(({data})=> {
            console.log(data)
            setAlerts(data);
        });
    }
    return(
        <div>
            <Row style={{ padding: '20px 0' }}>
                <Col span="12">
                    <input type="text" onChange={(event)=> handleSearch(event)}/>
                </Col>
            </Row>
            <Row>
                {alerts?.map((alert)=>(
                    <Col span="6">
                        <Card 
                        key={alert.id}>
                            <p>Descrição: {alert.description}</p>
                            <p>Servidor: {alert.server}</p>
                            <p>Tipo do servidor: {alert.server_type}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}