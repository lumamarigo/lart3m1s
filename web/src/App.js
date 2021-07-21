
import { Row, Col } from "antd";
import './App.css';
import AlertList from "./components/AlertList";

function App() {
  return (
    <div className="App">
    <h1>Alertas dos Servidores</h1>
    <Row>
      <Col span="3">
        Esquerda
      </Col>
      <Col span="9">
        <AlertList/>
      </Col>
    </Row>
  </div>
  );
}

export default App;
