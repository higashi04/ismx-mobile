import { StyleSheet, Text } from "react-native";

export default function Image() {
    return(
        <Text style={styles.img}>ImagePlaceHolder</Text>
    )
}

const styles = StyleSheet.create({
    img: {
        borderColor: 'red',
        borderWidth: 5
    }
})