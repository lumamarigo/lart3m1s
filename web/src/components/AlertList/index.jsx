import React, {useEffect , useState} from "react";
import { Card, Row, Col, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
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
            <div className="site-layout-content">
                <h2>Alertas dos Servidores</h2>
            </div>
            <Row style={{ padding: '20px 0' }}>
                <Col span="24">
                    <Input prefix={<SearchOutlined />} size="large" placeholder="Filtrar" onChange={(event)=> handleSearch(event)} />
                </Col>
            </Row>
            <Row>
                {alerts?.map((alert)=>(
                    <Col xs={24} sm={24} md={12} lg={6} xl={6}>
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