import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

class Sawol extends React.Component {

    render() {
        return (
            <View>
                <View style={{ marginBottom: '2%' }}></View>
                <View style={styles.titlebg}>
                    <Text style={styles.notice}>등교 : 사월역 3번 출구에서 출발</Text>
                </View>
                <ScrollView>
                    <View>
                        <Text style={styles.title}>등교</Text>
                        <Text></Text>
                        <Text style={styles.time}>08:05  08:10  08:16  08:20
                            {`\n`}{`\n`}08:25  08:40  09:15  09:20
                            {`\n`}{`\n`}09:35  09:50  10:00
                        </Text>
                    </View>
                    <View style={{paddingBottom: '35%'}}>
                        <Text style={[styles.title, {marginTop: '-3%'}]}>하교</Text>
                        <Text></Text>
                        <Text style={styles.time}>16:10  16:25  16:40  16:55
                            {`\n`}{`\n`}17:10  17:30
                            {`\n`}{`\n`}(안심 → 사월)  18:40  19:20
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
        height: Dimensions.get('screen').height * 0.27,
    }
});

export default Sawol;