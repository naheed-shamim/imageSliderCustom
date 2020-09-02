import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const {width, height} = Dimensions.get('window');

const ImageSliderItem = ({item}) => {
  const itemURI = `https://picsum.photos/200/300?image=${item.id}`;
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{uri: itemURI}} />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}> {item.author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 3,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },

  textView: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
  itemTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '5%',
  },
});

export default ImageSliderItem;
