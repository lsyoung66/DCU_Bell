import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

const SECTIONS = [
    {
        title: '1호차',
        content: ["학교\n\n", "경상고등학교\n\n", "신한은행 복현지점(복현오거리)\n\n", "산격대우아파트\n\n", "강북지구대\n\n", "홈플러스 칠곡점\n\n", "칠곡초등학교"],
    },
    {
        title: '2호차',
        content: ["학교\n\n", "다이소 대구동서변점 건너편(동서변네거리)\n\n", "대구은행 학정로지점 건너편\n\n", "화성센트럴아파트 209동\n\n", "동천지구대"],
    },
    {
        title: '3호차',
        content: ["학교\n\n", "동촌농협 방촌지점\n\n", "입석초등학교 건너편\n\n", "동구청\n\n", "복현네거리\n\n", "대백인터빌아파트(팔달교)\n\n", "타이어뱅크 칠곡점(태전네거리)\n\n", "티월드 칠곡점(태전삼거리)\n\n", "경북약국"],
    },
    {
        title: '4호차',
        content: ["학교\n\n", "홈플러스 동촌점\n\n", "라온치과(복현오거리)\n\n", "명성푸르지오\n\n", "이마트 칠성점\n\n", "노원동 우체국\n\n", "북부정류장"],
    },
    {
        title: '5호차',
        content: ["학교\n\n", "신천주유소(GS)\n\n", "수성시장 버스정류장\n\n", "명덕역\n\n", "현대자동차 남대구점(계명네거리)\n\n", "채움주유소(SK)\n\n", "대구은행 삼익뉴타운지점 건너편\n\n", "중리롯데캐슬\n\n", "투썸플레이스(신평리네거리)"],
    },
    {
        title: '6호차',
        content: ["학교\n\n", "만촌네거리\n\n", "가든하이츠3단지\n\n", "대구은행 황금동지점\n\n", "농협 중동지점\n\n", "이조왕갈비\n\n", "팔레스호텔\n\n", "영대병원네거리\n\n", "현충로역\n\n", "안지랑네거리\n\n", "서부정류장 네거리"],
    },
    {
        title: '7호차',
        content: ["학교\n\n", "경산IC(경유)\n\n", "성서IC(경유)\n\n", "대우월드마크웨스트엔드(죽전네거리)\n\n", "본동복어\n\n", "그린맨션\n\n", "나라신경외과\n\n", "상원고등학교"],
    },
    {
        title: '8호차',
        content: ["학교\n\n", "경산IC(경유)\n\n", "성서IC(경유)\n\n", "용산역\n\n", "월성초등학교\n\n", "청구코아\n\n", "월서초등학교\n\n", "상인초등학교"],
    },
    {
        title: '9호차',
        content: ["학교\n\n", "반야월주유소(S-OIL)\n\n", "우방강촌마을\n\n", "대동병원\n\n", "(구)동부정류장\n\n", "바로본병원(동신교)\n\n", "중구청\n\n", "대구콘서트하우스\n\n", "전진욱 정형외과(북비산네거리)\n\n", "서부중학교"],
    },
    {
        title: '10호차',
        content: ["학교\n\n", "대륜고 건너편\n\n", "학문당입시학원\n\n", "대구은행 범어동지점\n\n", "반월당역 10번출구\n\n", "대신센트럴자이(중부소방서)\n\n", "구병원 건너편\n\n", "성서보람타운\n\n", "성서산업단지역\n\n", "계명대 정문"],
    },
    {
        title: '11호차',
        content: ["학교\n\n", "안심역\n\n", "율하역\n\n", "용지역\n\n", "수성동아백화점\n\n", "동아스포츠센터 건너편\n\n", "수성못오거리\n\n", "수성동일하이빌 후문"],
    },
    {
        title: '12호차',
        content: ["학교\n\n", "안심역\n\n", "비둘기아파트\n\n", "가람마을주공1단지\n\n", "도원네거리\n\n", "노전초등학교\n\n", "고려자동차학원네거리(진천남네거리)"],
    },
    {
        title: '13호차',
        content: ["학교\n\n", "진량 굿모닝주유소(현대)\n\n", "경산IC 입구\n\n", "영남대학교 건너편\n\n", "경산시장\n\n", "경산역\n\n", "옥산네거리\n\n", "사월역\n\n", "농협 시지지점"],
    },
    {
        title: '14호차',
        content: ["학교\n\n", "대평주공그린빌아파트\n\n", "정평역\n\n", "사월역\n\n", "파티마 여성병원\n\n", "만촌네거리\n\n", "수성구청역\n\n", "그랜드호텔\n\n", "어린이회관 건너편\n\n", "TBC"],
    },
    {
        title: '15호차',
        content: ["학교\n\n", "앞산터널(경유)\n\n", "진천역\n\n", "대곡역\n\n", "화원역\n\n", "화원연세병원"],
    },
    {
        title: '야간 (22:00)',
        content: ["학교/A2(22:00)\n\n", "안심역(1호선)\n\n", "사월역(2호선)\n\n", "용지역(3호선)\n"],
    },
];
class GoHome extends React.Component {
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
            <View>
                <View style={{ marginBottom: '2%' }}></View>
                <View style={styles.titlebg}>
                    <Text style={styles.notice}>학교 : 성요한보스코관(C9)에서 20:40,</Text>
                    <Text style={styles.notice}>       교양관(A2)에서 21:00 에 출발</Text>
                </View>
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
        flex: 1,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 25,
        color: '#00498C',
        padding: '6%',
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

export default GoHome;