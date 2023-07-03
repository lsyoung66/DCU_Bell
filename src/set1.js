import React, {Component} from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RadioButton } from 'react-native-paper';

export default class Set1 extends Component{
  state = {
    checked: 'first'
  };
  
  saveData1(){ //데이터 저장하기 키 = bus, 값 = week
    AsyncStorage.setItem('soundState', JSON.stringify({
      'soundNumber':'1'}), () => {
        this.setState( {checked: 'first'})
        this.getData()
      });
  }
  saveData2(){ //데이터 저장하기 키 = bus, 값 = week
    AsyncStorage.setItem('soundState', JSON.stringify({
      'soundNumber':'2'}), () => {
        this.setState( {checked: 'second'})
        this.getData()
      });
  }

  saveData3(){ //데이터 저장하기 키 = bus, 값 = week
    AsyncStorage.setItem('soundState', JSON.stringify({
      'soundNumber':'3'}), () => {
        this.setState( {checked: 'third'})
        this.getData()
      });
  }
  
  getData = () => {
    AsyncStorage.getItem('soundState', (err, result) => {
      const soundSt = JSON.parse(result); 
      this.setState({checked:soundSt.soundNumber});
    });
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    const { checked } = this.state;
    
    return (
      <View style= {styles.container}>
        <Text style= {styles.title}>소리설정</Text>
        <View style= {styles.RdBtn}>
        <Text style= {styles.font}>소리1</Text>
        <RadioButton.Android
        value="1"
        status={checked === '1' ? 'checked' : 'unchecked'}
        onPress={()=>this.saveData1()}
        color="#00498C"
        />
      </View>
      <View style= {styles.RdBtn}>
      <Text style= {styles.font}>소리2</Text>
        <RadioButton.Android
        value="2"
        status={checked === '2' ? 'checked' : 'unchecked'}
        onPress={()=>this.saveData2()}
        color="#00498C"
        />
      </View>
      <View style= {styles.RdBtn}>
      <Text style= {styles.font}>진동</Text>
        <RadioButton.Android
        value="3"
        status={checked === '3' ? 'checked' : 'unchecked'}
        onPress={()=>this.saveData3()}
        color="#00498C"
        />
      </View>
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
  },
  RdBtn: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
  },
  title: {
    padding: 30,
    paddingLeft: 20,
    backgroundColor: '#f0f0f0',
    fontWeight: "bold",
    fontSize: 23,
  },
  font: {
    fontSize:22
  }
});