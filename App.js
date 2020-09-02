import React from 'react';
import {View, SafeAreaView} from 'react-native';
import ImageSlider from './component/ImageSlider';
import {getShuffledArray} from './utils/utils';

const getImages = () => {
  fetch('https://picsum.photos/list')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const App = () => {
  const [imgData, setImgData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://picsum.photos/list')
      .then((response) => response.json())
      .then((data) => {
        const shuffledArray = getShuffledArray(data);
        setImgData(shuffledArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView>
      <View>
        <ImageSlider data={imgData} />
      </View>
    </SafeAreaView>
  );
};

export default App;
