import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import {t} from 'react-native-tailwindcss';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//Dimensions
const {width, height} = Dimensions.get('screen');

const DetailsMovieTemplate = ({route}) => {
  const {data} = route.params;
  return (
    <View style={[styles.container]}>
      <View style={[t.relative]}>
        <Image style={[styles.img]} source={{uri: data.backdrop}} />
        <View
          style={[
            t.absolute,
            {bottom: '-33%', width: '60%'},
            t.mX6,
            t.flexRow,
            ,
          ]}>
          <Image style={[t.w32, t.h48, t.border]} source={{uri: data.poster}} />
          <View style={[t.mL4]}>
            <Text style={[t.text2xl, t.fontBold, t.textWhite, t.mT16]}>
              {data.title} ({data.imdb_rating})
            </Text>
            <View style={[t.flexRow, t.mT12]}>
              <FontAwesome name="star" color="#feca4a" size={35} />
              <FontAwesome name="star" color="#feca4a" size={35} />
              <FontAwesome name="star" color="#feca4a" size={35} />
              <FontAwesome name="star" color="#feca4a" size={35} />
              <FontAwesome name="star-o" color="#b3b3b3" size={35} />
            </View>
          </View>
        </View>
      </View>
      <View style={[t.pX6, t.pT24, {width}]}>
        <Text style={[t.textXl]}>{`${data.released_on.substring(0, 4)} | ${
          data.length
        } | ${data.director}`}</Text>
        <Text style={[t.textXl, t.mY4]}>Cast: {data.cast.join(', ')}</Text>
        <Text style={[t.textXl]}>movie description: {data.overview}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    minHeight: height,
    backgroundColor: '#e2e2e2',
  },
  img: {
    width,
    height: 250,
  },
  imgposter: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default DetailsMovieTemplate;
