<template>
  <v-row no-gutters>
    <v-col cols="12" sm="6" style="margin-left:unset;">
      <sideNavigation/>
    </v-col>
    <v-col cols="12" sm="6" style="margin-left:unset;">
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
