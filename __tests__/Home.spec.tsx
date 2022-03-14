import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import {GetStationsDocument} from '../src/generated/graphql';
import Home from '../src/screens/Home';

describe('Home component', () => {
  it('should render and show progress on loading', () => {
    const wrapper = render(
      <MockedProvider addTypename={false} mocks={[mock]}>
        <Home />
      </MockedProvider>,
    );

    expect(wrapper.queryByTestId('progress')).toBeTruthy();
  });
  it('should render the flatlist when whe loading is false', async () => {
    const wrapper = render(
      <MockedProvider addTypename={false} mocks={[mock]}>
        <Home />
      </MockedProvider>,
    );

    await waitFor(() => [
      expect(wrapper.queryByTestId('progress')).toBeFalsy(),
    ]);

    expect(wrapper.queryByTestId('container')?.children.length).toBe(1);
  });
});

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
