import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

class GoSchool_U extends React.Component {
    constructor(spot) {
        super(spot);
        this.state = {
            menu: 0,
            languageData: ["울산시외버스터미널 택시승강장 맞은편(06:40)", "공업탑로터리 대흥교회 횡단보도 앞(06:50)", "신복로터리 신복환승센터(07:00)", "학교"],
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

export default GoSchool_U;