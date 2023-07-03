import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View, ScrollView, Text, StyleSheet, TouchableOpacity, Keyboard,
  Image, Alert, TextInput, SafeAreaView, StatusBar, ImageBackground
} from "react-native";
import Modal from "react-native-modal";
import { Platform } from 'react-native'
import ImageModal from 'react-native-image-modal';
import { Dimensions } from 'react-native';

let background = require('../img/bg1.png');
let home_icon = require('../img/home.png');
let setting_icon = require('../img/set.png');
let search = require('../img/search.png');
let map = require('../img/map.png');
let DCU_map = require('../img/DCU_map.jpg');

let bus_array = [];
let week_array = [];

StatusBar.setBarStyle("light-content");
StatusBar.setHidden(false);

export default class GoScreen extends React.Component {
  state = {
    isModalVisible: false, modalVisible: false, mon: 'white', tue: 'white', wed: 'white', thu: 'white', fri: 'white',
    m: '#00498C', mn: 'white', tu: '#00498C', tun: 'white', w: '#00498C', wn: 'white', th: '#00498C', thn: 'white', f: '#00498C', fn: 'white',
    monColor: 'white', tuesColor: 'white', wednesColor: 'white', thursColor: 'white', friColor: 'white',
    bus: '', week: '', mond: '', tues: '', wednes: '', thurs: '', frid: '', textInputValue: null,
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

  cancel_map = () => {
    this.setState({
      modalVisible: false
    })
  }

  save = () => {
    this.setState({
      isModalVisible: false, monColor: 'white', tuesColor: 'white', wednesColor: 'white', thursColor: 'white', friColor: 'white',
      m: '#00498C', mn: 'white', tu: '#00498C', tun: 'white', w: '#00498C', wn: 'white', th: '#00498C', thn: 'white', f: '#00498C', fn: 'white',
      mon: 'white', tue: 'white', wed: 'white', thu: 'white', fri: 'white', mond: '', tues: '', wednes: '', thurs: '', frid: '',
      bus: '', week: ''
    })
    if (this.state.week == '') {
      Alert.alert('경 고 ❗', '요일을 선택하세요.');
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

  building = text => {
    this.setState({ place: text });
  };

  // this.state.place.toUpperCase()

  dismissKeyboard() {
    Keyboard.dismiss()
  }

  busStop = (place) => {

    if (this.state.place == "A1" || this.state.place == "B1" || this.state.place == "B2" || this.state.place == "B3" || this.state.place == "B4" || this.state.place == "B5" || this.state.place == "B6" || this.state.place == "B7" || this.state.place == "D16" || this.state.place == "D17" || this.state.place == "D18" || this.state.place == "D19" || this.state.place == "E1" || this.state.place == "E2" || this.state.place == "E3" || this.state.place == "E4" || this.state.place == "E5" || this.state.place == "E6" || this.state.place == "E7" || this.state.place == "E8" || this.state.place == "E9" || this.state.place == "E10" || this.state.place == "기숙사") {
      place = '취창업관(B1)'
      Alert.alert(
        "ଘ(* ˊᗜˋ * o🏫o",
        "\n" + "'" + place + "'에 내리는 것을 권장합니다."
      );
      this.dismissKeyboard();
    }
    else if (this.state.place == "A4" || this.state.place == "A5" || this.state.place == "B8" || this.state.place == "C1" || this.state.place == "C2" || this.state.place == "C3" || this.state.place == "C4" || this.state.place == "C5" || this.state.place == "C6" || this.state.place == "C7" || this.state.place == "C8" || this.state.place == "C9") {
      place = '성예로니모관(C7)'
      Alert.alert(
        "ଘ(* ˊᗜˋ * o🏫o",
        "\n" + "'" + place + "'에 내리는 것을 권장합니다."
      );
      this.dismissKeyboard();
    }
    else if (this.state.place == "A6" || this.state.place == "A7" || this.state.place == "A13" || this.state.place == "C10" || this.state.place == "C11" || this.state.place == "C12" || this.state.place == "C13") {
      place = '성마태오관(C13)'
      Alert.alert(
        "ଘ(* ˊᗜˋ * o🏫o",
        "\n" + "'" + place + "'에 내리는 것을 권장합니다."
      );
      this.dismissKeyboard();
    }
    else if (this.state.place == "A9" || this.state.place == "A10" || this.state.place == "A11" || this.state.place == "A12" || this.state.place == "D1" || this.state.place == "D2" || this.state.place == "D3" || this.state.place == "D4" || this.state.place == "D5" || this.state.place == "D6" || this.state.place == "D7" || this.state.place == "D10") {
      place = '성이시도르관(D6)'
      Alert.alert(
        "ଘ(* ˊᗜˋ * o🏫o",
        "\n" + "'" + place + "'에 내리는 것을 권장합니다."
      );
      this.dismissKeyboard();
    }
    else if (this.state.place == "A2" || this.state.place == "A3" || this.state.place == "A8" || this.state.place == "D8" || this.state.place == "D9" || this.state.place == "D11" || this.state.place == "D12" || this.state.place == "D13" || this.state.place == "D14" || this.state.place == "D15" || this.state.place == "도서관") {
      place = '교양관(A2)'
      Alert.alert(
        "ଘ(* ˊᗜˋ * o🏫o",
        "\n" + "'" + place + "'에 내리는 것을 권장합니다."
      );
      this.dismissKeyboard();
    }
    else {
      Alert.alert(
        "🏫", "올바른 건물번호를 입력하세요!" + "\n" + "ex) D2"
      );
    }
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
                <Text style={styles.header_text}>등교</Text>
                <Image
                  style={styles.header_set}
                  source={setting_icon}>
                </Image>
              </View>
              <View style={styles.searchBarStyle}>
                <TextInput
                  style={styles.input}
                  placeholder=" 건물번호를 입력하세요"
                  placeholderTextColor="white"
                  autoCapitalize="characters"
                  onChangeText={this.building} />
                <TouchableOpacity
                  style={styles.searchButton}
                  onPress={() => this.busStop(this.state.place)}>
                  <Image
                    style={styles.search}
                    source={search}>
                  </Image>
                </TouchableOpacity>
              </View>

              <ScrollView>
                <TouchableOpacity delayPressOut={370} onPressOut={() => this.setState({ isModalVisible: true, bus: '테스트(광장)' })}>
                  <Text style={styles.txt}>테스트(광장)</Text>
                </TouchableOpacity>
                <TouchableOpacity delayPressOut={370} onPressOut={() => this.setState({ isModalVisible: true, bus: '성예로니모관(C7)' })}>
                  <Text style={styles.txt}>성예로니모관(C7)</Text>
                </TouchableOpacity>
                <TouchableOpacity delayPressOut={370} onPressOut={() => this.setState({ isModalVisible: true, bus: '성마태오관(C13)' })}>
                  <Text style={styles.txt}>성마태오관(C13)</Text>
                </TouchableOpacity>
                <TouchableOpacity delayPressOut={370} onPressOut={() => this.setState({ isModalVisible: true, bus: '성이시도르관(D6)' })}>
                  <Text style={styles.txt}>성이시도르관(D6)</Text>
                </TouchableOpacity>
                <TouchableOpacity delayPressOut={370} onPressOut={() => this.setState({ isModalVisible: true, bus: '교양관(A2)' })}>
                  <Text style={styles.txt}>교양관(A2)</Text>
                </TouchableOpacity>
              </ScrollView>

              <View style={[styles.map]}>
                <TouchableOpacity delayPressOut={370} onPressOut={() => this.setState({ modalVisible: true })}>
                  <Image
                    style={[styles.map_image]}
                    source={map}>
                  </Image>
                </TouchableOpacity>
              </View>
              <Modal isVisible={this.state.modalVisible}
                statusBarTranslucent={true}
                onBackdropPress={() => this.cancel_map()}
                hasBackdrop={true}
                backdropColor="rgba(0,0,0,0.99)"
                transparent={true}>
                <View style={[styles.map_modalBackground]}>
                  <Text style={styles.modalText}>터치하여 이미지 크게보기</Text>
                  <View style={[styles.map_modal]}>
                    <ImageModal
                      resizeMode="contain"
                      overlayBackgroundColor="rgba(0,0,0,0.9)"
                      style={[styles.DCU_map]}
                      source={DCU_map}
                    />
                  </View>
                </View>
              </Modal>


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
  map: {
    marginTop: '5%',
    marginLeft: '7%',
    marginBottom: '5%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  map_image: {
    width: 100,
    height: 100,
  },
  map_modalBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 13,
    borderWidth: 2.3,
    borderColor: "rgba(0,73,140,0.9)",
    backgroundColor: "#E2E2E2",
  },
  modalText: {
    textAlign: "center",
    fontWeight: "bold",
    color: '#00498C',
    ...Platform.select({
      ios: {
        marginTop: '3%',
        fontSize: 30,
      },
      android: {
        marginTop: '1.5%',
        fontSize: 27,
      },
    }),
  },
  map_modal: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        padding: '1.5%',
      },
      android: {
        padding: 0
      },
    }),
  },
  DCU_map: {
    width: Dimensions.get('screen').width * 0.87,
    height: Dimensions.get('window').height * 0.336,
    borderRadius: 10,
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
  input: {
    backgroundColor: '#00498C',
    flexDirection: 'row',
    marginLeft: '3%',
    padding: 10,
    flex: 1,
    color: 'white',
    borderRadius: 25,
    borderWidth: 1.7,
    borderColor: '#00203E',
  },
  searchButton: {
    width: "15%",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: "2%",
  },
  search: {
    width: 37,
    height: 37,
  },
  searchBarStyle: {
    flexDirection: 'row',
    padding: '3%',
    marginTop: '2%',
    color: '#00498C',
  }
});