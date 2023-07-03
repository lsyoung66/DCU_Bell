import React, { Component } from "react";
import {
  View, Text, StyleSheet, StatusBar, TouchableOpacity, Dimensions,
  Image, Alert, SafeAreaView, ImageBackground, TouchableHighlight
} from "react-native";
import Modal from "react-native-modal";

let home_icon = require('../img/home.png');
let setting_icon = require('../img/set.png');
let background = require('../img/bg.png');

StatusBar.setBarStyle("light-content");
StatusBar.setHidden(false);

export default class ScheduleScreen extends React.Component {
  state = {
    button1: '#00498C', button2: '#00498C', button3: '#00498C', button4: '#00498C',
    bg1: '#B8DDEB', bg2: '#B8DDEB', bg3: '#B8DDEB', bg4: '#B8DDEB',
    color1: '#003B71', color2: '#003B71', color3: '#003B71', color4: '#003B71',
    isModalVisible: false,
  };

  school = () => {
    this.setState({ button1: '#D04B90', bg1: '#EBB8C8', color1: '#74003C' })
    this.props.navigation.navigate('SchoolCirculation');
  }
  daegu = () => {
    this.setState({ button2: '#D04B90', bg2: '#EBB8C8', color2: '#74003C' })
  }
  station = () => {
    this.setState({ button3: '#D04B90', bg3: '#EBB8C8', color3: '#74003C' })
  }
  intercity = () => {
    this.setState({ button4: '#D04B90', bg4: '#EBB8C8', color4: '#74003C' })
  }

  goHome() {
    this.props.navigation.navigate('MainScreen');
  }

  School() {
    this.props.navigation.navigate('SchoolCirculation');
    this.setState({ button1: '#00498C', bg1: '#B8DDEB', color1: '#003B71' })
  }

  Daegu() {
    this.props.navigation.navigate('DaeguCirculation');
    this.setState({ button2: '#00498C', bg2: '#B8DDEB', color2: '#003B71' })
  }

  Station() {
    this.props.navigation.navigate('SubwayStation');
    this.setState({ button3: '#00498C', bg3: '#B8DDEB', color3: '#003B71' })
  }

  Ulsan() {
    this.props.navigation.navigate('Ulsan');
    this.setState({ isModalVisible: false, button4: '#00498C', bg4: '#B8DDEB', color4: '#003B71' })
  }

  Pohang() {
    this.props.navigation.navigate('Pohang');
    this.setState({ isModalVisible: false, button4: '#00498C', bg4: '#B8DDEB', color4: '#003B71' })
  }

  Gumi() {
    this.props.navigation.navigate('Gumi');
    this.setState({ isModalVisible: false, button4: '#00498C', bg4: '#B8DDEB', color4: '#003B71' })
  }

  Gyeongju() {
    this.props.navigation.navigate('Gyeongju');
    this.setState({ isModalVisible: false, button4: '#00498C', bg4: '#B8DDEB', color4: '#003B71' })
  }

  cancel = () => {
    this.setState({
      isModalVisible: false, button4: '#00498C', bg4: '#B8DDEB', color4: '#003B71'
    })
    Alert.alert('⍝ • ‸ • ⍝', '취소되었습니다');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <ImageBackground style={styles.background} source={background}>
            <>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => this.goHome()}>
                  <Image
                    style={styles.header_home}
                    source={home_icon}>
                  </Image>
                </TouchableOpacity>
                <Text style={styles.header_text}>셔틀 시간표</Text>
                <Image
                  style={styles.header_set}
                  source={setting_icon}>
                </Image>
              </View>

              <View style={styles.center}>
                <TouchableOpacity activeOpacity={0.87} style={[styles.Button, { borderColor: this.state.button1 }, { backgroundColor: this.state.bg1 }]} onPressIn={() => this.school()} delayPressOut={370} onPressOut={() => this.School()}>
                  <Text style={[styles.txt, { color: this.state.color1 }]}>교내순환</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.87} style={[styles.Button, { borderColor: this.state.button2 }, { backgroundColor: this.state.bg2 }]} onPressIn={() => this.daegu()} delayPressOut={370} onPressOut={() => this.Daegu()}>
                  <Text style={[styles.txt, { color: this.state.color2 }]}>대        구</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.87} style={[styles.Button, { borderColor: this.state.button3 }, { backgroundColor: this.state.bg3 }]} onPressIn={() => this.station()} delayPressOut={370} onPressOut={() => this.Station()}>
                  <Text style={[styles.txt, { color: this.state.color3 }]}>지하철역</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.87} style={[styles.Button, { borderColor: this.state.button4 }, { backgroundColor: this.state.bg4 }]} onPressIn={() => this.intercity()} delayPressOut={370} onPressOut={() => this.setState({ isModalVisible: true })}>
                  <Text style={[styles.txt, { color: this.state.color4 }]}>시외지역</Text>
                </TouchableOpacity>
              </View>

              <Modal isVisible={this.state.isModalVisible}
                statusBarTranslucent={true}
                onBackdropPress={() => this.cancel()}
                hasBackdrop={true}
                backdropColor="rgba(0,0,0,0.9)"
                transparent={true}>
                <View style={styles.ModalBackground}>
                  <Text style={styles.PopupText}>지역을 선택하세요.</Text>
                  <View style={styles.Container}>
                    <TouchableHighlight underlayColor="#D04B90" style={[styles.region]} onPress={() => this.Ulsan()}>
                      <Text style={[styles.regionText]}>울산</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#D04B90" style={[styles.region]} onPress={() => this.Pohang()}>
                      <Text style={[styles.regionText]}>포항</Text>
                    </TouchableHighlight>
                  </View>
                  <View style={styles.Container}>
                    <TouchableHighlight underlayColor="#D04B90" style={[styles.region]} onPress={() => this.Gumi()}>
                      <Text style={[styles.regionText]}>구미</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#D04B90" style={[styles.region]} onPress={() => this.Gyeongju()}>
                      <Text style={[styles.regionText]}>경주</Text>
                    </TouchableHighlight>
                  </View>
                  <View style={styles.Container}>
                    <TouchableOpacity style={styles.cancel} onPress={() => this.cancel()}>
                      <Text style={styles.button}>close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

            </>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    ...Platform.select({
      ios: {
        backgroundColor: '#00498C',
      },
      android: {
        backgroundColor: StatusBar.setBackgroundColor("#00498C"),
      },
    }),
  },
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  header: {
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1%',
    backgroundColor: '#00498C',
  },
  header_home: {
    marginRight: '7%',
    width: 35,
    height: 35,
  },
  header_text: {
    fontSize: 27,
    fontWeight: "bold",
    color: 'white',
  },
  header_set: {
    marginLeft: '7%',
    width: 35,
    height: 35,
  },
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '7%',
    alignItems: 'center'
  },
  txt: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#00203E',
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 85,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 37,
    borderBottomLeftRadius: 37,
    borderBottomRightRadius: 17,
    borderWidth: 3,
  },
  ModalBackground: {
    backgroundColor: "#E2E2E2",
    width: '100%',
    height: '37%',
    borderRadius: 15,
    borderWidth: 3.7,
    borderColor: '#00498C'
  },
  PopupText: {
    textAlign: "center",
    marginTop: '3%',
    marginBottom: '1%',
    fontSize: 25,
    fontWeight: "bold",
    color: '#00498C',
  },
  Container: {
    marginHorizontal: '5%',
    justifyContent: 'space-around',
    flexDirection: "row",
    marginVertical: '3%'
  },
  region: {
    backgroundColor: '#00498C',
    width: 135,
    height: 70,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  regionText: {
    justifyContent: 'space-around',
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white'
  },
  cancel: {
    justifyContent: 'space-evenly',
    width: Dimensions.get('screen').width * 0.88,
    height: '50%',
    borderRadius: 10,
    backgroundColor: '#b8ddeb',
    ...Platform.select({
      ios: {
        marginTop: '0.5%',
      },
      android: {
        marginTop: '3%',
      },
    }),
  },
  button: {
    textAlign: "center",
    fontSize: 23,
    color: '#00498C',
    fontWeight: "bold",
  },
});