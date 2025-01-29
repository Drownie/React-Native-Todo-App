import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ElevationButtonProps = TouchableOpacityProps & {};

function ElevationButton({
    children,
    style,
    ...props
}: ElevationButtonProps) {
    return (
        <TouchableOpacity style={StyleSheet.flatten([styles.container, style])} {...props} >
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
    },
});

export default ElevationButton;
