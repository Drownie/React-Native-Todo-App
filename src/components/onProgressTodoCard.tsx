import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';

dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isTomorrow);

type TodoCardProps = {
    title: string,
    deadline?: dayjs.Dayjs,
    onPress?: () => void
    stripColor?: string,
};

const getRelativeTime = (date: dayjs.Dayjs) => {
    if (date.isToday()) {
        return 'Today';
    } else if (date.isTomorrow()) {
        return 'Tomorrow';
    }

    return date.fromNow();
};

function OnProgressTodoCard({
    title,
    deadline = dayjs(),
    onPress = () => {},
    stripColor = '#a4a9fe',
}: TodoCardProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={StyleSheet.flatten([styles.colorStatus, { backgroundColor: stripColor }])} />
            <View style={styles.titleGroupText}>
                <Text style={styles.titleText} >{ title }</Text>
                <Text style={styles.subTitleText} >{ getRelativeTime(deadline) }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        minHeight: 40,
        columnGap: 8,
        borderRadius: 5,
        backgroundColor: 'white',
        elevation: 2,
        overflow: 'hidden',
    },
    titleGroupText: {
        display: 'flex',
        rowGap: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    titleText: {
        fontWeight: '500',
        fontSize: 13,
        color: 'black',
    },
    subTitleText: {
        fontWeight: '400',
        fontSize: 12,
        color: 'gray',
    },
    colorStatus: {
        width: 8,
        height: '100%',
    },
});

export default OnProgressTodoCard;
