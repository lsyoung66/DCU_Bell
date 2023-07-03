import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View, Text, StyleSheet, StatusBar, TouchableOpacity,
  ScrollView, Image, Alert, SafeAreaView, ImageBackground, Platform 
} from "react-native";
import Modal from "react-native-modal";

let home_icon = require('../img/home.png');
let setting_icon = require('../img/set.png');
let background = require('../img/bg2.png');

let bus_array = [];
let week_array = [];

StatusBar.setBarStyle("light-content");
StatusBar.setHidden(false);

export default class B1 extends React.Component {
  state = {
    isModalVisible: false, mon: 'white', tue: 'white', wed: 'white', thu: 'white', fri: 'white',
    m: '#00498C', mn: 'white', tu: '#00498C', tun: 'white', w: '#00498C', wn: 'white', th: '#00498C', thn: 'white', f: '#00498C', fn: 'white',
    monColor: 'white', tuesColor: 'white', wednesColor: 'white', thursColor: 'white', friColor: 'white',
    bus: '', week: '', mond: '', tues: '', wednes: '', thurs: '', frid: ''
  };

  monday = () => {
    if (this.state.monColor == 'white') {
      this.setState({ monColor: '#00498C', m: '#CDEDF6', mn: '#00B3DE', week: '월요일', mond: '월요일' });
    } else {
      this.setState({ monColor: 'white', m: '#00498C', mn: 'white', week: '', mond: '' });
    }
  }
  tuesday = () => {
    if (this.state.tuesColor == 'white') {
      this.setState({ tuesColor: '#00498C', tu: '#CDEDF6', tun: '#00B3DE', week: '화요일', tues: '화요일' });
    } else {
      this.setState({ tuesColor: 'white', tu: '#00498C', tun: 'white', week: '', tues: '' });
    }
  }
  wednesday = () => {
    if (this.state.wednesColor == 'white') {
      this.setState({ wednesColor: '#00498C', w: '#CDEDF6', wn: '#00B3DE', week: '수요일', wednes: '수요일' });
    } else {
      this.setState({ wednesColor: 'white', w: '#00498C', wn: 'white', week: '', wednes: '' });
    }
  }
  thursday = () => {
    if (this.state.thursColor == 'white') {
      this.setState({ thursColor: '#00498C', th: '#CDEDF6', thn: '#00B3DE', week: '목요일', thurs: '목요일' });
    } else {
      this.setState({ thursColor: 'white', th: '#00498C', thn: 'white', week: '', thurs: '' });
    }
  }
  friday = () => {
    if (this.state.friColor == 'white') {
      this.setState({ friColor: '#00498C', f: '#CDEDF6', fn: '#00B3DE', week: '금요일', frid: '금요일' });
    } else {
      this.setState({ friColor: 'white', f: '#00498C', fn: 'white', week: '', frid: '' });
    }
  }

  cancel = () => {
    this.setState({
      isModalVisible: false, monColor: 'white', tuesColor: 'white', wednesColor: 'white', thursColor: 'white', friColor: 'white',
      m: '#00498C', mn: 'white', tu: '#00498C', tun: 'white', w: '#00498C', wn: 'white', th: '#00498C', thn: 'white', f: '#00498C', fn: 'white',
      mon: 'white', tue: 'white', wed: 'white', thu: 'white', fri: 'white', mond: '', tues: '', wednes: '', thurs: '', frid: '',
      bus: '', week: ''
    })
    Alert.alert('⍝ • ‸ • ⍝', '취소되었습니다');
  }

  save = () => {
    this.setState({
      isModalVisible: false, monColor: 'white', tuesColor: 'white', wednesColor: 'white', thursColor: 'white', friColor: 'white',
      m: '#00498C', mn: 'white', tu: '#00498C', tun: 'white', w: '#00498C', wn: 'white', th: '#00498C', thn: 'white', f: '#00498C', fn: 'white',
      mon: 'white', tue: 'white', wed: 'white', thu: 'white', fri: 'white', mond: '', tues: '', wednes: '', thurs: '', frid: '',
      bus: '', week: ''
    })
    if (this.state.week == '') {
      Alert.alert('경 고❗', '요일을 선택하세요.');
    }
    else if (this.state.j > 9) {
      Alert.alert('⍝ • ᴥ • ⍝', '최대 저장 개수를 초과했습니다.');
    }
    else {
      Alert.alert('⍝ • ᎑ • ⍝', '저장되었습니다');
      this.saveData();
      this.componentDidMount();
    }
  }

  componentDidMount() {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          const user = JSON.parse(store[i][1]);
          this.setState({ j: i })
          bus_array[i] = store[i][0];
          week_array[i] = (user.week);

        });
      });
    });
  }

  goHome() {
    this.props.navigation.navigate('MainScreen');
  }

  saveData() {
    AsyncStorage.setItem(this.state.bus, JSON.stringify({
      week: this.state.mond + " " + this.state.tues + " " + this.state.wednes
        + " " + this.state.thurs + " " + this.state.frid
    }));
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
                <Text style={styles.header_text}>12호차</Text>
                <Image
                  style={styles.header_set}
                  source={setting_icon}>
                </Image>
              </View>

              <ScrollView>
                <View style={{ marginTop: '5%' }}>
                  <TouchableOpacity delayPressOut={370} onPressOut={() => this.setState({ isModalVisible: true, bus: '안심역' })}>
                    <Text style={styles.txt}>안심역</Text>
                  </TouchableOpacity>
                  <TouchableOpacity delayPressOut={370} onPressOut={() => this.setState({ isModalVisible: true, bus: '효명초등학교' })}>
                    <Text style={styles.txt}>효명초등학교</Text>
                  </TouchableOpacity>
                  <TouchableOpacity delayPressOut={370} onPressOut={() => this.setState({ isModalVisible: true, bus: '비둘기아파트' })}>
                    <Text style={styles.txt}>비둘기아파트</Text>
                  </TouchableOpacity>
                  <TouchableOpacity delayPressOut={370} onPressOut={() => this.setState({ isModalVisible: true, bus: '가람마을주공1단지' })}>
                    <Text style={styles.txt}>가람마을주공1단지</Text>
                  </TouchableOpacity>
                  <TouchableOpacity delayPressOut={370} onPressOut={() => this.setState({ isModalVisible: true, bus: '도원네거리' })}>
                    <Text style={styles.txt}>도원네거리</Text>
                  </TouchableOpacity>
                  <TouchableOpacity delayPressOut={370} onPressOut={() => this.setState({ isModalVisible: true, bus: '노전초등학교' })}>
                    <Text style={styles.txt}>노전초등학교</Text>
                  </TouchableOpacity>
                  <TouchableOpacity delayPressOut={370} onPressOut={() => this.setState({ isModalVisible: true, bus: '고려자동차학원네거리(진천남네거리)' })}>
                    <Text style={styles.txt}>고려자동차학원네거리(진천남네거리)</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>

              <Modal isVisible={this.state.isModalVisible}
                statusBarTranslucent={true}
                onBackdropPress={() => this.cancel()}
                hasBackdrop={true}
                backdropColor="rgba(0,0,0,0.79)"
                transparent={true}>
                <View style={styles.ModalBackground}>
                  <Text style={styles.select}>「 {this.state.bus} 」</Text>
                  <Text style={styles.PopupText}>요일을 선택하세요.</Text>
                  <View style={styles.DayContainer}>
                    <TouchableOpacity style={[styles.DOWButton, { backgroundColor: this.state.m }, { shadowColor: this.state.mn }]} onPress={() => this.monday()}>
                      <Text style={[styles.DayofWeek, { color: this.state.monColor }]}>월</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.DOWButton, { backgroundColor: this.state.tu }, { shadowColor: this.state.tun }]} onPress={() => this.tuesday()}>
                      <Text style={[styles.DayofWeek, { color: this.state.tuesColor }]}>화</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.DOWButton, { backgroundColor: this.state.w }, { shadowColor: this.state.wn }]} onPress={() => this.wednesday()}>
                      <Text style={[styles.DayofWeek, { color: this.state.wednesColor }]}>수</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.DOWButton, { backgroundColor: this.state.th }, { shadowColor: this.state.thn }]} onPress={() => this.thursday()}>
                      <Text style={[styles.DayofWeek, { color: this.state.thursColor }]}>목</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.DOWButton, { backgroundColor: this.state.f }, { shadowColor: this.state.fn }]} onPress={() => this.friday()}>
                      <Text style={[styles.DayofWeek, { color: this.state.friColor }]}>금</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.Bottom}>
                    <TouchableOpacity style={styles.Button} onPress={() => this.cancel()}>
                      <Text style={styles.button}>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() => this.save()}>
                      <Text style={styles.button}>저장</Text>
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
  txt: {
    padding: '7%',
    fontSize: 25,
    fontWeight: "600",
    color: '#00203E',
  },
  select: {
    marginTop: '3%',
    textAlign: "center",
    fontWeight: "600",
    color: '#D04B90',
    ...Platform.select({
      ios: {
        fontSize: 17,
      },
      android: {
        fontSize: 15,
      },
    }),
  },
  PopupText: {
    textAlign: "center",
    marginTop: '3%',
    marginBottom: '5%',
    fontSize: 25,
    fontWeight: "bold",
    color: '#00498C',
  },
  DOWButton: {
    backgroundColor: '#00498C',
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowOpacity: 0.9,
        shadowRadius: 6,
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
      android: {
        elevation: 7,
      },
    }),
  },
  DayContainer: {
    justifyContent: 'space-around',
    flexDirection: "row",
  },
  Bottom: {
    justifyContent: 'space-around',
    flexDirection: "row",
    marginTop: '5%',
    marginHorizontal: '10%'
  },
  ModalBackground: {
    backgroundColor: "white",
    width: '100%',
    height: '39%',
    borderRadius: 30,
    borderWidth: 3.7,
    borderColor: '#00498C'
  },
  DayofWeek: {
    justifyContent: 'space-around',
    fontSize: 27,
    fontWeight: 'bold',
  },
  Button: {
    justifyContent: 'space-evenly',
    marginTop: '3%',
    width: '37%',
    height: '50%',
    borderRadius: 15,
    backgroundColor: '#b8ddeb',
  },
  button: {
    textAlign: "center",
    fontSize: 23,
    color: '#00498C',
    fontWeight: "bold",
  },
});