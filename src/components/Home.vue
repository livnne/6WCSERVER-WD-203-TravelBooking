<template>
    <div class="home">
      <!--===============Banner================-->
      <section class="banner">
              <div class="banner-text-item">
                  <div class="banner-heading">
                      <h1>Find your next tour!</h1>
                  </div>
                  <form class="form">
                      <input type="text" list="mylist" placeholder="Where would you like to go?">
                      <datalist id="mylist">
                          <option>Singapore</option>
                          <option>Korea</option>
                          <option>Japan</option>
                      </datalist>
                      <router-link class="book" to="/create">Book now</router-link>
                  </form>
              </div>
          </section>
  
          <!--==============Places===================-->
          <section class="places">
              <div class="places-text">
                  <h2>TOUR PACKAGES</h2>
              </div>
  
              <div class="cards">
                  <div class="card">
                      <div class="zoom-img">
                          <div class="img-card">
                              <img
                                  src="https://assets.vogue.com/photos/5e387ae1be72df00088bf8c8/master/w_2560%2Cc_limit/EEX74X.jpg">
                          </div>
                      </div>
  
                      <div class="text">
                          <span class="rating">⭐⭐⭐⭐⭐</span>
                          <h2>Japan</h2>
                          <p class="cost">₱11,676/person</p>
                          <div class="card-box">
                              <p class="time">🕓 4h 35m</p>
                              <p class="location">✈ Tokyo</p>
                          </div>
                      </div>
  
                  </div>
                  <div class="card">
                      <div class="zoom-img">
                          <div class="img-card">
                              <img src="https://cdn.britannica.com/86/188386-050-866EBCA8/Kyongbok-Palace-Seoul.jpg">
                          </div>
                      </div>
  
                      <div class="text">
                          <span class="rating">⭐⭐⭐⭐⭐</span>
                          <h2>Korea</h2>
                          <p class="cost">₱17,205/person</p>
                          <div class="card-box">
                              <p class="time">🕓 4h 10m</p>
                              <p class="location">✈ Seoul</p>
                          </div>
                      </div>
  
                  </div>
                  <div class="card">
                      <div class="zoom-img">
                          <div class="img-card">
                              <img
                                  src="https://travellersworldwide.com/wp-content/uploads/2022/07/shutterstock_610935047.jpg.webp">
                          </div>
                      </div>
  
                      <div class="text">
                          <span class="rating">⭐⭐⭐⭐⭐</span>
                          <h2>Singapore</h2>
                          <p class="cost">₱14,014/person</p>
                          <div class="card-box">
                              <p class="time">🕓 3h 40m</p>
                              <p class="location">✈ Singapore</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <!--===========About Us===============-->
          <section class="about">
              <center>
                  <div class="about-text">
                      <br>
                      <h2>About Us</h2>
                      <p>We are a team of passionate travel experts who are dedicated to providing you with unique and
                          unforgettable travel experiences. Our goal is to help you explore the world, create memories,
                          and make your travel dreams a reality. At Trip With Us Company, we believe that travel is not just about visiting new places, but also
                          about connecting with people, cultures, and traditions. Our mission is to help you discover the
                          beauty of the world and enrich your life through travel.
                          <br>
                          <br>
                          We offer a wide range of travel services, including personalized trip planning, customized
                          itineraries, and expert travel advice. Our team of knowledgeable and experienced travel
                          specialists will work with you to create a trip that meets your needs and exceeds your
                          expectations. Whether you are looking for a romantic getaway, a family vacation, or an adventure-filled
                          journey, we have the expertise and resources to make it happen. With Trip With Us Company, you
                          can rest assured that every detail of your trip will be taken care of, so you can focus on
                          enjoying your travel experience to the fullest.
                      </p>
                  </div>
              </center>
          </section>
  
          <!--===========Footer=================-->
          <div class="footer">
              <div class="links">
                <h4>For more information</h4>
                  <p>tripwithus@gmail.com</p>
              </div>
          </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
  </script>
  
  <style>
  * {
    box-sizing: border-box;
    margin: 0;
  }
  
  body,
  html {
    margin: 0;
    padding: 0;
  }
  
  /*------------------------Scroll Bar-----------------------*/
  ::-webkit-scrollbar {
    width: 20px;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #fde65e;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #fde02f;
  }
  
  /*========================Nav Bar=========================*/
  .nav-bar {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 90px;
    background-color: #fff;
    box-shadow: 3px 3px 10px lightslategray;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  
  .logo {
    flex: 1;
    font-size: 40px;
    padding: 20px;
    margin-left: 50px;
    font-family: 'Poppins', sans-serif;
  }
  
  ul.menu {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
  }
  
  .menu li {
    flex: 1;
    list-style-type: none;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
  }
  
  .menu li a {
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
  }
  
  .menu li a:hover {
    color: midnightblue;
    text-decoration: underline;
  }
  
  /*=============================Banner=============================*/
  .banner {
    background-image: url("https://res.cloudinary.com/dxssqb6l8/image/upload/v1605294054/young-woman-enjoying-beautiful-scenery-of-lago-di-braies-italy-picjumbo-com_aa0fvw.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /*overflow: hidden;*/
    width: 100%;
    height: 100vh;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .banner::before {
    position: absolute;
    content: "";
    display: block;
    background-color: rgba(0, 0, 36, 0.616);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  
  .banner-text-item {
    position: absolute;
    width: 100%;
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
  
  .banner-heading {
    flex: 1;
  }
  
  .banner-heading h1 {
    font-size: 100px;
    font-weight: normal;
    color: #fde02f;
    font-family: 'Poppins', sans-serif;
  }
  
  .banner-text-item .form {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 70%;
    padding: 1% 2%;
  }
  
  .banner-text-item input,
  .banner-text-item .date,
  .banner-text-item .book {
    padding: 15px;
    margin-right: 10px;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    border-radius: 5px;
    outline: 0;
    border: none;
  }
  
  .banner-text-item input {
    width: 50%;
    flex: 2;
  }
  
  .banner-text-item .date {
    width: 20%;
    flex: 1;
  }
  
  .banner-text-item .book {
    width: 20%;
    flex: 1;
  }
  
  .banner-text-item .book {
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    padding: 15px;
    cursor: pointer;
    background-color: #fde02f;
    font-size: 16px;
    font-weight: normal;
    font-family: 'Poppins', sans-serif;
    width: 20%;
  }
  
  /*===========================Services===========================*/
  .services {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
  }
  
  .service-item {
    flex: 1;
    padding: 50px 10px;
    border: lightcyan solid 1px;
    text-align: center;
    margin: 180px 50px;
    transition: all 1s;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
  
  .service-item:hover {
    box-shadow: 3px 3px 20px lightsteelblue;
  }
  
  .service-item h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    width: 120px;
    color: #001f38;
    flex: 1;
  }
  
  .service-item img {
    width: 60px;
    height: 60px;
    flex: 1;
  }
  
  /*=============================Places===============================*/
  .places-text {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 50px;
  }
  
  .places-text small {
    font-family: 'Poppins', sans-serif;
    color: #ffc342;
    font-size: 15px;
    font-weight: bolder;
  }
  
  .places-text h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 55px;
    color: #191d34;
    letter-spacing: 1px;
  }
  
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 30px;
    align-items: center;
    justify-items: center;
    text-align: center;
  }
  
  .card {
    border: 1px solid lightgray;
    box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 80%;
    height: auto;
  }
  
  .card img {
    max-width: 100%;
    height: 300px;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .cards .text {
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    line-height: 50px;
  }
  
  .cards .card-box {
    display: flex;
    flex-flow: row;
    background-color: #fde02f;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .cards .time {
    flex: 1;
  }
  
  .cards .location {
    flex: 2;
  }
  
  .cards .cost {
    color: #4cafad;
    font-size: 20px;
  }
  
  /*------------Zoom in Photos--------------*/
  .zoom-img {
    float: left;
    position: relative;
    width: 100%;
    height: 320px;
    overflow: hidden;
  }
  
  .zoom-img .img-card {
    position: absolute;
    overflow: hidden;
  }
  
  .img-card img {
    -webkit-transition: 0.8s ease;
    transition: 0.8s ease;
  }
  
  .card:hover .zoom-img img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  
  /*=========================About Us=========================*/
  .about {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    padding: 150px;
  }
  
  .about-img {
    flex: 1;
  }
  
  .about-img img {
    width: 900px;
    height: 1200px;
    box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);
  }
  
  .about-text {
    flex: 1;
    /*width: 100px;*/
    display: flex;
    flex-flow: column wrap;
  }
  
  .about-text small,
  .about-text p,
  .about-text input,
  .about-text a {
    flex: 1;
    font-family: 'Poppins', sans-serif;
  }
  
  .about-text small {
    color: #ffc342;
    font-size: 18px;
  }
  
  .about-text h2 {
    flex: 1;
    font-family: 'Poppins', sans-serif;
    font-size: 60px;
    color: #191d34;
    width: auto;
  }
  
  .about-text label {
    padding-bottom: 10px;
    color: #506172;
    font-weight: bolder;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
  }
  
  .about-text p {
    width: auto;
    line-height: 30px;
    color: #506172;
    padding: 50px 0;
  }
  
  .about-text a {
    background-color: #fff;
    border: 2px solid #014b85;
    text-decoration: none;
    border-radius: 5px;
    width: 180px;
    padding: 20px;
    text-align: center;
    margin-top: 50px;
    color: #014b85;
    font-weight: bolder;
    font-size: 14px;
  }
  
  .about-text a:hover {
    background-color: #014b85;
    color: #fff;
  }
  
  /*===============Footer===================*/
  .footer {
    background-image: url("https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293781/pine-tree_mq2sgp.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 300px;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
  
  .footer::before {
    position: absolute;
    content: "";
    display: block;
    background-color: rgba(0, 0, 36, 0.8);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  
  .footer .links {
    position: relative;
    color: #fff;
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  
  .links h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
    font-size: 23px;
    margin: 20px;
  }
  
  .links p {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }
  
  .links p:hover {
    color: #ffa801;
  }
  
  /*==========================Responsive=============================*/
  @media all and (max-width: 1172px) {
    .banner-text-item .form {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      width: 50%;
    }
  
    .banner-text-item .form input,
    .banner-text-item .form .date,
    .banner-text-item .form a {
      flex: 1;
      margin-bottom: 5px;
      font-size: 14px;
    }
  
    .banner-text-item .form input {
      width: 60%;
    }
  
    .banner-text-item .form .date {
      width: 30%;
    }
  
    .banner-text-item .form .book {
      width: 10%;
      font-size: 14px;
    }
  
    .banner-heading h1 {
      font-size: 60px;
    }
  }
  
  @media all and (max-width: 1414px) {
    .banner-text-item .form input {
      width: 40%;
    }
  
    .banner-text-item .form .date {
      width: 30%;
    }
  
    .banner-text-item .form .book {
      width: 20%;
      font-size: 14px;
    }
  }
  
  @media all and (max-width: 942px) {
    .nav-bar {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: auto;
      text-align: center;
      position: static;
    }
  
    .logo {
      flex: 1;
      font-size: 30px;
      margin: 10px auto;
      font-family: 'Poppins', sans-serif;
      color: #fde02f;
    }
  
    .nav-bar ul {
      display: none;
    }
  
    .nav-bar ul li {
      flex: 1;
      margin-bottom: 5px;
      font-size: 14px;
    }
  
    .services {
      display: flex;
      flex-flow: column wrap;
    }
  
    .services .service-item {
      flex: 1;
      margin-bottom: -130px;
      width: 400px;
    }
  
    .places-text {
      margin-top: 200px;
    }
  }
  
  @media all and (max-width: 928px) {
    .banner .form input,
    a {
      font-size: 12px;
    }
  }
  
  @media all and (max-width: 1173px) {
    .banner .form {
      background-color: transparent;
    }
  }
  
  @media all and (max-width: 1194px) {
    .places .card-box p {
      font-size: 14px;
    }
  }
  
  @media all and (max-width: 1086px) {
    .places .cards .text {
      line-height: 40px;
    }
  
    .cards .text .h2 {
      font-size: 12px;
    }
  
    .cards .img-card img {
      height: 260px;
    }
  }
  
  @media all and (max-width: 974px) {
    .cards {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(6, 1fr);
      grid-gap: 20px;
    }
  
    .card {
      width: 300px;
      height: 500px;
      margin: auto;
    }
  
    .cards .text {
      padding: 5px;
      font-family: 'Poppins', sans-serif;
    }
  }
  
  @media all and (max-width: 1334px) {
    .about-img img {
      width: 800px;
      height: 400px;
    }
  }
  
  @media all and (max-width: 1116px) {
    .about {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
    }
  
    .about-img {
      flex: 1;
      margin-bottom: 20px;
    }
  
    .about-text {
      flex: auto;
      margin: auto;
      text-align: center;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }
  
    .about-text h2 {
      font-size: 35px;
    }
  
    .about-img img {
      width: 600px;
      height: 600px;
    }
  }
  
  @media all and (max-width: 708px) {
    .footer {
      width: 100%;
      height: 670px;
      position: relative;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
    }
  }
  </style>
  
