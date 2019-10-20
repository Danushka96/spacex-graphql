<template>
  <div>
    <h1>Capsule {{id}}</h1>
    <v-card>
      <!-- <v-card-title>Capsule {{id}}</v-card-title> -->
      <v-card-text>
        <p>id: {{id}}</p>
        <p>landings: {{capsule.landings}}</p>
        <p>original launch: {{capsule.original_launch}}</p>
        <p>reuse count: {{capsule.reuse_count}}</p>
        <p>status: {{capsule.status}}</p>
        <p>type: {{capsule.type}}</p>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>dragon</v-card-title>
      <v-card-text>
        <p>id: {{capsule.dragon.id}}</p>
        <p>id: {{capsule.dragon.name}}</p>
        <p>active: {{capsule.dragon.active}}</p>
        <p>crew capacity: {{capsule.dragon.crew_capacity}}</p>
        <p>description: {{capsule.dragon.description}}</p>
        <p>diameter: {{capsule.dragon.diameter}}</p>
        <p>dry_mass_kg: {{capsule.dragon.dry_mass_kg}}</p>
        <p>first_flight: {{capsule.dragon.first_flight}}</p>
        <v-expansion-panels focusable>
          <v-expansion-panel>
            <v-expansion-panel-header>heat shield</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>dev_partner: {{capsule.dragon.heat_shield.dev_partner}}</p>
              <p>material: {{capsule.dragon.heat_shield.material}}</p>
              <p>size_meters: {{capsule.dragon.heat_shield.size_meters}}</p>
              <p>temp_degrees: {{capsule.dragon.heat_shield.temp_degrees}}</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <p>height_w_trunk: {{capsule.dragon.height_w_trunk}}</p>
        <p>launch_payload_mass: {{capsule.dragon.launch_payload_mass}}</p>
        <p>launch_payload_vol: {{capsule.dragon.launch_payload_vol}}</p>
        <p>orbit_duration_yr: {{capsule.dragon.orbit_duration_yr}}</p>
        <p>pressurized_capsule: {{capsule.dragon.pressurized_capsule}}</p>
        <p>return_payload_mass: {{capsule.dragon.return_payload_mass}}</p>
        <p>return_payload_vol: {{capsule.dragon.return_payload_vol}}</p>
        <p>sidewall_angle_deg: {{capsule.dragon.sidewall_angle_deg}}</p>
        <v-expansion-panels focusable>
          <v-expansion-panel v-for="(item,i) in capsule.dragon.thrusters" :key="i">
            <v-expansion-panel-header>thrusters {{i}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>amount: {{capsule.dragon.thrusters[i].amount}}</p>
              <p>fuel_1: {{capsule.dragon.thrusters[i].fuel_1}}</p>
              <p>fuel_2: {{capsule.dragon.thrusters[i].fuel_2}}</p>
              <p>pods: {{capsule.dragon.thrusters[i].pods}}</p>
              <p>thrust: {{capsule.dragon.thrusters[i].thrust}}</p>
              <p>type: {{capsule.dragon.thrusters[i].type}}</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels focusable>
          <v-expansion-panel>
            <v-expansion-panel-header>cargo</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>solar_array: {{capsule.dragon.trunk.cargo.solar_array}}</p>
              <p>trunk_volume: {{capsule.dragon.trunk.trunk_volume.cubic_meters}}</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <p>diameter: {{capsule.dragon.diameter.meters}}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { CAPSULE_DETAILS } from "../graphql";

export default {
  name: "companyDetails",
  data: () => ({
    capsule: {},
    id: ""
  }),
  apollo: {
    capsule: {
      query: CAPSULE_DETAILS("C101")
    }
  },
  beforeMount() {
    this.id = this.$route.params.id;
  }
};
</script>