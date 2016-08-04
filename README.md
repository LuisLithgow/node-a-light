#Node-a-Light
### Home automation with Node.JS


![] (http://i.giphy.com/13iYERGkiczl5e.gif)


##Introduction 
**Node-a-Light** is a **an IoT** (Internet of Things) project that will take us one step closer to home automation. I will be controlling the light bulb by sending requests to the server which will then send data to the lamp.

-----
###User Story
The user will be able to press a button and the lightbulb will turn on or off. 


-----

### Technologies Used 
Using Aurdino Uno R3 board to send voltage outputs which data will be sent to and from the Node.Js server running on rasberry Pi 3. All the requests will come from HTTP requests.  

The backend will be handled all by Node.JS

### Routes


| Route | Description |
|------|--------------|
| /    | Will render a homepage where the user will prompt to turn on and off the lightbulb depending on what state the button will be in. |
| /lightturns| The point where the data for the data of how many times a user has turned the light on and off, along with time. |


#####Diagram 

lighbulb turned on or off..tba

### Wireframe

![](http://i.imgur.com/bf0eMsW.png)
