import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

class Ansim extends React.Component {

    render() {
        return (
            <View>
                <View style={{ marginBottom: '2%' }}></View>
                <View style={styles.titlebg}>
                    <Text style={styles.notice}>등교 : 안심역 3번 출구에서 출발</Text>
                </View>
                <ScrollView>
                    <View>
                        <Text style={styles.title}>등교</Text>
                        <Text></Text>
                        <Text style={styles.time}>08:10  08:15  08:20  08:25
                            {`\n`}{`\n`}08:30  08:35  08:40  08:50
                            {`\n`}{`\n`}09:00  09:12  09:25  09:35
                            {`\n`}{`\n`}09:45  09:55  10:00  10:05
                            {`\n`}{`\n`}10:10  10:15  10 20  10:25
                            {`\n`}{`\n`}12:20
                        </Text>
                        <Text style={[styles.title, { paddingTop: '-3%' }]}>하교</Text>
                        <Text></Text>
                        <Text style={styles.time}>16:00  16:15  16:30  16:40
                            {`\n`}{`\n`}16:50  17:00  17:10  17:20
                            {`\n`}{`\n`}17:30
                            {`\n`}{`\n`}18:40  19:20
                        </Text>
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
    notice: {
        flex: 1,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20,
        color: '#00498C',
        paddingTop: '3%',
        paddingBottom: '6%',
        width: Dimensions.get('screen').width,
    },
    title: {
        paddingTop: '7%',
        paddingLeft: '7%',
        fontWeight: "bold",
        fontSize: 29,
        color: '#00498C',
        padding: '3%'
    },
    time: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#00203E',
        paddingLeft: '7%',
        width: Dimensions.get('screen').width,
        height: 370,
    }
});

export default Ansim;