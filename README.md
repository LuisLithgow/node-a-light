#Node-a-Light
### Home automation with Node.JS


![](http://i.giphy.com/13iYERGkiczl5e.gif)


##Introduction 
**Node-a-Light** is a **an IoT** (Internet of Things) project that will take us one step closer to home automation. I will be controlling the light bulb by sending requests to the server which will then send data to the lamp.

-----
###User Story
The user will be able to press the lightbulb button, which will send a signal to the server on how much output will be passed through the R3 Uno board and turn the it on or off.


-----

### Technologies Used 
Using Uno R3 board to send voltage outputs which data will be sent to and from the Node.Js server running on rasberry Pi 3 will send voltage to the bulb to turn off or on. All the requests will be sent via HTTP requests.  

The backend will be handled by a  Node.JS server and with socket.io, express and serialport as its dependencies.


### Routes


| Route | Description |
|------|--------------|
| /    | Will render a homepage where the user will prompt to turn on and off the lightbulb depending on what state the button will be in. |
| /lightturns| The point where the data for the data of how many times a user has turned the light on and off, along with time. |


#####Diagram 

lighbulb turned on or off..tba

### Wireframe

![](http://i.imgur.com/bf0eMsW.png)
