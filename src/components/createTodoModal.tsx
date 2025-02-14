import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type createTodoModalProps = {
    isVisible: boolean,
    onClose: () => void,
};

function CreateTodoModal({
    isVisible,
    onClose,
} : createTodoModalProps) {
    const display = useSharedValue<boolean>(isVisible);
    const swipeGesture = Gesture.Fling()
        .direction(Directions.DOWN).onEnd(() => runOnJS(onClose)());

    useEffect(() => {
        display.value = isVisible;
        console.log(isVisible);
    }, [display, isVisible]);

    const animatedOverlay = useAnimatedStyle(() => ({
        position: 'absolute',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        zIndex: 100,
        left: 0,
        top: 0,
        paddingHorizontal: 2,
        transform: [
            { translateY: withSpring(display.value ? 0 : '100%') },
        ],
    }));

    const animatedModalContainer = useAnimatedStyle(() => ({
        width: '100%',
        height: '100%',
        backgroundColor: '#f9fbfc',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        elevation: 100,
        overflow: 'hidden',
        transform: [
            { translateY: withSpring(display.value ? 25 : '100%') },
        ],
    }));

    return (
        <GestureDetector gesture={swipeGesture}>
            <Animated.View style={animatedOverlay}>
                <Animated.View style={animatedModalContainer} >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>New Task ToDo</Text>
                        </View>
                        <View style={styles.modalBody}>
                            <TextInput label="Title Task" contentStyle={{ color: 'black' }} style={{ backgroundColor: '#eff3f4', borderRadius: 10 }} />
                            <TextInput label="Description" multiline numberOfLines={3} contentStyle={{ color: 'black' }} style={{ backgroundColor: '#eff3f4', borderRadius: 10 }} />
                        </View>
                        <View style={styles.modalFooter}>
                            <TouchableOpacity style={StyleSheet.flatten([styles.modalButton, { backgroundColor: 'white' }])}>
                                <Text style={StyleSheet.flatten([styles.modalButtonText, { color: '#2f84fd', fontWeight: '600' }])}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Create</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>
            </Animated.View>
        </GestureDetector>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        height: '75%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'royalblue',
        padding: 15,
    },
    modalHeader: {
        height: 80,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 0.5,
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
    },
    modalBody: {
        height: 450,
        width: '100%',
        display: 'flex',
        rowGap: 5,
    },
    modalFooter: {
        height: 60,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    modalButton: {
        width: '45%',
        height: '100%',
        backgroundColor: '#2f84fd',
        borderRadius: 12,
        borderColor: '#5b90d9',
        borderWidth: 1.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalButtonText: {
        fontWeight: '500',
        fontSize: 14,
        color: 'white',
    },
});

export default CreateTodoModal;
