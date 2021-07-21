import React, {useEffect , useState} from "react";
import { Card, Row, Col } from "antd";
import api from '../../services/api';

export default function Statics(){
    const [servers, setServers] = useState([]);
    useEffect(()=> {
        api.get('statics').then(({data})=> {
            setServers(data);
        });
       
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return(
        <div >
            <div className="site-layout-content">
                <h2>Servidores com mais alertas</h2>
            </div>
            <Row style={{ padding: '20px 20px 0px 0px' }} >
                {servers?.map((server)=>(
                    <Col span="24" style={{ padding: '0px 0px 20px 0px' }} >
                        <Card 
                        key={server.id}
                        title={server.name}>
                            <p>Tipo do servidor: {server.type}</p>
                            <p>Quantidade: {server.alertscount}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}