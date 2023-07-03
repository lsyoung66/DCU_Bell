import React, { Component } from "react";
import {
    View, Text, StyleSheet, StatusBar, TouchableOpacity,
    Image, SafeAreaView, ImageBackground
} from "react-native";
import GoSchool_U from './GoSchool_U';
import GoHome_U from './GoHome_U';

let home_icon = require('../img/home.png');
let setting_icon = require('../img/set.png');
let background = require('../img/bg1.png');

StatusBar.setBarStyle("light-content");
StatusBar.setHidden(false);

const menuList = {
    0: <GoSchool_U />,
    1: <GoHome_U />,
};

export default class Ulsan extends React.Component {
    state = {
        button1: 5, button2: 0,
    };

    button1 = () => {
        this.setState({
            button1: 5, button2: 0,
        });
    }

    button2 = () => {
        this.setState({
            button1: 0, button2: 5,
        });
    }

    goHome() {
        this.props.navigation.navigate('MainScreen');
    }

    School() {
        this.props.navigation.navigate('SchoolCirculation');
    }

    Daegu() {
        this.props.navigation.navigate('DaeguCirculation');
    }

    Station() {
        this.props.navigation.navigate('SubwayStation');
    }

    constructor(spot) {
        super();
        this.state = {
            menu: 0, button1: 5, button2: 0
        };
    }

    changeMenu = (menuIndex) => {
        this.setState({ menu: menuIndex });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <ImageBackground style={styles.background} source={background}>
                        <>
                            <View style={styles.header}>
                                <TouchableOpacity onPress={() => this.goHome()}>
                                    <Image
                                        style={styles.header_home}
                                        source={home_icon}>
                                    </Image>
                                </TouchableOpacity>
                                <Text style={styles.header_text}>울        산</Text>
                                <Image
                                    style={styles.header_set}
                                    source={setting_icon}>
                                </Image>
                            </View>

                            <View style={styles.Tab}>
                                <View style={[styles.TabButton, { borderBottomWidth: this.state.button1 }]}>
                                    <TouchableOpacity onPressIn={() => this.button1()} onPress={() => this.changeMenu(0)}>
                                        <Text style={[styles.TabText]}>등교</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.TabButton, { borderBottomWidth: this.state.button2 }]}>
                                    <TouchableOpacity onPressIn={() => this.button2()} onPress={() => this.changeMenu(1)}>
                                        <Text style={[styles.TabText]}>하교</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text>{menuList[this.state.menu]}</Text>

                        </>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        ...Platform.select({
            ios: {
                backgroundColor: '#00498C',
            },
            android: {
                backgroundColor: StatusBar.setBackgroundColor("#00498C"),
            },
        }),
    },
    background: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
    header: {
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1%',
        backgroundColor: '#00498C',
    },
    header_home: {
        marginRight: '7%',
        width: 35,
        height: 35,
    },
    header_text: {
        fontSize: 27,
        fontWeight: "bold",
        color: 'white',
    },
    header_set: {
        marginLeft: '7%',
        width: 35,
        height: 35,
    },
    Tab: {
        marginVertical: '2%',
        marginHorizontal: '10%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TabButton: {
        flex: 1,
        padding: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#00498C',
    },
    TabText: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#00498C',
    },
});