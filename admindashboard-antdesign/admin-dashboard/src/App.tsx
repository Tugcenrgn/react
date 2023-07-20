import {
  Layout,
  Menu,
  Typography,
  Space,
  Divider,
  Row,
  Col,
  Anchor,
  Table
} from "antd";
import "./styles/dashboard.css";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { HiOutlineHome } from "react-icons/hi";
import { GrOrganization } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Card from "antd/es/card/Card";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import Grid from "antd/es/card/Grid";
import {faker} from '@faker-js/faker';
// const {Link} = Anchor;

const generateData = () => {
  const dat = [];

  for (let i = 0; i < 34; i++){
    dat.push({
      id : faker.datatype.number(1000),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      status: Math.random() > 0.5 ? true : false 
    })
  }

  return dat
}

const data = generateData();

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="container">
      <Header className="header">
        <div style={{ display: "flex", alignItems: " center" }}>
          <GiHamburgerMenu
            onClick={() => setCollapsed(!collapsed)}
            size={28}
            style={{ marginRight: 20 }}
          />
          <div className="brand">Admin- Dashboard</div>
        </div>
      </Header>
      <Layout>
        <Sider collapsed={collapsed} theme="light">
          <Menu
            mode="inline"
            items={[
              {
                label: "Home",
                key: "home",
                icon: <HiOutlineHome />,
                children: [
                  {
                    label: "Add profile",
                    key: "add_profile",
                    icon: <BsPerson />,
                  },
                  {
                    label: "All users",
                    key: "all_users",
                    icon: <BsPerson />,
                  },
                ],
              },
              {
                label: "About Us",
                key: "about_us",
                icon: <GrOrganization />,
              },
            ]}
          />
        </Sider>
        <Content className="content">
          <Space direction="horizontal">
            <Card>
              <Space direction="horizontal">
                <AiOutlineMoneyCollect />
                <small>Total sales</small>
              </Space>
              <Typography.Title>$23423</Typography.Title>
            </Card>

            <Card>
              <Space direction="horizontal">
                <AiOutlineMoneyCollect />
                <small>Total sales</small>
              </Space>
              <Typography.Title>$12323</Typography.Title>
            </Card>

            <Card>
              <Space direction="horizontal">
                <AiOutlineMoneyCollect />
                <small>Total sales</small>
              </Space>
              <Typography.Title>$5423</Typography.Title>
            </Card>
          </Space>
          <Divider />

          {/* <Row gutter={10}>
            <Col span={6}>
              <Card>
                <Typography.Title>Something</Typography.Title>
              </Card>
            </Col>
            <Col span={18}>
              <Card>
                <Anchor>
                  <Link href="#test" title="Link1"/>
                  <Link href="#test" title="Link2"/>
                  <Link href="#test" title="Link3"/>
                  <Link href="#test" title="Link4"/>
                  
                </Anchor>
              </Card>
            </Col>
          </Row> */}
          <Row gutter={10} style={{
            marginTop: 10
          }}>
            <Col span={18}>
              <Table dataSource={data} columns={[{
                dataIndex: "id",
                title: "ID",
                key: "id",
              },{
                dataIndex : "name",
                title: "name",
                key: "name",
              },{
                dataIndex: "email",
                title: "Email Id",
                key: "email",
              }]}/>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
