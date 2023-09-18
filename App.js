import * as React from 'react';
import { BottomNavigation, Button, Text } from 'react-native-paper';
import {SafeAreaProvider,} from 'react-native-safe-area-context';
import Ex1 from './.src/Ex1';
import Ex2 from './.src/Ex2';
import Ex3 from './.src/Ex3';
import Ex4 from './.src/Ex4';
import Ex5 from './.src/Ex5';
import Ex6 from './.src/Ex6';
import Ex7 from './.src/Ex7';
import Ex8 from './.src/Ex8';
const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Ex1', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex2', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex3', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex4', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex5', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex6', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex7', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Ex8', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
  
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Ex1: Ex1,
    Ex2: Ex2,
    Ex3: Ex3,
    Ex4: Ex4,
    Ex5: Ex5,
    Ex6: Ex6,
    Ex7: Ex7,
    Ex8: Ex8,
  });

  return (
  <SafeAreaProvider>
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  </SafeAreaProvider>
  );
};

export default App;