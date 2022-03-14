import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {ChargePoint, useGetStationsQuery} from '../generated/graphql';
import StationCard from '../common/components/StationCard';

const Home = () => {
  const {data, loading} = useGetStationsQuery();

  if (loading) {
    return (
      <View testID="progress" style={styles.container}>
        <ActivityIndicator color="#32B768" size="large" />
      </View>
    );
  }

  const ListHeader = () => {
    //View to set in Header
    return (
      <View style={styles.headerFooterStyle}>
        <Text style={styles.textStyleH3}>{'Hello'}</Text>
        <Text style={styles.textStyleH1}>{'User name'}</Text>
        <Text style={styles.textStyleH3}>{'Nearby chargers'}</Text>
        <Text style={styles.textStyle}>
          {'Nearest charging stations within a radius of 50km.'}
        </Text>
        <Text style={styles.textStyle}>{'Your preference: CCS Type 2.'}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container} testID="container">
      <FlatList
        data={data?.getAllChargePoints}
        initialNumToRender={5}
        ListHeaderComponent={ListHeader}
        renderItem={({item}) => <StationCard data={item as ChargePoint} />}
        contentContainerStyle={styles.stationList}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerFooterStyle: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginTop: 30,
  },
  stationList: {
    padding: 16,
  },
  textStyleH1: {
    textAlign: 'left',
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 7,
    marginBottom: 20,
  },
  textStyleH3: {
    textAlign: 'left',
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 7,
  },
  textStyle: {
    textAlign: 'left',
    color: '#000000',
    fontSize: 12,
    paddingLeft: 7,
  },
});
