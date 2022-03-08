import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

interface Props {
  data: {
    stationName?: string | null;
    location?: string | null;
    availableChargePoints?: string | null;
    totalChargePoints?: string | null;
    isFavourite?: boolean | null;
    distance?: string | null;
  };
}

const StationCard: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      <>
        <View style={styles.details}>
          <View style={styles.points}>
            <Text style={styles.textPoints}>
              {data.availableChargePoints + '/' + data.totalChargePoints}
            </Text>
            <Text style={styles.text}>{'Available'}</Text>
          </View>
          <View style={styles.station}>
            <Text style={styles.text}>
              {data.stationName}
              <Text style={styles.image}>
                {!data.isFavourite ? (
                  <Image
                    source={require('../../images/icons8-star-48.png')}
                    style={styles.image}
                  />
                ) : (
                  ''
                )}
              </Text>
            </Text>
            <View style={styles.station}>{data.location}</View>
          </View>
          <View style={styles.distance}>
            <Text style={styles.imageArrow}>
              <Image
                source={require('../../images/icons8-turn-right-64.png')}
                style={styles.image}
              />
            </Text>
            <Text style={styles.text}>{data.distance + 'km'}</Text>
          </View>
        </View>
      </>
    </View>
  );
};

export default StationCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 24,
    backgroundColor: '#FFF',
    borderColor: '#F0F0F0',
    borderWidth: 2,
    flexDirection: 'row',
  },
  image: {width: 20, height: 20},
  imageArrow: {width: 20, height: 20, marginLeft: 20},
  details: {
    marginLeft: 8,
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
  },
  points: {
    marginLeft: 8,
    justifyContent: 'space-between',
    flexGrow: 1,
    width: '20%',
  },
  station: {
    paddingLeft: 40,
    justifyContent: 'space-between',
    flexGrow: 2,
    width: '50%',
  },
  distance: {
    marginLeft: 8,
    justifyContent: 'space-between',
    flexGrow: 1,
    width: '25%',
  },
  textPoints: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});
