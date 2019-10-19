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