import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

//template
import HomeTemplete from '../templates/HomeTemplate';

//actions
import {getMoviesAction, searchMoviesAction} from '../redux/actions/MoviesAction';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesAction());
  }, []);
  return <HomeTemplete  navigation={navigation}/>;
};

export default Home;
