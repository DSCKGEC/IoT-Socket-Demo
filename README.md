# **IoT-Socket-Demo**
This is a demo IoT project based on socket-io and express by DSC KGEC. <br>
The firmware for the IoT device can be found on [Socket-IoT-Demo-Firmware](https://github.com/DSCKGEC/IoT-Socket-Demo-Firmware)

## **Contents**
1. [Description](#description)
0. [Installing](#installing)
0. [Languages Used](#languages-used)
0. [Project Images](#project-images)
0. [Contribution](#contribution)

## **Description**
This project provides a very minimalistic dashboard with neomorphic design scheme, which is designed by DSC Web Team. The backend is based on node-js, it provides a socket server (using socket.io) and an http server (using express). The http server is used to serve the webpage which is just a basic webpage using ejs templates, as well as to serve the socket server. No authentication has been implemented as the project is only meant for testing and demonstration purposes.

### **What is Socket IO?**
[Socket.io](https://socket.io) is a Javascript networking library that runs server-side on Node.js and in the browser. It abstracts away websockets and other communication schemes, depending upon browser capabilities. It also includes convenient features such as broadcasts and multicasts, which are beyond the features of plain websockets.

It is a way to communicate between a client and a server which allows real-time data flow with bi-directional communication, i.e., we can flow data in both directions:
- Client to Server
- Server to Client

<img alt="Architecture" src="https://user-images.githubusercontent.com/55695557/146581370-ac7e388d-6136-4e27-9a9d-8b759fbe1114.png" width="75%"/>


### **Why Socket.IO?**
It is a tool to implement realtime communication between server and clients very conveniently, without the clients needing to send multiple requests to the server.

### **Why Express?**
We have chosen Express as the framework for serving an http server. This server is used by Socket.io to establish the connection with its clients and is used to serve the dashboard as well.

### **How this Project will Help Us?**

This project will help node.js developers to start making APIs and implementing sockets as well as provide an insight to the working of a basic IoT system.

For the Firmware source code (for NodeMCU), visit [Socket-IoT-Demo-Firmware](https://github.com/DSCKGEC/IoT-Socket-Demo-Firmware)

<br>

## **Installing**

### Softwares needed

- [Visual Studio Code](https://code.visualstudio.com)
- [Node JS](https://nodejs.org/en)

### Libraries
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io)

### Socket Admin Dashboard
Go to this URL: https://admin.socket.io and put *```iot-socket.herokuapp.com/admin```* in the Server URL.
Note that the domain ```iot-socket.herokuapp.com``` is just for the demonstration, if you are running this project locally, replace that URL with ```localhost:PORT``` where ```PORT``` is the same PORT that your server is running on.
It should look something like this:

<img alt="Phone-Light" src="https://user-images.githubusercontent.com/55695557/147200658-15f254f5-6a81-4936-8862-3bdfbb7a395d.png" width="200px"/>
<br>

## **Languages Used**

-  <img align="left" alt="JavaScript" width="60px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<br>
<br>


## **Project Images**
<br>

![Desktop-Light](https://user-images.githubusercontent.com/55695557/146641429-c0525c66-fa95-4ac1-96ba-eebc11199260.png)

![Desktop-Dark](https://user-images.githubusercontent.com/55695557/146641432-ce02d97d-2c7b-4421-8b44-54d1f8faa356.png)

<img alt="Phone-Light" src="https://user-images.githubusercontent.com/55695557/147214031-1ba4038a-269b-4502-862a-0a26b19c1947.png" width="200px"/> <img alt="Phone-Dark" src="https://user-images.githubusercontent.com/55695557/147214311-30840e28-27df-458e-b334-29a17ec5b278.png" width="200px"/>

## **Contribution**
This is a concept for beginners starting with IoT. Feel free to fork, clone, create issues and/or make PRs. We will be more than happy to receive your contributions.
