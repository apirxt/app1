import React from "react";
import { Content, Footer, Header } from "./func-components";
import Calendar from "./class-components";


function App() {
  return (
    //[<Header />, <Content />, <Footer />, <Calendar />]
    <>
      <Header />
      <p><center><Calendar /></center></p>
      <Content />
      <Footer />
    </>
  )
}

export default App;
