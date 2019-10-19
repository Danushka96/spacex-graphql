<template>
  <div>
    <h1> Capsule {{id}}</h1>
  </div>
</template>

<script>
import { CAPSULE_DETAILS } from "../graphql";

export default {
  name: "companyDetails",
  data: () => ({
    capsule: {},
    id: ''
  }),
//   apollo: {
//     capsule: {
//       query: CAPSULE_DETAILS("C101")
//     }
//   },
  beforeMount(){
      this.id = this.$route.params.id
  }
};
</script>