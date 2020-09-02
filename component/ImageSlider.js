import React from 'react';
import {Animated, Dimensions, View} from 'react-native';
import ImageSliderItem from './ImageSliderItem';

const {width, heigth} = Dimensions.get('window');

const ImageSlider = ({data}) => {
  const scrollX = new Animated.Value(0);

  if (data && data.length) {
    return (
      <View>
        <Animated.FlatList
          data={data}
          ref={(flatList) => {
            this.flatList = flatList;
          }}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <ImageSliderItem item={item} />;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
        />
      </View>
    );
  }

  return null;
};

export default ImageSlider;
