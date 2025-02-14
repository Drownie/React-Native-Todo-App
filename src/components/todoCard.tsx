import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
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
    const navigation = useNavigation();

    const onPressTodoCard = useCallback(() => {
        // @ts-ignore
        navigation.navigate('todoModal', {
            isEdit: true,
            title: text,
        });
    }, [navigation, text]);

    return (
        <TouchableOpacity style={styles.container} onPress={onPressTodoCard}>
            <RadioButton color="royalblue" value="first" onPress={() => setStatus(!status)} status={status ? 'checked' : 'unchecked'} />
            <Text>{text}</Text>
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
        paddingVertical: 5,
        paddingHorizontal: 10,
        columnGap: 8,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
    },
});

export default TodoCard;
