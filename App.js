import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import PostContainer from './PostContainer';
import PhotoViewer from './PhotoViewer';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

const chichen = require('./assets/images/chichen.png');
const colosseum = require('./assets/images/colosseum.png');
const machu = require('./assets/images/machu.png');
const petra = require('./assets/images/petra.png');
const redeemer = require('./assets/images/redeemer.png');
const taj = require('./assets/images/taj.png');
const wall = require('./assets/images/wall.png');

const wonders = [
  { title: 'Chichen Itza', image: chichen },
  { title: 'The Colosseum', image: colosseum },
  { title: 'Machu Picchu', image:  machu },
  { title: 'Petra "Rose City"', image: petra },
  { title: 'Christ the Redeemer', image: redeemer },
  { title: 'Taj Mahal', image: taj },
  { title: 'Great Wall of China', image: wall },
];

export default class App extends Component {
  state = {
    selected: null,
    position: null,
  };

  showImage = (selected, position) => {
    this.setState({
      selected,
      position,
    });
  }

  closeViewer = () => {
    this.setState({
      selected: null,
      position: null,
    });
  }

  renderViewer() {
    const { selected, position } = this.state;

    if (selected) {
      return (
        <PhotoViewer
          post={selected}
          position={position}
          onClose={this.closeViewer}
        />
      );
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <Text style={styles.toolbar}>Seven Wonders of the World</Text>
        <ScrollView style={styles.content}>
        {
          wonders.map((post, index) =>
            <PostContainer key={index} post={post}
            onPress={this.showImage} />
          )
        }
        </ScrollView>
        {this.renderViewer()}
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
});