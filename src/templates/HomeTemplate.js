import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import {t} from 'react-native-tailwindcss';

//organisms
import ContainerCategoriesMovies from '../components/organisms/ContainerCategoriesMovies';

//Dimensions
const {width, height} = Dimensions.get('screen');
const HomeTemplate = ({navigation}) => {
  const {loading} = useSelector((state) => state.movies);
  return (
    <View style={[styles.container, t.pX6, t.pT2, t.pB32]}>
      <View style={[t.itemsCenter, t.mB3]}>
        <Text style={[t.text5xl, t.fontBold]}>WOOKIE</Text>
        <Text style={[t.text4xl, t.fontBold]}>MOVIES</Text>
      </View>
      {loading ? (
        <View style={[{height: height * 0.6}, t.justifyCenter]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <ContainerCategoriesMovies navigation={navigation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    minHeight: height,
    backgroundColor: '#e2e2e2',
  },
});
export default HomeTemplate;
