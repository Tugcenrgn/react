import { useState } from "react";
import "./styles/dashboard.css";
import {
  Layout,
  Menu,
  Typography,
  Space,
  Divider,
  Row,
  Col,
  Table,
  Tag,
  Button,
  Steps,
  Form,
  Input,
  TimePicker,
  Avatar,
  Empty,
  Descriptions,
  List,
  Modal,
  notification,
} from "antd";
import Card from "antd/es/card/Card";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import ButtonGroup from "antd/es/button/button-group";

import { HiOutlineHome } from "react-icons/hi";
import { GrOrganization } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMoneyCollect } from "react-icons/ai";


import {faker} from '@faker-js/faker';
import dayjs from "dayjs";


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

  const [modalOpen,setModalOpen] =useState(false);
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
          <Card>
            <Button style={{marginRight:10}}onClick={()=>{
              notification.success({
                message:"User created succesfully"
              });
            }}>Show Notification</Button>
            <Button style={{marginRight:10}} onClick={()=>setModalOpen(true)}>Add User</Button>
            <Button type="primary" danger onClick={()=>{
              Modal.confirm({
                title:"Do you want to delete these items?",
                content:"When clicked the Ok button,this dialog will be closed after 1 second"
              })
            }}>Delete</Button>
            <List style={{marginTop:20}}bordered dataSource={data.slice(0,3)} renderItem={(item)=>{
              return <List.Item>
                <Descriptions title={"User Details"}>
                 <Descriptions.Item label={"Name"}>
                    {item.name}
                 </Descriptions.Item>
                 <Descriptions.Item label={"Name"}>
                    {item.email}
                 </Descriptions.Item>
                 <Descriptions.Item label={"Name"}>
                    {item.status ? "Active" : "Not Active"}
                 </Descriptions.Item>
                </Descriptions>
              </List.Item>
            }}/>
            <List style={{marginBottom:20,marginTop:20}}>
              <List.Item>
                Şafak
              </List.Item>
              <List.Item>
                Tuğçe
              </List.Item>
              <List.Item>
                Yaren Eylül Dök
              </List.Item>
            </List>
            <Descriptions bordered title={"Users data"}>
              <Descriptions.Item span={2} label={"Name"}>Tuğçe Nur Ergen</Descriptions.Item>
              <Descriptions.Item label={"Roll"}>21</Descriptions.Item>
              <Descriptions.Item label={"Adress"}>Aydınevler, Aydınevler Mahallesi İnönü Caddesi No:20 Küçükyalı Ofispark, İnönü Cd. No:20 B Blok, 34854 Maltepe/İstanbul</Descriptions.Item>
            </Descriptions>
            <Empty/>
            <Avatar size={"large"}
            src={"http://ebrutopcuoglu.com/TheArt/wp-content/uploads/2015/10/Turkcell_Teknoloji.jpg"}/>
            <Form onFinish={(values)=>{
             console.log(values);
            }} layout="vertical">
              <Form.Item name={"name"} label={"Name"}>
                <Input />
              </Form.Item>
              <Form.Item name={"email"} label={"Email"}>
                <Input type="email"/>
              </Form.Item>
              <Form.Item name={"password"} label={"Password"}>
                <Input type="password"/>
              </Form.Item>
              <Form.Item name={"time"} label={"Pick some time"}>
              <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
              </Form.Item>
              <Form.Item >
                <Button htmlType="submit" type="primary">Sign up</Button>
              </Form.Item>
            </Form>
          </Card>
          <Card>
            <Steps current={1} items={[
              {
              title: "Signup",
              description:"Please sign up"
            },
            {
              title: "Buy subscription",
              description:"Buy some subscription"
            },
            {
              title: "Something else",
              description:"Do something with this"
            },
            ] }/>
          </Card>
          <Row gutter={10} style={{
            marginTop: 10
          }}>
            <Col span={18}>
              <Table 
              dataSource={data} columns={[{
                dataIndex: "id",
                title: "ID",
                key: "id",
                fixed:true,
              },{
                dataIndex : "name",
                title: "name",
                key: "name",
              },{
                dataIndex: "email",
                title: "Email Id",
                key: "email",
              },
              {
                dataIndex: "status",
                title: "Status",
                render :(val)=> val ? <Tag>Active</Tag> : <Tag>Not Active</Tag> ,
              },
              {
               title: "Actions",
               render :()=> <ButtonGroup>
                <Button>
                 Edit
                </Button>
                <Button type="primary" danger>
                 Delete
                </Button>
               </ButtonGroup>
              }
              ]}/>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Modal open={modalOpen} onCancel={()=>setModalOpen(false)}title={"Add a new user"}>
          <Form>
            <Form.Item label={"Name"}>
              <Input/>
            </Form.Item>
            <Form.Item label={"Email"}>
              <Input/>
            </Form.Item>
          </Form>
      </Modal>
    </Layout>
  );
}

export default App;
