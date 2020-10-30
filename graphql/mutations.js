/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInvestigation = /* GraphQL */ `
  mutation CreateInvestigation(
    $input: CreateInvestigationInput!
    $condition: ModelInvestigationConditionInput
  ) {
    createInvestigation(input: $input, condition: $condition) {
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
export const updateInvestigation = /* GraphQL */ `
  mutation UpdateInvestigation(
    $input: UpdateInvestigationInput!
    $condition: ModelInvestigationConditionInput
  ) {
    updateInvestigation(input: $input, condition: $condition) {
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
export const deleteInvestigation = /* GraphQL */ `
  mutation DeleteInvestigation(
    $input: DeleteInvestigationInput!
    $condition: ModelInvestigationConditionInput
  ) {
    deleteInvestigation(input: $input, condition: $condition) {
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
