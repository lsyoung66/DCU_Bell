import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
let imageR1 = require('../img/an.png');
let imageR2 = require('../img/sa.png');

export default class BList extends React.Component{

   
      render() {
        return(
          <View style = {styles.container}>
            <View style={styles.container}>

            
            <Text style= {styles.title}> 안심역 (3번출구) </Text>
                
            <Image
                style={styles.img}
                source={imageR1}>
                </Image>      
      </View>

      <View style={styles.container}>

            
            <Text style= {styles.title}> 사월역 (3번출구) </Text>
              
            <Image
                style={styles.img}
                source={imageR2}>
                </Image>  
      </View>
        
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
      container: {
        flex:1
      },
      img: {
        width: '100%', height: '100%',
        
      },
      font: {
        fontSize: 16,
        marginTop: 4 
      },
      title: {
        padding: 30,
        paddingLeft: 20,
        backgroundColor: '#f0f0f0',
        fontWeight: "bold",
        fontSize: 20,
      }
    })