<template>
    <v-col cols="12" sm="12" style="margin-left:unset;">
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
</template>

<script>
export default {
  name: "sideNavigation",
  data: () => ({
    items: [
      { title: "Company", icon: "mdi-view-dashboard" },
      { title: "Capsules", icon: "mdi-image" },
      { title: "cores", icon: "mdi-help-box" },
      { title: "coresPast", icon: "mdi-help-box" },
      { title: "coresUpcoming", icon: "mdi-help-box" },
      { title: "dragons", icon: "mdi-help-box" },
      { title: "histories", icon: "mdi-help-box" },
      { title: "landpads", icon: "mdi-help-box" },
      { title: "launchLatest", icon: "mdi-help-box" },
      { title: "launchNext", icon: "mdi-help-box" },
      { title: "launches", icon: "mdi-help-box" },
      { title: "launchesPast", icon: "mdi-help-box" },
      { title: "launchesPastResult", icon: "mdi-help-box" },
      { title: "launchesUpcoming", icon: "mdi-help-box" },
      { title: "launchpads", icon: "mdi-help-box" },
      // { title: "launchesPast", icon: "mdi-help-box" },
      { title: "missions", icon: "mdi-help-box" },
      { title: "missionsResult", icon: "mdi-help-box" },
      { title: "payloads", icon: "mdi-help-box" },
      { title: "roadster", icon: "mdi-help-box" },
      { title: "rockets", icon: "mdi-help-box" },
      { title: "rocketsResult", icon: "mdi-help-box" },
      { title: "ships", icon: "mdi-help-box" },
      { title: "shipsResult", icon: "mdi-help-box" },
    ],
    right: null
  })
};
</script>