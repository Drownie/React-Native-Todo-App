import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@react-native-vector-icons/fontawesome6';

// Import Component
import TodoCard from '../components/todoCard';
import ElevationButton from '../components/elevationButton';

const todoList = [
    {
        isDone: false,
        text: 'Task 1',
        createdAt: '2024-01-01',
    },
    {
        isDone: true,
        text: 'Task 2',
        createdAt: '2024-01-01',
    },
    {
        isDone: false,
        text: 'Task 3',
        createdAt: '2024-01-29',
    },
];

function HomeScreen() {
    const [todo, _setTodo] = useState(todoList);
    const navigation = useNavigation();

    const onPressCreate = useCallback(() => {
        // @ts-ignore
        navigation.navigate('todoModal', {
            isEdit: false,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollViewStyle} contentContainerStyle={styles.scrollViewContainer} >
                {
                    todo.map((todoItem, i) => (
                        <TodoCard text={todoItem.text} key={i} checked={todoItem.isDone} />
                    ))
                }
            </ScrollView>

            <ElevationButton onPress={onPressCreate}>
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
