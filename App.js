import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import main from './src/main';
import set from './src/set1';
import go from './src/go';
import come from './src/come';
import list from './src/list';
import schedule from './src/schedule';
import bus1 from './src/bus1';
import bus2 from './src/bus2';
import bus3 from './src/bus3';
import bus4 from './src/bus4';
import bus5 from './src/bus5';
import bus6 from './src/bus6';
import bus7 from './src/bus7';
import bus8 from './src/bus8';
import bus9 from './src/bus9';
import bus10 from './src/bus10';
import bus11 from './src/bus11';
import bus12 from './src/bus12';
import bus13 from './src/bus13';
import bus14 from './src/bus14';
import bus15 from './src/bus15';
import bus16 from './src/bus16';
import school from './src/school';
import Daegu from './src/Daegu';
import station from './src/station';
import Ulsan from './src/Ulsan';
import Pohang from './src/Pohang';
import Gumi from './src/Gumi';
import Gyeongju from './src/Gyeongju';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={main}
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="SetScreen" component={set}
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="GoScreen" component={go}
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="ComeScreen" component={come}
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="ListScreen" component={list}
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="ScheduleScreen" component={schedule}
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B1" component={bus1} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B2" component={bus2} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B3" component={bus3} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B4" component={bus4} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B5" component={bus5} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B6" component={bus6} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B7" component={bus7} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B8" component={bus8} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B9" component={bus9} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B10" component={bus10} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B11" component={bus11} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B12" component={bus12} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B13" component={bus13} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B14" component={bus14} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B15" component={bus15} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="B16" component={bus16} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="SchoolCirculation" component={school} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="DaeguCirculation" component={Daegu} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="SubwayStation" component={station} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="Ulsan" component={Ulsan} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="Pohang" component={Pohang} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="Gumi" component={Gumi} 
          options={{
            headerShown: false
        }}/>
        <Stack.Screen name="Gyeongju" component={Gyeongju} 
          options={{
            headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;