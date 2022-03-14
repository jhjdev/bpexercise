/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {MockedProvider} from '@apollo/client/testing';
import StationCard from '../src/common/components/StationCard';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

// The component AND the query need to be exported
import {GetStationsDocument} from '../src/generated/graphql';

const mock = {
  request: {
    query: GetStationsDocument,
  },
  result: {
    data: {
      getAllChargePoints: [
        {
          __typename: 'ChargePoint',
          stationName: 'London 8',
          location: 'W2 5TY, UK',
          availableChargePoints: '1',
          totalChargePoints: '10',
          isFavourite: true,
          distance: '12',
        },
      ],
    },
  },
};

it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <StationCard
        data={{
          stationName: 'London 8',
          location: 'W2 5TY, UK',
          availableChargePoints: '1',
          totalChargePoints: '10',
          isFavourite: true,
          distance: '12',
        }}
      />
    </MockedProvider>,
  );
});
