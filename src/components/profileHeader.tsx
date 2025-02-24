import Icon from '@react-native-vector-icons/fontawesome6';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function ProfileHeader() {
    return (
        <View style={styles.container}>
            {/* Left Group */}
            <View style={styles.leftGroup}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: 'https://randomuser.me/api/portraits/men/4.jpg', cache: 'reload' }} />
                </View>
                <View style={styles.nameGroupContainer}>
                    <Text style={StyleSheet.flatten([styles.defaultHeaderText, { fontSize: 15, color: '#aeafb3' }])}>Hello,</Text>
                    <Text style={styles.defaultHeaderText}>John Doe</Text>
                </View>
            </View>

            <View style={styles.rightGroup}>
                <TouchableOpacity style={styles.iconButtonContainer}>
                    <Icon size={15} iconStyle="regular" name="calendar" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButtonContainer}>
                    <Icon size={15} iconStyle="regular" name="bell" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    defaultHeaderText: {
        fontWeight: '500',
        fontSize: 16,
        color: 'black',
    },
    container: {
        width: '100%',
        height: 90,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 20,
        // backgroundColor: 'lime',
    },
    leftGroup: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 20,
    },
    imageContainer: {
        overflow: 'hidden',
        borderRadius: '50%',
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 2,
        elevation: 4,
    },
    image: {
        height: 55,
        width: 55,
    },
    nameGroupContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    rightGroup: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 20,
    },
    iconButtonContainer: {
        width: 40,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '50%',
        borderColor: 'lightgray',
        borderWidth: 1,
        elevation: 1,
    },
});

export default ProfileHeader;
