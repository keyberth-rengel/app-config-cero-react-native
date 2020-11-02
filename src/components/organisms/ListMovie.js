import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {t} from 'react-native-tailwindcss';

const ListMovie = ({data, navigation}) => {
  const detailsMovie = () => {
    navigation.navigate('DetailsMovie', {data});
  };
  return (
    <TouchableOpacity style={[t.flexRow]} onPress={detailsMovie}>
      <Image
        style={[t.mR3]}
        source={{
          width: 70,
          height: 100,
          uri: data.poster,
        }}
      />
      <View style={[{width: '75%'}]}>
        <Text style={[t.textBase, t.fontBold, t.mB1]}>{data.title} </Text>

        <Text style={[t.textSm, t.fontBold, t.mB1]}>
          {data.genres.join(' - ')}
        </Text>
        <Text style={[t.textJustify]}>{data.overview.substring(0, 100)}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ListMovie;
