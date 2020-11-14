import * as React from 'react';
import { Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import IconIcon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function Feed(){
    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Where to display the pulled Data</Text>
        </View>
    )
}

function News(){
    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Where to display news feed</Text>
        </View>
    )
}

function Report(){
    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Where to put form to submit SECURITA report</Text>
        </View>
    )
}

function BottomTabs(){
    return(
        <Tab.Navogator
            initialRouteName = "Feed"
            tabBarOptions={{activeIintColor: '#e91e63'}}
        >
            <Tab.Screen name="Feed"
                component={Feed}
                options={{
                    tabBarLabel:"Home",
                    tabBarIcon: ({color, size}) => (
                        <IconIcon name="home-outline"  color={color} size={size}/>
                    )
                }}

            />
            <Tab.Screen name="News"
                component={News}
                options={{
                    tabBarLabel:"News",
                    tabBarIcon: ({color, size}) => (
                        <IconIcon name="newspaper-outline" color={color} size={size}/>
                    )
                }}

            />
            <Tab.Screen name="Report"
                component={Report}
                options={{
                    tabBarLabel:"Report",
                    tabBarIcon: ({color, size}) => (
                        <IconIcon name="mail-open-outline" color={color} size={size}/>
                    )
                }}

            />
        </Tab.Navogator>
    )
}

export default function BottomNav() {
    return (
        <NavigationContainer>
            <BottomTabs />
        </NavigationContainer>
    )
}