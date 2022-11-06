import React from 'react';
import logo from './logo.svg';
import './App.css';


import { GreeterClient } from './protos/GreetServiceClientPb';
import { Greeting, GreetRequest, GreetResponse } from './protos/greet_pb';

function App() {
  let client = new GreeterClient("http://localhost:8080", null, null);

  let req = new GreetRequest();
  let greeting:Greeting = new Greeting();
  greeting.setFirstName("John");
  greeting.setLastName("Doe");
  req.setGreeting(greeting);
  client.greet( req, null, (err:any, response:GreetResponse) => {
    if ( err !== null ) {
      console.log("ERROR", err)
    } else {
      console.log(response.toObject().result);
    }
  });

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline bg-black/25">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
