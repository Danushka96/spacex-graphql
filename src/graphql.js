import gpl from 'graphql-tag'

export const ALL_COMPANY_DETAILS = gpl`query{
  company {
    ceo
    coo
    cto
    cto_propulsion
    employees
    founded
    founder
    headquarters {
      address
      city
      state
    }
    launch_sites
    links {
      elon_twitter
      flickr
      twitter
      website
    }
    name
    summary
    test_sites
    valuation
    vehicles
  }
}`

export const ALL_CAPSULES_DETAILS = gpl`query{
  capsules {
    id
    landings
    original_launch
    reuse_count
    status
    type
  }
}`

export function CAPSULE_DETAILS(id){
  return gpl`query{
    capsule(id: ${id}) {
      dragon {
        active
        crew_capacity
        description
        diameter {
          feet
          meters
        }
        dry_mass_kg
        dry_mass_lb
        first_flight
        heat_shield {
          dev_partner
          material
          size_meters
          temp_degrees
        }
        height_w_trunk {
          feet
          meters
        }
        id
        launch_payload_mass {
          kg
          lb
        }
        launch_payload_vol {
          cubic_feet
          cubic_meters
        }
        name
        orbit_duration_yr
        pressurized_capsule {
          payload_volume {
            cubic_feet
            cubic_meters
          }
        }
        return_payload_mass {
          kg
          lb
        }
        return_payload_vol {
          cubic_feet
          cubic_meters
        }
        sidewall_angle_deg
        thrusters {
          amount
          fuel_1
          fuel_2
          pods
          thrust {
            kN
          }
          type
        }
        trunk {
          cargo {
            solar_array
            unpressurized_cargo
          }
          trunk_volume {
            cubic_feet
            cubic_meters
          }
        }
        type
        wikipedia
      }
      id
      landings
      missions {
        flight
        name
      }
      original_launch
      reuse_count
      status
      type
    }
  }`
}