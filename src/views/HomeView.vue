<template>
  <v-layout class="rounded rounded-md">
    
    <v-main id="main" class="d-flex align-center justify-center" style="min-height: 300px;">
      <div class="section-1">
        <video autoplay muted loop id="myVideo">
          <source src="https://apolix.global/wp-content/uploads/2023/02/Apolix-background.mp4" type="video/mp4">
        </video>
        <v-app-bar id="header" :elevation="0">
          <template v-slot:prepend>
              <img id="logo" src="../assets/logo.svg"/>
          </template>
        
          <template v-slot:append>
            <v-icon icon="mdi-heart"></v-icon>
          
            <v-btn icon="mdi-magnify"></v-btn>
          
            <v-btn icon="mdi-dots-vertical"></v-btn>
          </template>
        </v-app-bar>
        
      </div>
    </v-main>
  </v-layout>
</template>

<style>
#logo{
  width:10rem;
  margin:2rem;
}
#header{
  background: transparent;
  padding-top: 1rem;

}
#myVideo{
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
