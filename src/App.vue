<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SpaceX</span>
        <span class="font-weight-light">Projects</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-row no-gutters>
    <v-col cols="12" sm="3" style="margin-left:unset;">
      <sideNavigation/>
    </v-col>
    <v-col class="my-12" cols="12" sm="9" :shaped="true" style="margin-left:unset;margin-top:70px!important">
      <router-view></router-view>
    </v-col>
  </v-row>
  </v-app>
</template>

<script>
import sideNavigation from './components/sideNavigation'
export default {
  name: "App",
  components: {
    sideNavigation
  },
  data: () => ({
    // 
  })
};
</script>
