import Icon from '@react-native-vector-icons/fontawesome6';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const categoriesD: categoryItem[] = [
    { label: 'Event', icon: <Icon color="white" iconStyle="solid" name="calendar-week" /> },
    { label: 'Task', icon: <Icon color="white" iconStyle="solid" name="list-check" /> },
];

type categoryItem = {
    label: string,
    icon?: React.JSX.Element
}

type categoryPickerProps = {
    categories?: categoryItem[],
    selectedCategoryIndex?: number,
};

function CategoryPicker({
    categories = categoriesD,
    selectedCategoryIndex = -1,
}: categoryPickerProps) {
    const [ index, setIndex ] = useState(selectedCategoryIndex);

    return (
        <View style={styles.categoriesContainer}>
            {
                categories.map((item, i) => (
                    <TouchableOpacity onPress={() => setIndex(i)} key={i} style={StyleSheet.flatten([styles.categoryContainer, i === index ? styles.categoryContainerSelected : {}])}>
                        { item.icon ? item.icon : <></> }
                        <Text style={StyleSheet.flatten([styles.categoryText, i === index ? styles.categoryTextSelected : {}])}>{item.label}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    categoriesContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        columnGap: 10,
    },
    categoryContainer: {
        minWidth: 100,
        paddingVertical: 8,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 10,
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#2f84fd',
        borderColor: '#5b90d9',
        borderWidth: 1.5,
    },
    categoryContainerSelected: {
        backgroundColor: 'white',
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'white',
    },
    categoryTextSelected: {
        color: '#2f84fd',
        fontWeight: '600',
    },
});

export default CategoryPicker;
