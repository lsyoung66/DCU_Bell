import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

const SECTIONS = [
    {
        title: '구미역',
        content: ["학교\n\n", "신평육교\n\n", "오성예식장\n\n", "형곡네거리\n\n", "구미역"],
    },
    {
        title: '사곡역',
        content: ["학교\n\n", "왜관역입구 신협\n\n", "약목역\n\n", "북삼 원조24시굴뚝배기\n\n", "오태동 수연합정형외과\n\n", "상모동 빅마트\n\n", "사곡역\n\n\n\n\n"],
    },
];
class GoHome_G extends React.Component {
    state = {
        activeSections: [],
    };

    _renderHeader(section, index, isActive, sections) {
        return (
            <View style={[styles.center, { marginBottom: '3%' }]}>
                <Animatable.View
                    duration={300}
                    transition="backgroundColor"
                    style={[styles.button, { backgroundColor: (isActive ? '#00498C' : 'rgba(255, 255, 255, 0.8)') }]}>
                    <Text style={[styles.title, { color: (isActive ? 'white' : '#00498C') }]}>{section.title}</Text>
                </Animatable.View>
            </View>
        );
    }

    _renderContent(section, i, isActive, sections) {
        return (
            <Animatable.View
                duration={300}
                transition="backgroundColor"
                style={{ backgroundColor: (isActive ? 'rgba(227, 239, 255, 0.3)' : 'rgba(0, 73, 140, 0.1)') }}>
                <View style={{ paddingLeft: '3.5%' }}>
                    <Animatable.Text
                        style={styles.txt}
                        duration={300}
                        easing="ease-out"
                        animation={isActive ? 'zoomIn' : 'zoomOut'}>
                        {section.content}
                    </Animatable.Text>
                </View>
            </Animatable.View>
        );
    }

    _updateSections = (activeSections) => {
        this.setState({ activeSections });
    };

    render() {
        return (
            <ScrollView>
                <View style={{ marginBottom: '2%' }}></View>
                <View style={styles.titlebg}>
                    <Text style={styles.notice}>학교 : 교양관(A2)에서 17:30 에 출발</Text>
                </View>
                <View style={{ marginTop: '3%' }}>
                    <Accordion
                        sections={SECTIONS}
                        activeSections={this.state.activeSections}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        onChange={this._updateSections}
                    />
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    titlebg: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#D0DFF2',
    },
    notice: {
        flex: 1,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20,
        color: '#00498C',
        paddingTop: '3%',
        paddingBottom: '3%',
        width: Dimensions.get('screen').width,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 25,
        color: '#00498C',
        padding: '7%',
        width: Dimensions.get('screen').width * 0.88,
    },
    txt: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#00203E',
        padding: '5%',
    },
    center: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        borderRadius: 25,
        borderColor: '#00498C',
        borderWidth: 3,
    },
});

export default GoHome_G;