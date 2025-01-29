import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import TodoScreen from '../screens/TodoScreen';

import Icon from '@react-native-vector-icons/fontawesome6';

// Const

const DEFAULT_BOTTOM_NAV_OPT: BottomTabNavigationOptions = {
    headerShown: false,
};

const NAVIGATION_LIST = [
    {
        iconComponent: (color?: string, size?: number) => <Icon iconStyle="solid" name="house" size={size} color={color} />,
        title: 'Home',
        isActive: true,
        component: HomeScreen,
        option: DEFAULT_BOTTOM_NAV_OPT,
    },
    {
        iconComponent: (color?: string, size?: number) => <Icon iconStyle="solid" name="list-check" size={size} color={color} />,
        title: 'Todo',
        isActive: true,
        component: TodoScreen,
        option: DEFAULT_BOTTOM_NAV_OPT,
    },
];

const NAV_BY_NAME = Object.fromEntries(
    NAVIGATION_LIST.map(item => [item.title, item])
);

const Tab = createBottomTabNavigator();

// Type

type HomePageProps = {
};

// Static Methods

function Home({}: HomePageProps) {
    const insets = useSafeAreaInsets();
    const safePadding: ViewStyle = {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
    };

    return (
        <View style={StyleSheet.flatten([styles.container, safePadding])}>
            <Tab.Navigator screenOptions={({ route }) => ({
                lazy: true,
                tabBarIcon: (prop) => NAV_BY_NAME[route.name].iconComponent(prop.color, prop.size * 0.75),
            })}>
                {
                    NAVIGATION_LIST.map((navigationItem, i) => (
                        <Tab.Screen key={i} name={navigationItem.title} component={navigationItem.component} options={navigationItem.option} />
                    ))
                }
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Home;
