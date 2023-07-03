import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

class GoSchool_J extends React.Component {
    constructor(spot) {
        super(spot);
        this.state = {
            menu: 0,
            languageData: ["황성공원 시계탑(07:00)", "경주역 맞은편 화랑약국(07:10)", "경주고속버스터미널 옆 파리바게뜨(07:20)", "학교"],
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.list}>
                    {this.state.languageData.map((spot, index) => {
                        return (
                            <View key={index}>
                                <Text style={styles.txt}>{spot}</Text>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: '7%',
        alignItems: 'flex-start'
    },
    txt: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#00203E',
        marginBottom: '15%',
    },
  });

export default GoSchool_J;