import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
// import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import DateTimePicker from '@react-native-community/datetimepicker';

// Components
import CategoryPicker from '../components/categoryPicker';

type todoModalNavigationParams = {
    isEdit: boolean,
    title?: string,
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

function TodoModalScreen({route}: {route?: any}) {
    const insets = useSafeAreaInsets();
    const params: todoModalNavigationParams = route.params;
    // const [title, setTitle] = useState(params.title);

    const safePadding: ViewStyle = {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
    };

    const [datetime, setDatetime] = useState<Date>(new Date());

    const [mode, setMode] = useState<AndroidMode>('date');
    const [show, setShow] = useState(false);

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
        <View style={[styles.container, safePadding]}>
            <ScrollView style={styles.content}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>
                        {params.isEdit ? 'Edit Todo' : 'Create Todo'}
                    </Text>
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
                </View>
            </ScrollView>
            <View style={styles.buttomWrapper}>
                <TouchableOpacity style={StyleSheet.flatten([styles.modalButton, { backgroundColor: 'white' }])}>
                    <Text style={StyleSheet.flatten([styles.modalButtonText, { color: '#2f84fd', fontWeight: '600' }])}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton}>
                    <Text style={styles.modalButtonText}>Create</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    content: {
        flex: 0.94,
        // backgroundColor: 'lime',
    },
    buttomWrapper: {
        flex: 0.06,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        // backgroundColor: 'gray'
    },
    modalContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'white',
    },
    modalContent: {
        display: 'flex',
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
        width: '100%',
        display: 'flex',
        rowGap: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
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

export default TodoModalScreen;
