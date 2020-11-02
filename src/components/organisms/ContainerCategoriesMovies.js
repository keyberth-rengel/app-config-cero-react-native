import React from 'react';
import {View, ScrollView} from 'react-native';
import {t} from 'react-native-tailwindcss';
import {useSelector} from 'react-redux';

//molecules
import CategoriesMovies from '../molecules/CategoriesMovies';

const ContainerCategoriesMovie = ({navigation}) => {
  const {movies} = useSelector((state) => state.movies);
  return (
    <View style={[t.pB64]}>
      <ScrollView>
        {Object.keys(movies).map((item, i) => {
          return (
            <>
              <CategoriesMovies
                navigation={navigation}
                key={item}
                title={item}
                data={movies[item]}
              />
              <View style={[t.h3]} />
            </>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default ContainerCategoriesMovie;
