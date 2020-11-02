import React from 'react';
import {ScrollView} from 'react-native';

//template
import DetailsMovieTemplate from '../templates/DetailsMovieTemplate';

const DetailsMovie = ({route}) => {
  return (
    <ScrollView>
      <DetailsMovieTemplate route={route} />
    </ScrollView>
  );
};

export default DetailsMovie;
