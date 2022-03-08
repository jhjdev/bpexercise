import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ChargePoint = {
  __typename?: 'ChargePoint';
  availableChargePoints?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['String']>;
  isFavourite?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  stationName?: Maybe<Scalars['String']>;
  totalChargePoints?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  getAllChargePoints?: Maybe<Array<Maybe<ChargePoint>>>;
};

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};

export type GetStationsQueryVariables = Exact<{[key: string]: never}>;

export type GetStationsQuery = {
  __typename?: 'Query';
  _service: {__typename?: '_Service'; sdl?: string | null};
  getAllChargePoints?: Array<{
    __typename?: 'ChargePoint';
    stationName?: string | null;
    location?: string | null;
    availableChargePoints?: string | null;
    totalChargePoints?: string | null;
    isFavourite?: boolean | null;
    distance?: string | null;
  } | null> | null;
};

export const GetStationsDocument = gql`
  query GetStations {
    _service {
      sdl
    }
    getAllChargePoints {
      stationName
      location
      availableChargePoints
      totalChargePoints
      isFavourite
      distance
    }
  }
`;

/**
 * __useGetStationsQuery__
 *
 * To run a query within a React component, call `useGetStationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetStationsQuery,
    GetStationsQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GetStationsQuery, GetStationsQueryVariables>(
    GetStationsDocument,
    options,
  );
}
export function useGetStationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStationsQuery,
    GetStationsQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GetStationsQuery, GetStationsQueryVariables>(
    GetStationsDocument,
    options,
  );
}
export type GetStationsQueryHookResult = ReturnType<typeof useGetStationsQuery>;
export type GetStationsLazyQueryHookResult = ReturnType<
  typeof useGetStationsLazyQuery
>;
export type GetStationsQueryResult = Apollo.QueryResult<
  GetStationsQuery,
  GetStationsQueryVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
