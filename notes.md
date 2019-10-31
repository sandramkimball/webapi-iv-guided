# Deployment Notes

When you run react-app, where does it run?

Web Servers(like localhost) run web apps:
- accept requests from clients
- send back responses to clients

Web Servers are SOFTWARE running on someone else's machine.

[client] === [web server (multiple web apps/apis)]
deployment: "copy and pasting" files to another server.

Dev Proccess:
- write code
- commit and push
- profit (automatically deployed to heroku)

----------------------------------------------

STEPS TO PREPARE API FOR HEROKU DEPLOYMENT:
- Make the port dynamic.
- Setup a "start" script that uses `node` (not `nodemon`) to run server.


(The environemnt is the platform(operating system/place) where your app runs.)