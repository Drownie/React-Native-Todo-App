import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';

type todoModalNavigationParams = {
    isEdit: boolean,
    title?: string,
};

function TodoModalScreen({route}: {route?: any}) {
    const params: todoModalNavigationParams = route.params;
    const [title, setTitle] = useState(params.title);

    return (
        <View style={styles.container}>
            <TextInput
                label="Title"
                value={title}
                onChangeText={setTitle}
            />

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{params.isEdit ? 'Update' : 'Create'}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        padding: 10,
        rowGap: 10,
        backgroundColor: 'lightgray',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: 'royalblue',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
    },
});

export default TodoModalScreen;
