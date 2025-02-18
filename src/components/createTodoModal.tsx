import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
// import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

// Components
import CategoryPicker from './categoryPicker';

// const data = [
//     { label: 'Item 1', value: '1' },
//     { label: 'Item 2', value: '2' },
//     { label: 'Item 3', value: '3' },
//     { label: 'Item 4', value: '4' },
//     { label: 'Item 5', value: '5' },
//     { label: 'Item 6', value: '6' },
//     { label: 'Item 7', value: '7' },
//     { label: 'Item 8', value: '8' },
// ];

type createTodoModalProps = {
    isVisible: boolean,
    onClose: () => void,
};

type AndroidMode = 'date' | 'time';

const dimension = Dimensions.get('screen');

const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    }).format(date);
};

const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // 24-hour format
    }).format(date);
};

function CreateTodoModal({
    isVisible,
    onClose,
} : createTodoModalProps) {
    const [datetime, setDatetime] = useState<Date>(new Date());
    // const [date, setDate] = useState<string>();
    // const [time, setTime] = useState<string>();

    const [mode, setMode] = useState<AndroidMode>('date');
    const [show, setShow] = useState(false);

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
        minHeight: '60%',
        backgroundColor: '#f9fbfc',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        elevation: 100,
        overflow: 'hidden',
        transform: [
            { translateY: withSpring(display.value ? 0 : '100%', { clamp: { max: 0 } }) },
        ],
    }));

    const onChangeDatetime = (_event: any, selectedDate?: Date) => {
        setShow(false);

        if (selectedDate) {
            setDatetime(selectedDate);
        }
    };

    const showMode = (currentMode: AndroidMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <GestureDetector gesture={swipeGesture}>
            <Animated.View style={animatedOverlay}>
                <Animated.View style={animatedModalContainer} >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>New Task ToDo</Text>
                        </View>
                        <View style={styles.modalBody}>
                            <TextInput
                                label="Title"
                                contentStyle={styles.modalInputContentStyle}
                                style={styles.modalInputContainer}
                            />

                            <CategoryPicker />

                            <TextInput
                                label="Description"
                                multiline
                                numberOfLines={3}
                                contentStyle={StyleSheet.flatten([styles.modalInputContentStyle, { height: 120 }])}
                                style={styles.modalInputContainer}
                            />

                            <View style={styles.modalInputGroup}>
                                <TouchableOpacity onPress={showDatepicker} activeOpacity={1}>
                                    <TextInput
                                        label="Date"
                                        placeholder="dd/mm/yy"
                                        multiline
                                        editable={false}
                                        numberOfLines={3}
                                        value={formatDate(datetime)}
                                        contentStyle={styles.modalInputContentStyle}
                                        style={StyleSheet.flatten([styles.modalInputContainer, { width: dimension.width * 0.5 - 22.5 }])}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={showTimepicker} activeOpacity={1}>
                                    <TextInput
                                        label="Time"
                                        multiline
                                        placeholder="hh:mm"
                                        editable={false}
                                        numberOfLines={3}
                                        value={formatTime(datetime)}
                                        contentStyle={styles.modalInputContentStyle}
                                        style={StyleSheet.flatten([styles.modalInputContainer, { width: dimension.width * 0.5 - 22.5 }])}
                                    />
                                </TouchableOpacity>
                            </View>

                            {/* <Dropdown
                                // style={styles.dropdown}
                                // placeholderStyle={styles.placeholderStyle}
                                // selectedTextStyle={styles.selectedTextStyle}
                                // inputSearchStyle={styles.inputSearchStyle}
                                // iconStyle={styles.iconStyle}
                                data={data}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Select item"
                                searchPlaceholder="Search..."
                                onChange={() => {}}
                            /> */}

                            {
                                show &&
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={datetime}
                                    mode={mode}
                                    is24Hour={true}
                                    onChange={onChangeDatetime}
                                />
                            }
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
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'royalblue',
        padding: 15,
    },
    modalHeader: {
        height: 60,
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
        // height: 450,
        maxHeight: 300,
        width: '100%',
        display: 'flex',
        rowGap: 10,
    },
    modalInputContentStyle: {
        color: 'black',
    },
    modalInputContainer: {
        backgroundColor: '#eff3f4',
        borderRadius: 10,
    },
    modalInputGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 10,
    },
    modalFooter: {
        height: 50,
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
