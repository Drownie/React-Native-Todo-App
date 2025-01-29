import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TodoCard from '../components/todoCard';
import ElevationButton from '../components/elevationButton';
import Icon from '@react-native-vector-icons/fontawesome6';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollViewStyle} contentContainerStyle={styles.scrollViewContainer} >
                <TodoCard text="Task 1" />
                <TodoCard text="Task 2" />
            </ScrollView>

            <ElevationButton>
                <Icon iconStyle="solid" name="plus" size={25} color={'black'} />
            </ElevationButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewStyle: {
        flex: 1,
        padding: 10,
        position: 'relative',
    },
    scrollViewContainer: {
        display: 'flex',
        rowGap: 8,
    },
});

export default HomeScreen;
