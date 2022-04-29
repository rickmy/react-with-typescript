import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { List } from "./components/List";
import {Form} from "./components/Form";
import { Sub } from "./types";
const INITIAL_STATE: Sub[] = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu hace de moderador aveces",
  },
  {
    nick: "sergio_serrano",
    subMonths: 5,
    avatar: "https://i.pravatar.cc/150?u=sergio-serrano",
  },
];



function App() {
  const [subs, setSubs] = useState<Sub[]>([]);
  const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setSubs(INITIAL_STATE);
  });

  const handleNewSub = (newSub:Sub) : void =>{
    subs.push(newSub)
    setSubs([...subs])
    
  }

  return (
    <div className="App" ref={divRef}>
      <h1>midu subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}></Form>
    </div>
  );
}

export default App;
