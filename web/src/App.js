
import { Row, Col, Layout } from "antd";

import './App.css';
import AlertList from "./components/AlertList";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
    <Content style={{ padding: '30px' }}>
        <div className="site-layout-content">
          <h1>Alertas dos Servidores</h1>
        </div>
        <AlertList/>
    </Content>
    <Footer style={{ textAlign: 'center' }}>By Lart3m1s</Footer>
  </Layout>
  );
}

export default App;
