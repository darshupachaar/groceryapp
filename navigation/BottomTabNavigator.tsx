/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import TabFiveScreen from '../screens/TabFiveScreen';
import TabSixScreen from '../screens/TabSixScreen';
import TabSevenScreen from '../screens/TabSevenScreen';
import TabEightScreen from '../screens/TabEightScreen';
import TabNineScreen from '../screens/TabNineScreen';
import TabTenScreen from '../screens/TabTenScreen';
import TabElevenScreen from '../screens/TabElevenScreen';
import TabTwevleScreen from '../screens/TabTwevleScreen';
import TabThirteenScreen from '../screens/TabThirteenScreen';
import TabFourteenScreen from '../screens/TabFourteenScreen';
import TabFifteenScreen from '../screens/TabFifteenScreen';
import TabSixteenScreen from '../screens/TabSixteenScreen';
import TabSeventeenScreen from '../screens/TabSeventeenScreen';




import { BottomTabParamList, TabOneParamList, TabTwoParamList,TabThreeParamList,TabFourParamList,TabFiveParamList,TabSixParamList,TabSevenParamList,TabEightParamList,TabNineParamList,TabTenParamList ,TabElevenParamList,TabTwevleParamList,TabThirteenParamList,TabFourteenParamList,TabFifteenParamList,TabSixteenParamList   } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="TabThree"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="TabFour"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="TabFive"
        component={TabFiveNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
             <BottomTab.Screen
        name="TabSix"
        component={TabSixNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
        <BottomTab.Screen
        name="TabSeven"
        component={TabSevenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
        <BottomTab.Screen
        name="TabEight"
        component={TabEightNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabNine"
        component={TabNineNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="TabTen"
        component={TabTenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabEleven"
        component={TabElevenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="TabTwevle"
        component={TabTwevleNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="TabThirteen"
        component={TabThirteenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="TabFourteen"
        component={TabFourteenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="TabFifteen"
        component={TabFifteenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="TabSixteen"
        component={TabSixteenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="TabSeventeen"
        component={TabSeventeenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />

    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: 'Tab Three Title' }}
      />
    </TabThreeStack.Navigator>
  );
}


const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabThreeStack.Screen
        name="TabFourScreen"
        component={TabFourScreen}
        options={{ headerTitle: 'Tab Four Title' }}
      />
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator<TabFiveParamList>();

function TabFiveNavigator() {
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="TabFiveScreen"
        component={TabFiveScreen}
        options={{ headerTitle: 'Tab Five Title' }}
      />
    </TabFiveStack.Navigator>
  );
}

const TabSixStack = createStackNavigator<TabSixParamList>();

function TabSixNavigator() {
  return (
    <TabSixStack.Navigator>
      <TabSixStack.Screen
        name="TabSixScreen"
        component={TabSixScreen}
        options={{ headerTitle: 'Tab Six Title' }}
      />
    </TabSixStack.Navigator>
  );
}

const TabSevenStack = createStackNavigator<TabSevenParamList>();

function TabSevenNavigator() {
  return (
    <TabSevenStack.Navigator>
      <TabSevenStack.Screen
        name="TabSevenScreen"
        component={TabSevenScreen}
        options={{ headerTitle: 'Tab Seven Title' }}
      />
    </TabSevenStack.Navigator>
  );
}






const TabEightStack = createStackNavigator<TabEightParamList>();

function TabEightNavigator() {
  return (
    <TabEightStack.Navigator>
      <TabEightStack.Screen
        name="TabEightScreen"
        component={TabEightScreen}
        options={{ headerTitle: 'Tab Eight Title' }}
      />
    </TabEightStack.Navigator>
  );
}

const TabNineStack = createStackNavigator<TabNineParamList>();

function TabNineNavigator() {
  return (
    <TabNineStack.Navigator>
      <TabNineStack.Screen
        name="TabNineScreen"
        component={TabNineScreen}
        options={{ headerTitle: 'Tab Nine Title' }}
      />
    </TabNineStack.Navigator>
  );
}

const TabTenStack = createStackNavigator<TabTenParamList>();

function TabTenNavigator() {
  return (
    <TabTenStack.Navigator>
      <TabTenStack.Screen
        name="TabTenScreen"
        component={TabTenScreen}
        options={{ headerTitle: 'Tab Ten Title' }}
      />
    </TabTenStack.Navigator>
  );
}

const TabElevenStack = createStackNavigator<TabElevenParamList>();

function TabElevenNavigator() {
  return (
    <TabElevenStack.Navigator>
      <TabElevenStack.Screen
        name="TabElevenScreen"
        component={TabElevenScreen}
        options={{ headerTitle: 'Tab Eleven Title' }}
      />
    </TabElevenStack.Navigator>
  );
}

const TabTwevleStack = createStackNavigator<TabTwevleParamList>();

function TabTwevleNavigator() {
  return (
    <TabTwevleStack.Navigator>
      <TabTwevleStack.Screen
        name="TabTwevleScreen"
        component={TabTwevleScreen}
        options={{ headerTitle: 'Tab Twevle Title' }}
      />
    </TabTwevleStack.Navigator>
  );
}

const TabThirteenStack = createStackNavigator<TabThirteenParamList>();

function TabThirteenNavigator() {
  return (
    <TabThirteenStack.Navigator>
      <TabThirteenStack.Screen
        name="TabThirteenScreen"
        component={TabThirteenScreen}
        options={{ headerTitle: 'Tab Thirteen Title' }}
      />
    </TabThirteenStack.Navigator>
  );
}

const TabFourteenStack = createStackNavigator<TabFourteenParamList>();

function TabFourteenNavigator() {
  return (
    <TabFourteenStack.Navigator>
      <TabFourteenStack.Screen
        name="TabFourteenScreen"
        component={TabFourteenScreen}
        options={{ headerTitle: 'Tab Fourteen Title' }}
      />
    </TabFourteenStack.Navigator>
  );
}

const TabFifteenStack = createStackNavigator<TabFifteenParamList>();

function TabFifteenNavigator() {
  return (
    <TabFifteenStack.Navigator>
      <TabFifteenStack.Screen
        name="TabFifteenScreen"
        component={TabFifteenScreen}
        options={{ headerTitle: 'Tab Fifteen Title' }}
      />
    </TabFifteenStack.Navigator>
  );
}

const TabSixteenStack = createStackNavigator<TabSixteenParamList>();

function TabSixteenNavigator() {
  return (
    <TabSixteenStack.Navigator>
      <TabSixteenStack.Screen
        name="TabSixteenScreen"
        component={TabSixteenScreen}
        options={{ headerTitle: 'Tab Sixteen Title' }}
      />
    </TabSixteenStack.Navigator>
  );
}

const TabSeventeenStack = createStackNavigator<TabSeventeenParamList>();

function TabSeventeenNavigator() {
  return (
    <TabSeventeenStack.Navigator>
      <TabSeventeenStack.Screen
        name="TabSeventeenScreen"
        component={TabSeventeenScreen}
        options={{ headerTitle: 'Tab Seventeen Title' }}
      />
    </TabSeventeenStack.Navigator>
  );
}