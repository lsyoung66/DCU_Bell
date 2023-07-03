import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

class Hayang extends React.Component {
    constructor(spot) {
        super(spot);
        this.state = {
            menu: 0,
            languageData: ["캠퍼스 정문", "취창업관(B1)", "성예로니모관(C7)", "성마태오관(C13)", "성이시도르관(D6)", "교양관(A2)"],
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
                <View>
                    <Text style={styles.title}>첫 정류장 출발 시간</Text>
                    <Text></Text>
                    <Text style={styles.time}>08:25  08:35  08:40  08:45
                        {`\n`}{`\n`}08:55  09:00  09:30  09:40
                        {`\n`}{`\n`}09:50  10:00   10:10   10:20
                        {`\n`}{`\n`}10:30   10:40   10:50  11:00
                    </Text>

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
    title: {
        paddingLeft: '7%',
        backgroundColor: '#D0DFF2',
        fontWeight: "bold",
        fontSize: 27,
        color: '#00498C',
        marginTop: '-10%',
        padding: '3%'
    },
    time: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#00203E',
        paddingTop: '3%',
        paddingBottom: '15%',
        paddingLeft: '7%',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.57,
    }
});

export default Hayang;