import React, { Component} from 'react';
import { Alert, StyleSheet, View, Image, Text, ImageBackground, StatusBar, SafeAreaView, TouchableOpacity, Vibration } from 'react-native';
import * as Location from 'expo-location';
import { Audio } from 'expo-av';
import AsyncStorage from "@react-native-async-storage/async-storage";

let background = require('../img/bg.png');
let setting_icon = require('../img/set_main.png');
let university = require('../img/university.png');
let house = require('../img/house.png');
let list = require('../img/list.png');
let schedule = require('../img/schedule.png');
let bus_array = [];

StatusBar.setBarStyle("light-content");
StatusBar.setHidden(false);

export default class MainScreen extends Component {
  state = {lat:'', long:'', B1_lat:'', B1_long:'', C7_lat:'', C7_long:'', C13_lat:'', C13_long:'', 
  D6_lat:'', D6_long:'', A2_lat:'', A2_long:'',  currentSound:'', test_lat:'', test_long:'',
  test_Minlat:'', test_Maxlat:'', test_Minlong:'', test_Maxlong:''};

  goSetScreen() {
    this.props.navigation.navigate('SetScreen');
  }
  go() {
    this.props.navigation.navigate('GoScreen');
  }
  come() {
    this.props.navigation.navigate('ComeScreen');
  }
  goListScreen() {
    this.props.navigation.navigate('ListScreen');
  }
  goScheduleScreen() {
    this.props.navigation.navigate('ScheduleScreen');
  }
  geoLocation = async() => {
    //try{
        const response = await Location.requestForegroundPermissionsAsync();
        const {coords : {latitude, longitude}}  = await Location.getCurrentPositionAsync(
          {
              enableHighAccuracy: true,
              
          },
      );
        this.setState({lat: latitude});
        this.setState({long: longitude});
    }// catch(error){
        //Alert.alert("Can't find you.", "So sad");
    //}        
 // }
  playSound = async() => {
    if(this.state.currentSound == '1'){
      const { sound } = await Audio.Sound.createAsync(
        require('../sound/test.mp3')
     );
      await sound.playAsync();
    }
    else if(this.state.currentSound == '2'){
      const { sound } = await Audio.Sound.createAsync(
        require('../sound/test3.mp3')
     );
      await sound.playAsync();
    }
    else if(this.state.currentSound == '3'){
      const ONE_SECOND = 1000;
      Vibration.vibrate(ONE_SECOND, true);
     }

  }
  saveData1(){ //데이터 저장하기 키 = bus, 값 = week
    AsyncStorage.setItem('soundState', JSON.stringify({
      'soundNumber':'1'}), () => {
      });
  }

  getData5 = () => {
      AsyncStorage.getItem('soundState', (err, result) => {
        const soundSt = JSON.parse(result);
        if(!soundSt){
          this.saveData1();
        }
        else{
          this.setState({currentSound:soundSt.soundNumber});   
        }
      });
  }
  
  componentDidMount(){
      this.interval = setInterval(this.geoLocation, 3000);
      this.getGPS();
  }

  getGPS(){
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          bus_array[i] = store[i][0];

          for(let i=1; i<10; i++){
            if(bus_array[i]=='취창업관(B1)'){this.setState({B1_lat:35.908652, B1_long:128.810740});} //정문(B1)
            else if(bus_array[i]=='성예로니모관(C7)'){this.setState({C7_lat:35.911074, C7_long:128.809198});} //B1(C7)
            else if(bus_array[i]=='성마태오관(C13)'){this.setState({C13_lat:35.912974, C13_long:128.809579});} //C7(C13)
            else if(bus_array[i]=='성이시도르관(D6)'){this.setState({D6_lat:35.914638, D6_long:128.807064});} //C13(D2)
            else if(bus_array[i]=='교양관(A2)'){this.setState({A2_lat:35.912969, A2_long:128.804859});} //D6(A2)
            else if(bus_array[i]=='테스트(광장)'){this.setState({ 
              test_Minlat: 35.9106645, test_Maxlat: 35.9110645, // min max latitude
               test_Minlong: 128.8103645, test_Maxlong : 128.8107645});} // min max longitude
          }
        });
      });
    });
}

  render() {
    this.getData5()
    if((this.state.lat > (this.state.test_Minlat) && this.state.lat < (this.state.test_Maxlat)) 
    && (this.state.long > (this.state.test_Minlong) && this.state.long < (this.state.test_Maxlong))
    && !this.interval2){
      this.interval2 = setInterval(this.playSound, 2000);
      Alert.alert(
        "",
        "목적지에 도착했습니다.",
        [
          {
            text: "끄기", onPress: () => clearInterval(this.interval2)
          }
        ]
      );
      clearInterval(this.interval)
    }
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <ImageBackground style={styles.background} source={background}>
            <>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => this.goSetScreen()}>
                <Image
                  style={styles.header_set}
                  source={setting_icon}>
                </Image>
                </TouchableOpacity>
              </View>
              <View style={styles.content} >
                <View style={styles.row}>
                  <TouchableOpacity onPress={() => this.go()}>
                    <Image
                      style={styles.img}
                      source={university}>
                    </Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.come()}>
                    <Image
                      style={styles.img}
                      source={house}>
                    </Image>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity onPress={() => this.goListScreen()}>
                    <Image
                      style={styles.img}
                      source={list}>
                    </Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.goScheduleScreen()}>
                    <Image
                      style={styles.img}
                      source={schedule}>
                    </Image>
                  </TouchableOpacity>
                </View>
              </View>
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
    backgroundColor: '#00498C',
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
    height: '3%',
    marginTop: '5%',
    marginBottom: '3%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header_set: {
    marginLeft: '84%',
    width: 35,
    height: 35,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: '10%',
    marginTop: '23%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: '13%'
  },
  img: {
    width: 179,
    height: 179,
  },
})