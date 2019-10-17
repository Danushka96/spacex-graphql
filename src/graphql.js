import gpl from 'graphql-tag'

export const ALL_COMPANY_DETAILS = gpl`query{
    company {
        employees
        founded
        founder
        name
        test_sites
        valuation
        vehicles
        headquarters {
          address
          city
          state
        }
        launch_sites
      }
}`