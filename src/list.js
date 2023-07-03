import React, { Component } from 'react';
import {
  RefreshControl, StyleSheet, Image, StatusBar, ScrollView, Alert,
  TouchableOpacity, Text, View, SafeAreaView, ImageBackground, Dimensions
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

let background = require('../img/bg1.png');
let home_icon = require('../img/home.png');
let setting_icon = require('../img/set.png');
let empty = require('../img/notice.png');

StatusBar.setBarStyle("light-content");
StatusBar.setHidden(false);

let bus_array = [];
let week_array = [];

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default class ListScreen extends Component {
  state = {
    soundData: '', week1: '', week2: '', week3: '', week4: '',
    week5: '', week6: '', week7: '', week8: '', week9: '', week10: ''
  }

  componentDidMount() {
    try {
      AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
          stores.map((result, i, store) => {
            const user = JSON.parse(store[i][1]);
            bus_array[i] = store[i][0];
            week_array[i] = (user.week);

            this.setState({
              soundData: week_array[0], week1: week_array[1], week2: week_array[2], week3: week_array[3],
              week4: week_array[4], week5: week_array[5], week6: week_array[6], week7: week_array[7],
              week8: week_array[8], week9: week_array[9], week10: week_array[10]
            });

          });
        });
      });
    }
    catch (err) { exit(); }
  }

  goHome() {
    this.props.navigation.navigate('MainScreen');
  }

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  onRefresh = () => {
    this.setState({ refreshing: true });
    wait(2000).then(() => {
      this.setState({ refreshing: false });
    });
  }

  onRefresh_remove = () => {
    this.setState({ refreshing: true });
 
    wait(500).then(() => {
      this.setState({ refreshing: false });

    });
  }

  notice_1 = () =>
    Alert.alert(
      "경 고❗",
      "등록 목록을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel"
        },
        {
          text: "삭제", onPress: () => {
            AsyncStorage.removeItem(bus_array[1]);
            AsyncStorage.removeItem(week_array[1][1]);
            ++i;
          }
        }
      ]
    );

  notice_2 = () =>
    Alert.alert(
      "경 고❗",
      "등록 목록을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel"
        },
        {
          text: "삭제", onPress: () => {
            this.onRefresh_remove();
            AsyncStorage.removeItem(bus_array[2]);
            this.componentDidMount();
            for (let i = 2; i < 10; i++) {
              bus_array[i] = bus_array[i + 1];
              week_array[i] = week_array[i + 1];
              bus_array[10] = '';
              week_array[10] = '';
            }
          }
        }
      ]
    );

  notice_3 = () =>
    Alert.alert(
      "경 고❗",
      "등록 목록을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel"
        },
        {
          text: "삭제", onPress: () => {
            this.onRefresh_remove();
            AsyncStorage.removeItem(bus_array[3]);
            this.componentDidMount();
            for (let i = 3; i < 10; i++) {
              bus_array[i] = bus_array[i + 1];
              week_array[i] = week_array[i + 1];
              bus_array[10] = '';
              week_array[10] = '';
            }
          }
        }
      ]
    );

  notice_4 = () =>
    Alert.alert(
      "경 고❗",
      "등록 목록을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel"
        },
        {
          text: "삭제", onPress: () => {
            this.onRefresh_remove();
            AsyncStorage.removeItem(bus_array[4]);
            this.componentDidMount();
            for (let i = 4; i < 10; i++) {
              bus_array[i] = bus_array[i + 1];
              week_array[i] = week_array[i + 1];
              bus_array[10] = '';
              week_array[10] = '';
            }
          }
        }
      ]
    );

  notice_5 = () =>
    Alert.alert(
      "경 고❗",
      "등록 목록을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel"
        },
        {
          text: "삭제", onPress: () => {
            this.onRefresh_remove();
            AsyncStorage.removeItem(bus_array[5]);
            this.componentDidMount();
            for (let i = 5; i < 10; i++) {
              bus_array[i] = bus_array[i + 1];
              week_array[i] = week_array[i + 1];
              bus_array[10] = '';
              week_array[10] = '';
            }
          }
        }
      ]
    );

  notice_6 = () =>
    Alert.alert(
      "경 고❗",
      "등록 목록을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel"
        },
        {
          text: "삭제", onPress: () => {
            this.onRefresh_remove();
            AsyncStorage.removeItem(bus_array[6]);
            this.componentDidMount();
            for (let i = 6; i < 10; i++) {
              bus_array[i] = bus_array[i + 1];
              week_array[i] = week_array[i + 1];
              bus_array[10] = '';
              week_array[10] = '';
            }
          }
        }
      ]
    );

  notice_7 = () =>
    Alert.alert(
      "경 고❗",
      "등록 목록을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel"
        },
        {
          text: "삭제", onPress: () => {
            this.onRefresh_remove();
            AsyncStorage.removeItem(bus_array[7]);
            this.componentDidMount();
            for (let i = 7; i < 10; i++) {
              bus_array[i] = bus_array[i + 1];
              week_array[i] = week_array[i + 1];
              bus_array[10] = '';
              week_array[10] = '';
            }
          }
        }
      ]
    );

  notice_8 = () =>
    Alert.alert(
      "경 고❗",
      "등록 목록을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel"
        },
        {
          text: "삭제", onPress: () => {
            this.onRefresh_remove();
            AsyncStorage.removeItem(bus_array[8]);
            this.componentDidMount();
            for (let i = 8; i < 10; i++) {
              bus_array[i] = bus_array[i + 1];
              week_array[i] = week_array[i + 1];
              bus_array[10] = '';
              week_array[10] = '';
            }
          }
        }
      ]
    );

  notice_9 = () =>
    Alert.alert(
      "경 고❗",
      "등록 목록을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel"
        },
        {
          text: "삭제", onPress: () => {
            this.onRefresh_remove();
            AsyncStorage.removeItem(bus_array[9]);
            this.componentDidMount();
            for (let i = 9; i < 10; i++) {
              bus_array[i] = bus_array[i + 1];
              week_array[i] = week_array[i + 1];
              bus_array[10] = '';
              week_array[10] = '';
            }
          }
        }
      ]
    );

  notice_10 = () =>
    Alert.alert(
      "경 고❗",
      "등록 목록을 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel"
        },
        {
          text: "삭제", onPress: () => {
            this.onRefresh_remove();
            AsyncStorage.removeItem(bus_array[10]);
            this.componentDidMount();
            bus_array[10] = '';
            week_array[10] = '';
          }
        }
      ]
    );

  empty_screen() {
    if (this.state.week1) { return null; }
    else {
      return (
        <View style={[styles.empty_image]}>
          <TouchableOpacity onPress={() => this.goHome()}>
            <Image
              source={empty}>
            </Image>
          </TouchableOpacity>
        </View>
      )
    }
  }

  Screendata() {
    return (
      <View>
        <TouchableOpacity onPress={this.notice_1}>
          <Text style={styles.txt}>{bus_array[1]}</Text>
          <Text></Text>
          <Text style={styles.week_text}>{this.state.week1}</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>

        <Text></Text>
        <TouchableOpacity onPress={this.notice_2}>
          <Text style={styles.txt}>{bus_array[2]}</Text>
          <Text></Text>
          <Text style={styles.week_text}>{this.state.week2}</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>

        <Text></Text>
        <TouchableOpacity onPress={this.notice_3}>
          <Text style={styles.txt}>{bus_array[3]}</Text>
          <Text></Text>
          <Text style={styles.week_text}>{this.state.week3}</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>

        <Text></Text>
        <TouchableOpacity onPress={this.notice_4}>
          <Text style={styles.txt}>{bus_array[4]}</Text>
          <Text></Text>
          <Text style={styles.week_text}>{this.state.week4}</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>

        <Text></Text>
        <TouchableOpacity onPress={this.notice_5}>
          <Text style={styles.txt}>{bus_array[5]}</Text>
          <Text></Text>
          <Text style={styles.week_text}>{this.state.week5}</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>

        <Text></Text>
        <TouchableOpacity onPress={this.notice_6}>
          <Text style={styles.txt}>{bus_array[6]}</Text>
          <Text></Text>
          <Text style={styles.week_text}>{this.state.week6}</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>

        <Text></Text>
        <TouchableOpacity onPress={this.notice_7}>
          <Text style={styles.txt}>{bus_array[7]}</Text>
          <Text></Text>
          <Text style={styles.week_text}>{this.state.week7}</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>

        <Text></Text>
        <TouchableOpacity onPress={this.notice_8}>
          <Text style={styles.txt}>{bus_array[8]}</Text>
          <Text></Text>
          <Text style={styles.week_text}>{this.state.week8}</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>

        <Text></Text>
        <TouchableOpacity onPress={this.notice_9}>
          <Text style={styles.txt}>{bus_array[9]}</Text>
          <Text></Text>
          <Text style={styles.week_text}>{this.state.week9}</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>

        <Text></Text>
        <TouchableOpacity onPress={this.notice_10}>
          <Text style={styles.txt}>{bus_array[10]}</Text>
          <Text></Text>
          <Text style={styles.week_text}>{this.state.week10}</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
    )
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
                <Text style={styles.header_text}>등록 목록</Text>
                <Image
                  style={styles.header_set}
                  source={setting_icon}>
                </Image>
              </View>
              <Text>{this.empty_screen()}</Text>
              <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                  />
                }>
                <View style={{ marginTop: '7%', marginLeft: '7%' }}>
                  {this.Screendata()}
                </View>
              </ScrollView>
            </>
          </ImageBackground>
        </View>
      </SafeAreaView >
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
  text: {
    fontSize: 20,
    color: 'white',
  },
  txt: {
    fontWeight: "600",
    color: '#00203E',
    fontSize: 27,
  },
  week_text: {
    color: '#00498C',
    fontSize: 17,
    fontWeight: 'bold'
  },
  empty_image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.77,
  },
})