import React from 'react';
import { StyleSheet, ViewStyle, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '@react-native-vector-icons/fontawesome6';
import { useNavigation } from '@react-navigation/native';

// Import Components
import ElevationButton from '../components/elevationButton';
import ProfileHeader from '../components/profileHeader';

function Beranda() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const safePadding: ViewStyle = {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
    };

    const onHandlePress = (val: boolean) => {
        console.log(`PRESSED => ${val}`);

        // @ts-ignore
        navigation.navigate('todoModal', {
            isEdit: false,
        });
    };

    return (
        <View style={StyleSheet.flatten([styles.container, safePadding])}>
            {/* Elevation Button */}
            <View style={styles.elevationButtonWrapper}>
                <ElevationButton onPress={() => onHandlePress(true)} style={styles.customElevationContainer}>
                    <Icon name="plus" iconStyle="solid" color={'white'} />
                    <Text style={styles.customElevationButtonText}>Create</Text>
                </ElevationButton>
            </View>

            {/* Sweet Alert */}
            {/* <SweetAlert isVisible={isAlertVisible} onClose={() => setIsAlertVisible(false)} visibleSeconds={3000} displayText={'Data Submitted'} /> */}

            {/* Modal */}
            {/* <CreateTodoModal isVisible={isAlertVisible} onClose={() => setIsAlertVisible(false)} /> */}

            {/* Content */}

            <ProfileHeader />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#f5fafd',
    },
    elevationButtonWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    customElevationContainer: {
        backgroundColor: 'royalblue',
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
        position: 'relative',
        bottom: 0,
        right: 0,
        width: '100%',
        height: 55,
    },
    customElevationButtonText: {
        color: 'white',
        fontWeight: '400',
    },
});

export default Beranda;
