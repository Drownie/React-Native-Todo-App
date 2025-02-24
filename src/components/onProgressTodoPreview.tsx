import React from 'react';
import dayjs from 'dayjs';

// Import Components
import { FlatList, StyleSheet, View } from 'react-native';
import HeaderGroup from './headerGroup';
import OnProgressTodoCard from './onProgressTodoCard';

const ON_PROGRESS_TODO = [
    {
        title: 'Kerjain DRTODO',
        deadline: '2025-04-01',
        desc: 'Kerjain aja biar kelar',
        strip_color: 'royalblue',
    },
    {
        title: 'Deadline Project B',
        deadline: '2025-03-05',
        desc: 'Lorem ipsum...',
    },
    {
        title: 'Deadline Project C',
        deadline: '2025-05-12',
        desc: 'Lorem ipsum...',
        strip_color: 'lime',
    },
    {
        title: 'Deadline Project C',
        deadline: '2025-05-12',
        desc: 'Lorem ipsum...',
        strip_color: 'lime',
    },
    {
        title: 'Deadline Project C',
        deadline: '2025-05-12',
        desc: 'Lorem ipsum...',
        strip_color: 'lime',
    },
    {
        title: 'Deadline Project C',
        deadline: '2025-05-12',
        desc: 'Lorem ipsum...',
        strip_color: 'lime',
    },
];

// const COMPLETED_TODO = [
//     {
//         title: 'Kerjain Project A',
//         deadline: '2025-02-24',
//         desc: 'Kerjain aja biar kelar',
//         strip_color: 'royalblue',
//         completed_date: dayjs().toISOString(),
//     },
// ];

function OnProgressTodoPreview() {
    return (
        <View style={styles.container}>
            <HeaderGroup title="On Progress" subtitle={`(${ON_PROGRESS_TODO.length})`} />
            <FlatList
                data={ON_PROGRESS_TODO}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item, index }) => (
                    <OnProgressTodoCard key={index} title={item.title} deadline={dayjs(item.deadline)} stripColor={item.strip_color} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
    },
    flatListContainer: {
        display: 'flex',
        rowGap: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
});

export default OnProgressTodoPreview;
