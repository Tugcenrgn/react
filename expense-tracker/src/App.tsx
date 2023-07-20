import SignUp from "./components/SignUp";
import {Route, Routes} from "react-router-dom";
import {Layout} from "antd";
import { Content, Footer } from "antd/es/layout/layout";

function App() {
  return(
    <Layout>
      <Content className="site-layout" style={{padding: "50px", marginTop: 64}}>
        <Routes>
          <Route path="/register" element={<SignUp/>} />
        </Routes>
      </Content>

      <Footer>
        Expense Tracker
      </Footer>
    </Layout>
  )
}

export default App;
