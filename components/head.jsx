import { StyleSheet, Text } from 'react-native';

export default function Title() {
    return(
        <Text style={styles.h1}>InstantSolutionsMx</Text>
    );
}

const styles = StyleSheet.create({
    h1: {
        backgroundColor: 'magenta',
        fontSize: 45
    }
})