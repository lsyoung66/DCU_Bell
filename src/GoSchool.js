import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

const SECTIONS = [
    {
        title: '1호차',
        content: ["성서계명대 정문 건너편(06:55)\n\n", "GS성서주유소(07:00)\n\n", "(서대구IC 경유)\n\n", "학교"],
    },
    {
        title: '2호차',
        content: ["서구청 건너편 육교(07:00)\n\n", "(구 효목육교)삼성시스템에어컨(07:18)\n\n", "우방강촌마을 육교(07:23)\n\n", "신기역 2번출구(07:29)\n\n", "학교"],
    },
    {
        title: '3호차',
        content: ["칠곡 황우리식당 건너편 현대자동차 태전지점(07:05)\n\n", "(칠곡IC 경유)\n\n", "학교"],
    },
    {
        title: '4호차',
        content: ["칠곡 어울림 아트센터(07:08)\n\n", "(칠곡IC 경유)\n\n", "학교"],
    },
    {
        title: '5호차',
        content: ["칠곡 대구은행 학정로지점(07:03)\n\n", "(북대구IC 경유)\n\n", " 학교"],
    },
    {
        title: '6호차',
        content: ["칠곡 부영5단지아파트 503동 대로변(07:00)\n\n", "(동서변네거리)다이소 대구동서변점(07:13)\n\n", "(북대구IC 경유)\n\n", "학교"],
    },
    {
        title: '7호차',
        content: ["칠곡 화성센트럴파크 212동 대로변(07:00)\n\n", "동서영남아파트 후문 건너편(07:03)\n\n", "(칠곡IC 경유)\n\n", "학교"],
    },
    {
        title: '8호차',
        content: ["대곡강산타운 404동 대로변(07:00)\n\n", "도원도서관 건너편 대곡강산타운 413동 대로변(07:02)\n\n", "은행아파트 502동 대로변 육교 (07:05)\n\n", "(앞산터널 경유)\n\n", "학교"],
    },
    {
        title: '9호차',
        content: ["GS본리동주유소 옆 상동회초밥 앞(07:00)\n\n", "두류공원네거리 문성병원(07:08)\n\n", "중부소방서(07:13)\n\n", "학교"],
    },
    {
        title: '10호차',
        content: ["파동 우방1차 대자연맨션 정문(06:55)\n\n", "수성동아백화점 건너편 국민은행 범물동지점(07:05)\n\n", "학교"],
    },
    {
        title: '11호차',
        content: ["봉덕시장 그린축산물판매장(07:10)\n\n", "중동광명네거리 타이어뱅크 황금점(07:16)\n\n", "정평역 3번출구(07:39)\n\n", "대평그린빌 건너편 칠성꽃농원(07:44)\n\n", "학교"],
    },
    {
        title: '12호차',
        content: ["복현오거리(우회전) 버스정류장(07:10)\n\n", "동구청 건너편 진로이스트타운 입구(07:16)\n\n", "학교"],
    },
    {
        title: '13호차',
        content: ["북부정류장 건너편 신한은행 비산동지점 육교(07:00)\n\n", "CBS방송국(07:12)\n\n", "(북대구IC 경유)\n\n", "학교"],
    },
    {
        title: '14호차',
        content: ["TBC 맞은편 버스정류장(07:10)\n\n", "대구은행 황금동지점 건너편 버스정류장 후방 20m(07:13)\n\n", "동도중학교 입구(07:15)\n\n", "만촌2동주민센터 앞 대로변(07:20)\n\n", "학교"],
    },
    {
        title: '15호차',
        content: ["대구은행 시지지점(07:10)\n\n", "경산 역전치안센터(07:20)\n\n", "영남대학교 박물관(07:31)\n\n", "진량 경북학숙 입구(07:58)\n\n", "학교"],
    },
    {
        title: '16호차',
        content: ["화원성명교회 건너편 새롬보석사우나(06:45)\n\n", "화원읍사무소(06:47)\n\n", "대곡역 3번출구 세븐일레븐(06:50)\n\n", "(앞산터널 경유)\n\n", "학교"],
    },
    {
        title: '17호차',
        content: ["영천시외버스터미널(08:00)\n\n", "서문육거리 황실유럽자수(08:02)\n\n", "학교"],
    },
];
class GoSchool extends React.Component {
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
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
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
    title: {
        flex: 1,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 25,
        color: '#00498C',
        padding: '6%',
        width: Dimensions.get('screen').width * 0.88,
    }
});

export default GoSchool;