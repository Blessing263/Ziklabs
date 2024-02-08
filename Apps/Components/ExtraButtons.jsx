import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const ExtraButtons = () => {
  const handleLovePress = () => {
    console.log('Love button pressed');
  };

  const handleSharePress = () => {
    console.log('Share button pressed');
  };

  const handleFeedbackPress = () => {
    console.log('Feedback button pressed');
  };

  const handleBookmarkPress = () => {
    console.log('Bookmark button pressed');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLovePress}>
        <Ionicons name="heart-outline" size={35} color={Colors.PRIMARY} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSharePress}>
        <Ionicons name="share-social-outline" size={35} color={Colors.PRIMARY}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleFeedbackPress}>
        <Ionicons name="chatbox-outline" size={35} color={Colors.PRIMARY} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleBookmarkPress}>
        <Ionicons name="bookmark-outline" size={35} color={Colors.PRIMARY} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    position:'absolute',
    right: 0,
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 5,
    color: 'black',
  },
});

export default ExtraButtons;
