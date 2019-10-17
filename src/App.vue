<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SpaceX</span>
        <span class="font-weight-light">Projects</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank"></v-btn>
    </v-app-bar>
    <Home></Home>
  </v-app>
</template>

<script>
import Home from './views/Home'

export default {
  name: "App",
  components: {
    Home
  },
  data: () => ({
    
  })
};
</script>
