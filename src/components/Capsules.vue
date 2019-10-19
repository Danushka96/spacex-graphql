<template>
  <div>
    <v-card>
      <v-card-title>
        Capsules
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="capsules" :search="search" @click:row="route($event)"></v-data-table>
    </v-card>
  </div>
</template>

<script>
import { ALL_CAPSULES_DETAILS } from "../graphql";

export default {
  name: "companyDetails",
  data: () => ({
    capsules: [],
    search: "",
    headers: [
      {
        text: "ID",
        align: "left",
        sortable: false,
        value: "id"
      },
      { text: "landings", value: "landings" },
      { text: "original launch", value: "original_launch" },
      { text: "reuse count", value: "reuse_count" },
      { text: "status", value: "status" },
      { text: "type", value: "type" }
    ],
  }),
  apollo: {
    capsules: {
      query: ALL_CAPSULES_DETAILS
    }
  },
  methods: {
    route(event){
      this.$router.push('/capsules/'+event.id);
    }
  }
};
</script>

<style>
tr{
  cursor: pointer;
}
</style>