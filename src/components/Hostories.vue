<template>
  <div>
    <h1>Company Details</h1>
  </div>
</template>

<script>
import { ALL_COMPANY_DETAILS } from "../graphql";

export default {
  name: "companyDetails",
  data: () => ({
    company: {
      
    }
  }),
  apollo: {
    company: {
      query: ALL_COMPANY_DETAILS
    }
  }
};
</script>