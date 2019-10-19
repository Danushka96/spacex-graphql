<template>
  <div>
    <h1>Company Details</h1>
    <p>{{company.summary}}</p>
    <v-form ref="form">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="company.ceo" label="CEO" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="company.coo" label="COO" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="company.cto" label="CTO" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="company.cto_propulsion" label="CTO Propulsion" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="company.employees" label="Employees" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="company.founded" label="Founded" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="company.founder" label="Founder" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Headquarters"
              :value="company.headquarters.address+', '+company.headquarters.city+', '+company.headquarters.state"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="company.launch_sites" label="Launch Sites" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="company.name" label="Name" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="company.valuation" label="Valuation" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="company.vehicles" label="Vehicles" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="company.test_sites" label="Test Sites" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            <a :href="company.links.elon_twitter" target="new">
              <v-btn color="blue" class="ma-2 white--text">
                elonmusk
                <v-icon right dark>mdi-twitter</v-icon>
              </v-btn>
            </a>
          </v-col>
          <v-col cols="12" md="3">
            <a :href="company.links.flickr" target="new">
              <v-btn color="pink" class="ma-2 white--text">
                Flicker
                <v-icon right dark>mdi-flickr</v-icon>
              </v-btn>
            </a>
          </v-col>
          <v-col cols="12" md="3">
            <a :href="company.links.twitter" target="new">
              <v-btn color="blue" class="ma-2 white--text">
                SpaceX
                <v-icon right dark>mdi-twitter</v-icon>
              </v-btn>
            </a>
          </v-col>
          <v-col cols="12" md="3">
            <a :href="company.links.website" target="new">
              <v-btn color="blue-grey" class="ma-2 white--text">
                SpaceX Web
                <v-icon right dark>mdi-wan</v-icon>
              </v-btn>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { ALL_COMPANY_DETAILS } from "../graphql";

export default {
  name: "companyDetails",
  data: () => ({
    company: {
      ceo: "",
      coo: "",
      cto: "",
      cto_propulsion: "",
      employees: "",
      founded: "",
      founder: "",
      headquarters: {
        address: "",
        city: "",
        state: ""
      },
      launch_sites: "",
      links: {
        elon_twitter: "",
        flickr: "",
        twitter: "",
        website: ""
      },
      name: "",
      summary: "",
      test_sites: "",
      valuation: "",
      vehicles: ""
    }
  }),
  apollo: {
    company: {
      query: ALL_COMPANY_DETAILS
    }
  }
};
</script>