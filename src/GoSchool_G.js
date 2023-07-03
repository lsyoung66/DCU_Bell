import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

const SECTIONS = [
    {
        title: '구미역',
        content: ["구미역(06:55)\n\n", "형곡동 네거리 신세계동물병원 앞 버스승강장(07:00)\n\n", "오성예식장(07:05)\n\n", "신평동 육교 및 IC입구(07:10)\n\n", "학교"],
    },
    {
        title: '사곡역 입구',
        content: ["노블리스모텔 맞은편 사곡역 입구(06:45)\n\n", "상모동 빅마트 맞은편 시내버스 승강장 앞(06:50)\n\n", "오태동 수연합정형외과 앞(06:53)\n\n", "북삼 원조24시굴뚝배기 앞(06:56)\n\n", "약목역 맞은편(예일전동지게차)(07:02)\n\n", "왜관역 입구 네거리 던킨도너츠 앞(07:10)\n\n", "학교\n\n\n\n\n"],
    },
];
class GoSchool_G extends React.Component {
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

export default GoSchool_G;