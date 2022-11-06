import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

import logo from './logo.svg';
import './App.css';


import { GreeterClient } from './proto/GreetServiceClientPb';
import { Greeting, GreetRequest, GreetResponse, GreetResponseStream, Empty } from './proto/greet_pb';
import { config } from './config/config.grpc';

function App() {
  const gltf = useLoader(GLTFLoader, '/3d/map.gltf')
  console.log(gltf)
  let client = new GreeterClient(config.grpcUrl, null, null);

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


  let greetStreamCall = client.greetStream(new Empty());
  
  greetStreamCall.on('end', () => {
    console.log("stream grpc ended");
  });


  greetStreamCall.on("error", err => {
    console.log("stream error grpc", err);
  });

  greetStreamCall.on("data", ( data:GreetResponseStream ) => {
    console.log(data.getMessage());
  });

  return (
    <Canvas
        camera={{ position: [400, 200, 0] }}
        style={{
          backgroundColor: '#111a21',
          width: '100vw',
          height: '100vh',
        }}>
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          {/* YOUR MODEL HERE */}
          <primitive object={gltf.scene} />
        </Suspense>
        <OrbitControls />
    </Canvas>
      );
}

export default App;
