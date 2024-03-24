<!-- TODO: Fix Dropdown Menus -->
<template>
            <nav id="header" style="z-index:1000" class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img id="logo"
                v-motion
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                :variants="{ custom: { scale: 1 } }"
                :hovered="{ scale: 1.2 }"
                :delay="800"
                 src="../assets/logo.svg"/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Process Mining
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">Solutions</a>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Careers
                    </a>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Company
                    </a>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Resources
                    </a>
                  </li>

                  <li class="nav-item demo">
                    <a class="nav-link active" aria-current="page" href="#">Schedule a demo</a>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
          <div class="section-1">
            <video autoplay muted loop id="myVideo">
              <source src="https://apolix.global/wp-content/uploads/2023/02/Apolix-background.mp4" type="video/mp4">
            </video>
            <div class="container" style="position:relative">
              <h1
              v-motion
              :initial="{ opacity: 0, y: 100 }"
              :enter="{ opacity: 1, y: 0, scale: 1 }"
              :variants="{ custom: { scale: 2 } }"
              :delay="400"
              >Take your processes to the next dimension</h1>
              <div class="small-section">
                <p
                v-motion
                :initial="{ opacity: 0, x: 100 }"
                :enter="{ opacity: 1, x: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :delay="800"
                >
                  Apolix optimises your processes through data, focusing on simplicity and value creation.
                </p>
              </div>
            </div>
          </div>
          <div class="section-2 row">
            <div class="col animation-box">
              <div class="sphere"
              v-motion
              :initial="{ opacity: 0.7, borderRadius: 1,y:0 }"
              :visible="{ opacity: 1, y:0,borderRadius: 1,transition: {repeat: Infinity, repeatType: 'mirror'} }"
              :delay="1000"
              >
                <img src="https://apolix.global/wp-content/themes/apolix/assets/img/spheres/sphere-white.png" />
              </div>
              <div class="man"
              v-motion
              :initial="{ opacity: 0, borderRadius: 1,y:200 }"
              :visible="{ opacity: 1, y:0,borderRadius: 300, scale: 1 }"
              :leave="{ opacity: 0, y:200,borderRadius: 1 }"
              :delay="300"
              >
                <img src="https://apolix.global/wp-content/uploads/2023/01/Explorer-644x750.jpg"/>
              </div>
              <div class="boxes"
              v-motion
              :initial="{ opacity: 1,y:150 }"
              :visible="{ opacity: 1, y:50, scale: 1 }"
              :leave="{ opacity: 0, y:100 }"
              :delay="300"
              >
                <div style="background: #0b2545;" class="row floating-box">
                  <span>CUSTOMERS GIVE US AN</span>
                  <h5 style="color:#f4acb7">8.8</h5>
                  <span>OUT OF 10</span>
                </div>
                <div style="background: #0b2545;" class="row floating-box">
                  <span>MORE THAN</span>
                  <h5 style="color:#f4acb7">€ 12 mil.</h5>
                  <span>VALUE REALISED</span>
                </div>
                <div style="background: #0b2545;" class="row floating-box">
                  <span>MORE THAN</span>
                  <h5 style="color:#f4acb7">110</h5>
                  <span>PROCESS IMPLEMENTATIONS</span>
                </div>
              </div>
            </div>
            <div class="col text-box">
              <h3 id="section-title"
              v-motion
              :initial="{ opacity: 0, x: 100 }"
              :visible="{ opacity: 1, x: 0, scale: 1 }"
              :delay="400"
              >About Us</h3>
              <h2 id="section-main-title">We reveal and fix invisible process inefficiencies </h2>
              <p id="section-description">Organisations run their processes through hundreds of IT-systems. This leaves space for many inefficiencies. Inefficiencies that hurt your business.  Through process mining we identify and fix those inefficiencies. Apolix is your one-stop shop for process improvement.</p>
              <div class="row buttons">
                <button style="background: #496ddb;"
                v-motion
                :initial="{ opacity: 0, x: 100 }"
                :visible="{ opacity: 1, x: 0, scale: 1 }"
                :delay="400"
                >More about us</button>
                <button style="background: #0b2545;"
                v-motion
                :initial="{ opacity: 0, x: -100 }"
                :visible="{ opacity: 1, x: 0, scale: 1 }"
                :delay="400"
                >Careers</button>
              </div>
            </div>
          </div>
</template>

<style>
*{
  font-family: "Noto Sans", sans-serif;
}
#logo{
  width:10rem;
  margin:2rem;
}
#header{
  background: transparent !important;
  padding-top: 1rem;

}
#myVideo{
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
.section-2 {
  background-color: #c7dbe6;
}
.navbar-expand-lg .navbar-collapse{
  flex-direction: row-reverse;
  margin-right: 2rem;
}
.navbar-expand-lg .navbar-nav{
  gap: 2rem;
  align-items: center;
}
li.nav-item {
    font-size: 1.15rem;
    padding:0.5rem;
}
li.nav-item:hover {
    backdrop-filter: blur(6px);
    background-color: #ffffff0d;
    border-radius: 12rem !important;
}
.demo{
  -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    background-color: #ffffff0d;
    border-radius: 1.1rem !important;
    padding: 1rem;
    font-size: 1.3rem !important;
    box-shadow: 0 0 10px 1px #00000030;
}
li.nav-item.demo:hover{
  border-radius: 1.1rem !important;
  padding: 1rem;
  font-size: 1.3rem !important;
  box-shadow: 0 0 10px 1px #00000030;
  background-color: #ffffff !important;
}
li.nav-item.demo:hover .active{
  color: black !important;
}
a.nav-link {
    color: white !important;
}
.dropdown:hover .dropdown-menu {
      display: block;
      top: 4.5rem;
      -webkit-backdrop-filter: blur(6px);
      backdrop-filter: blur(6px);
      background-color: #ffffff0d;
      border: none;
}
.container{
  position:relative;
  margin:0;
}
.container h1{
  color: white;
    font-weight: bold;
    font-size: 4.5rem;
    width: 83%;
    text-align: left;
    margin-left: 2rem;
    letter-spacing: 0.3rem;
}
.small-section{
  display: flex;
    gap: 2rem;
    margin-left: 2rem;
    font-size: 1.5rem;
    width: 56%;
    text-align: left;
    letter-spacing: 0.1rem;
    color: white;
    margin-top: 2rem;
}
.section-2 {
  margin-top: 11.75rem;
  padding: 2rem;
}
.animation-box {
  position: relative;
}
.sphere{
  width: fit-content;
    direction: rtl;
    margin-left: calc(100% - 23rem);
}
.sphere img{
  width: 23rem;
}
.man{
  position: absolute;
    top: 0;
    border-radius: 19rem;
    overflow: hidden;
}
.man img{
  width: 30rem;
}
.text-box {
  position: relative;
}
#section-title{
  text-align: left;
    font-size: 1.1rem;
    width: fit-content;
    padding: 0.5rem;
    background: #0b2545;
    color: #c7c2ff;
    border-radius: 1.2rem;
    margin-bottom: 1.5rem;
}
#section-main-title{
  text-align: left;
    font-weight: 900;
    font-size: 3rem;
    letter-spacing: 0.2rem;
}
#section-description{
  text-align: left;
    margin-top: 1.8rem;
}
.buttons{
  justify-content: center;
    margin-top: 3rem;
    gap: 1rem;
}
.buttons button{
  width: fit-content;
    border-radius: 1rem;
    color: white;
    padding: 1rem 2rem 1rem 2rem;
    font-size: 1.2rem;
}
.floating-box{
  background: #0b2545;
    width: 12rem;
    color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    top: 1rem;
    right: 3rem;
}
.boxes {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  right: 5rem;
  top: 5rem;
}
@media (max-width: 1250px) {
  #logo {
    width: 26rem;
  }
  a.nav-link {
    font-size: 2rem;
  }
  .container {
    max-width: 2400px;
  }
  .container h1 {
    font-size: 6.5rem;
  }
  p {
    font-size: 2.5rem;
  }
}
@media (max-width: 1250px) {}
@media (max-width: 1024px) {
  #logo {
    width: 8rem;
    margin: 1.5rem;
  }
  a.nav-link {
    font-size: 0.8rem;
  }
  .container h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.2rem;
  }
}
@media (max-width: 768px) {
  .navbar-expand-lg .navbar-nav {
    gap: 0;
  }
  a.nav-link {
    font-size: 0.75rem;
  }
  .container h1 {
    font-size: 1.5rem;
  }
  p {
    font-size: 0.875rem;
  }
}
@media (max-width: 500px) {
  #header{
    padding-right: 1rem;
    padding-top:0;
  }
  .navbar-expand-lg .navbar-nav {
    gap: 0;
  }
  a.nav-link {
    font-size: 0.75rem;
  }
  .container h1 {
    font-size: 1rem;
    margin: auto;
    margin-top: -1rem;
    text-align: center;
  }
  .small-section{
    margin: auto;
    margin-top: 0.5rem;
    width: 60%;
  }
  p {
    font-size: 0.5rem;
    text-align: center;
    margin: auto;
  }
}
@media (max-width: 320px) {}



</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
}
</script>
