
import { Row, Col, Layout, Menu } from "antd";

import './App.css';
import AlertList from "./components/AlertList";
import Statics from "./components/Statics";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
     <Header >
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Dashboard</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '30px' }}>
        <Row style={{ padding: '20px 0' }}>
          <Col span="6">
            <Statics/>
          </Col>
          <Col span="18">
            <AlertList/>
          </Col>
        </Row>
    </Content>
    <Footer style={{ textAlign: 'center' }}>By Lart3m1s</Footer>
  </Layout>
  );
}

export default App;
