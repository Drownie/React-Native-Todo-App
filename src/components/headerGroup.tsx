import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type headerGroupProps = {
    title: string,
    subtitle?: string,
    onPressButton?: () => void,
};

function HeaderGroup({
    title,
    subtitle,
    onPressButton = () => {},
} : headerGroupProps) {
    return (
        <View style={styles.container}>
            <View style={styles.titleGroupText}>
                <Text style={styles.titleText}>{ title }</Text>
                {
                    subtitle ?
                    <Text style={styles.subTitleText}>{ subtitle }</Text> :
                    <></>
                }
            </View>
            <TouchableOpacity onPress={onPressButton}>
                <Text style={styles.linkText}>View More</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleGroupText: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 5,
    },
    titleText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'black',
    },
    subTitleText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'gray',
    },
    linkText: {
        fontSize: 14,
        color: 'royalblue',
        fontWeight: 'bold',
    },
});

export default HeaderGroup;
