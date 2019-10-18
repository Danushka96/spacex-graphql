<template>
  <v-row no-gutters>
    <v-col cols="12" sm="3" style="margin-left:unset;">
      <sideNavigation/>
    </v-col>
    <v-col class="my-12" cols="12" sm="6" :shaped="true" style="margin-left:unset;margin-top:70px!important">
      <companyDetails/>
    </v-col>
  </v-row>
</template>

<script>
import sideNavigation from '../components/sideNavigation'
import companyDetails from '../components/CompanyDetails'

export default {
  name: "App",
  components: {
    sideNavigation,
    companyDetails
  },
  data: () => ({
    // 
  })
};
</script>
