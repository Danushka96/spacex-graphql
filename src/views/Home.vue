<template>
  <v-row no-gutters>
    <v-col cols="4" sm="4" style="margin-left:unset;">
      <!-- <sideNavigation/> -->
    </v-col>
    <v-col cols="8" sm="4" style="margin-left:unset;">
      <!-- <companyDetails/> -->
      <HelloWorld/>
    </v-col>
  </v-row>
</template>

<script>
import { ALL_COMPANY_DETAILS } from "../graphql";
// import { sideNavigation } from '../components/sideNavigation';
// import { companyDetails } from '../components/CompanyDetails';
import { HelloWorld } from '../components/HelloWorld';

export default {
  name: "Home",
  components: {
    // sideNavigation,
    // companyDetails,
    HelloWorld
  },
  data() {
    return {
      company: []
    };
  },
  apollo: {
    company: {
      query: ALL_COMPANY_DETAILS
    }
  }
};
</script>
