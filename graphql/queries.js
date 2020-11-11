/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInvestigation = /* GraphQL */ `
  query GetInvestigation($id: ID!) {
    getInvestigation(id: $id) {
      id
      mode
      reportTitle
      status
      model
      location
      occID
      occYear
      pubDate
      createdAt
      updatedAt
    }
  }
`;
export const listInvestigations = /* GraphQL */ `
  query ListInvestigations(
    $filter: ModelInvestigationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvestigations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mode
        reportTitle
        status
        model
        location
        occID
        occYear
        pubDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
