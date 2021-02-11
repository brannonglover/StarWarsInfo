import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Planets from "./components/Planets/Planets";
import People from "./components/People/People";
import { GlobalStyle, Content, MainContent } from "./components/GlobalStyle";
import { ReactQueryDevtools } from "react-query-devtools";

function App() {
  const [page, setPage] = useState("planets");

  return (
    <>
      <GlobalStyle />
      <MainContent>
        <h1>Star Wars Info</h1>
        <NavBar setPage={setPage} />
        <Content>{page === "planets" ? <Planets /> : <People />}</Content>
      </MainContent>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
