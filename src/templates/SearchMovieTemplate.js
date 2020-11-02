import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {t} from 'react-native-tailwindcss';

//organisms
import ListMovie from '../components/organisms/ListMovie';

//actions
import {searchMoviesAction} from '../redux/actions/MoviesAction';

//Dimensions
const {width, height} = Dimensions.get('screen');

const SearchMovieTemplate = ({navigation}) => {
  const dispatch = useDispatch();
  const {searchmovies, loading} = useSelector((state) => state.movies);
  const [onChangeText, setonChangeText] = useState('');
  const getSearch = () => {
    if (onChangeText !== '') {
      dispatch(searchMoviesAction(onChangeText));
    }
  };

  return (
    <View style={[styles.container, t.pX6, t.pT2, t.pB32]}>
      <View style={[t.itemsCenter, t.mB3]}>
        <Text style={[t.text5xl, t.fontBold]}>WOOKIE</Text>
        <Text style={[t.text4xl, t.fontBold]}>MOVIES</Text>
      </View>
      <View style={[t.itemsCenter, t.mB3, t.flexRow, {width: '100%'}]}>
        <TextInput
          style={{
            height: 40,
            width: '80%',
            borderColor: 'gray',
            borderWidth: 1,
          }}
          placeholder="Search"
          onChangeText={(text) => setonChangeText(text)}
          value={onChangeText}
        />
        <TouchableOpacity style={[t.mL4]} onPress={() => getSearch()}>
          <Text style={[t.textWhite, t.textBase, t.bgOrange700, t.p2]}>
            Search
          </Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <View style={[{height: height * 0.6}, t.justifyCenter]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={searchmovies}
          renderItem={({item}) => (
            <ListMovie navigation={navigation} data={item} />
          )}
          ItemSeparatorComponent={() => <View style={[t.h4]} />}
          horizontal={false}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
        />
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
export default SearchMovieTemplate;
