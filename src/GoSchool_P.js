import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

class GoSchool_P extends React.Component {
    constructor(spot) {
        super(spot);
        this.state = {
            menu: 0,
            languageData: ["(구)포항역 앞(06:55)", "포항시외버스터미널 홈플러스(07:05)", "안강소방서 맞은편(07:25)", "안강 풍산금속 맞은편 승강장(07:28)", "학교"],
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

export default GoSchool_P;