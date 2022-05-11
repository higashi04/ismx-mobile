import { StyleSheet, Text } from 'react-native';
import React from 'react';


const Title = () => {
    return(
        <Text style={styles.h1}>InstantSolutionsMx</Text>
    );
}

const styles = StyleSheet.create({
    h1: {
        backgroundColor: 'magenta',
        fontSize: 45,
        marginHorizontal: 20
    }
})

export default Title