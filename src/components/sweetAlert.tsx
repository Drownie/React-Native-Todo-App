import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

type sweetAlertProps = {
    isVisible: boolean,
    onClose: () => void,
    visibleSeconds?: number,
    displayText?: string,
};

function SweetAlert({
    isVisible,
    onClose,
    visibleSeconds = 5000,
    displayText = 'Success',
}: sweetAlertProps) {
    const sweetAlertDisplay = useSharedValue<boolean>(isVisible);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const tap = Gesture.Tap()
        .onBegin(() => runOnJS(onClose)());

    useEffect(() => {
        sweetAlertDisplay.value = isVisible;
        if (isVisible) {
            timeoutRef.current = setTimeout(() => {
                runOnJS(onClose)(); // Close alert after 5 seconds
            }, visibleSeconds);
        }
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isVisible, onClose, sweetAlertDisplay, visibleSeconds]);

    const animatedStyle = useAnimatedStyle(() => ({
        position: 'absolute',
        right: 0,
        top: 0,
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#a5dc86',
        paddingHorizontal: 10,
        marginTop: 20,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        transform: [{ translateX: withTiming(sweetAlertDisplay.value ? 0 : '100%') }],
    }));

    return (
        <GestureDetector gesture={tap}>
            <Animated.View style={animatedStyle}>
                <Text style={styles.alertText}>{displayText}</Text>
            </Animated.View>
        </GestureDetector>
    );
}

const styles = StyleSheet.create({
    alertText: {
        color: 'white',
        fontWeight: '500',
    },
});

export default SweetAlert;
