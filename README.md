# ASCENDING Trial Demo
ASCENDING Trial class demostration with front-end developer. HTML,CSS,Javascript
## environment setup
Prerequisite, please install your favorite [nodejs and npm package](https://nodejs.org/en/).
* install all dependencies 
```bash 
npm install
```
* serve static file
```bash
npm start
```
* update host file /etc/hosts , our server allow local.famulei.us:3000 CORS request
```
127.0.0.1 local.famulei.us
```
* open local test page in browser
http://local.famulei.us:3000 

### course introduction
The application serves two pages 
1. / -> index.html to render famulei.us celluar plans
1. /car -> car.html to render car information

#### step1: simple html css
In this step, we are going to demostrate html,css only, please comment out
```html
<!-- <script type="text/javascript" src="./controller.js"></script> -->
```
and uncomment
```html
<div class="card mb-4 box-shadow">
</div>
```
#### step2: jquery DOM manipulation.
In this step, we are going to demostrate jquery DOM manipulation.
please uncomment
```html
<script type="text/javascript" src="./controller.js"></script>
```
and comment out
```html
<!-- <div class="card mb-4 box-shadow"> 
</div>-->
```

#### step3: integrate with springboot application
1. please setup springboot application according to this [GitHub page](https://github.com/ryohang/car-dealer-java)
1. You can request following api to create cars
```
POST http://localhost:8080/api/cars
{
   "brand":"acura",
   "model": "RDX"
}
```
1. Refresh http://local.famulei.us:3000/car.html