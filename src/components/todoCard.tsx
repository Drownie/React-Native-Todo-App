import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

type TodoCardProps = {
    checked?: boolean,
    text: string,
};

function TodoCard({
    checked = false,
    text,
}: TodoCardProps) {
    const [status, setStatus] = useState<boolean>(checked);

    return (
        <View style={styles.container}>
            <RadioButton color="royalblue" value="first" onPress={() => setStatus(!status)} status={status ? 'checked' : 'unchecked'} />
            <Text>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        minHeight: 40,
        paddingVertical: 5,
        paddingHorizontal: 10,
        columnGap: 8,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
    },
});

export default TodoCard;
