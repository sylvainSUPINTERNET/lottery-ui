# Setup protoc

Get linux terminal on windows ( or use it directly ) 


### Install


```` bash 

npm install grpc-web --save


# If you use protobuf from google such as timestamp / empty etc it's mandatory ( to be imported by your own .proto)

npm i google-protobuf --save

````


__GRPC__

```` bash

apt-get install protobuf-compiler

# check typing "protoc", should be default installed in /usr/bin

````

Download one version here : https://github.com/protocolbuffers/protobuf/releases 

Whatever the version, just inside get the include directory ( contains google extension usefull for our own .proto file such as .Empty etc )

```` bash 

cp -R protoc/include/ /usr/bin/

````

You must also copy google-protobuf/google/protobuf to your project /src/proto folder



__GRPC WEB__ 

go to download your version here : https://github.com/grpc/grpc-web/releases


```` 

# Rename it 

mv <your_grpc_web_download> protoc-gen-grpc-web

# Copy to your PATH ( protoc will try to call with protoc-gen-grpc-web it when you add --grpc-web_out )

cp protoc-gen-grpc-web /usr/bin


````


# Generate your code based on your .proto

Go to your project root directory, then : 

```` bash


# From the root directory, trying to find .proto file : src/proto/greet.proto and out as typescript "importable" package

protoc --js_out=import_style=commonjs,binary:. src/proto/greet.proto --grpc-web_out=import_style=typescript,mode=grpcwebtext:.


````


You should have 3 files generated at this point : 


```` bash

greet_pb.d.ts 
greet_pb.js 
GreetServiceClientPb.ts 

```` 


To complete : 

add into the greet_pb.js the following statement : 

```` bash

/* eslint-disable */
// @ts-nocheck

```` 

OR best way to do it : 

```` bash

touch .eslintignore && echo "src/proto/*.js" > .eslintignore

# Could also add *.ts generated, but protoc already add the disable part in the code generated

````



https://dev.to/nourdinedev/how-to-use-threejs-and-react-to-render-a-3d-model-of-your-self-4kkf

https://gltf.pmnd.rs/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
