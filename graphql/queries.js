/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInvestigation = /* GraphQL */ `
  query GetInvestigation($id: ID!) {
    getInvestigation(id: $id) {
      id
      mode
      status
      occID
      occYear
      reportTitle
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
        status
        occID
        occYear
        reportTitle
        pubDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
