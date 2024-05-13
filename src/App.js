// import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContentArea from './Components/ContentArea';
// import Home from './Components/Home';
// import Monitor from './Components/Monitor';
import Forget from './Components/Forget';
import CreateAccount from './Components/CreateAccount';
import Login from './Components/Login';
import Pricing from './Components/Pricing';
import Integrations from './Components/Integrations';
import Mointor from './Components/Mointor';
import About from './Components/About';
import Grids from './Components/grid';
import { UserProvider } from './Components/UserContext';


function App() {

  return (
    <Router>
      <UserProvider>
      <Navbar />
      <ContentArea content={
        <Routes>
          {/* <Route path="/home" caseSensitive={false} element={<Home />} /> */}
          {/* <Route path="/monitor" caseSensitive={false} element={<Monitor />} /> */}
          <Route path="/" caseSensitive={false} element={<Mointor />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forget' element={<Forget />} />
          <Route path='/account' element={<CreateAccount />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/integration' element={<Integrations />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/grid' element={<Grids />} />       
          {/* <Route path='/home' element={<Home />} /> */}
          
        </Routes>
      }>
      </ContentArea>
      <Footer />
      </UserProvider>
    </Router>
  )
}

export default App