<template>
  <v-row no-gutters>
    <v-col cols="4" sm="4" style="margin-left:unset;">
      <v-card height="680" width="256" class="mx-auto my-12" style="margin-left: unset !important;">
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title" style="margin-top: 20px !important;">Application</v-list-item-title>
              <v-list-item-subtitle>subtext</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "companyDetails",
  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" }
    ],
    right: null
  })
};
</script>