import React from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";

const HomeScreen = ({navigation}) => {
    return(
        <ScrollView style={styles.body}>
            <View>
                <Text style={styles.title}>InstantSolutionsMx</Text>
            </View>
            <View>
                <Pressable style={styles.navBtn} onPress={() => navigation.navigate('Register')} >
                    <Text>Registrarse</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#eab948'
    },
    title: {
        fontSize: 35,
        marginLeft: 42,
        marginTop: 25
    },
    navBtn: {
        backgroundColor: "#2a9d8f",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginHorizontal: 100,
        marginVertical: 20,
        marginBottom: 20,
        flexDirection: "row"
    }
})

export default HomeScreen;