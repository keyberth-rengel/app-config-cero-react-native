import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {t} from 'react-native-tailwindcss';

const CardMovie = ({data, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsMovie', {data})}>
      <Image style={[t.w32, t.h48, t.border]} source={{uri: data.poster}} />
    </TouchableOpacity>
  );
};
const CategoriesMovies = ({data, title, navigation}) => {
  return (
    <View>
      <Text style={[t.text3xl, t.mB3, t.fontBold]}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CardMovie navigation={navigation} data={item} />
        )}
        ItemSeparatorComponent={() => <View style={[t.w3]} />}
        horizontal={true}
        keyExtractor={(item) => item.title}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default CategoriesMovies;
