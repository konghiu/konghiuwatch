import { Outlet } from "react-router-dom"
import Footer from "./page/otherspage/Footer"
import Header from "./page/otherspage/Header"

const  App = () => {

     return (
          <div className="flex flex-col justify-center">
               <Header />
               <Outlet />
               <Footer />
          </div>    
     )
}

export default App