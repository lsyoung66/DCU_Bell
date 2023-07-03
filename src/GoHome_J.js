import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

class GoHome_J extends React.Component {
    constructor(spot) {
        super(spot);
        this.state = {
            menu: 0,
            languageData: ["학교", "경주고속버스터미널", "경주역", "황성공원 시계탑"],
        };
    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: '2%' }}></View>
                <View style={styles.titlebg}>
                    <Text style={styles.title}>학교 : 교양관(A2)에서 17:30 에 출발</Text>
                </View>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titlebg: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: '3%',
        backgroundColor: '#D0DFF2',
    },
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
    title: {
        flex: 1,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20,
        color: '#00498C',
        paddingTop: '3%',
        paddingBottom: '6%',
        width: Dimensions.get('screen').width,
    },
});

export default GoHome_J;