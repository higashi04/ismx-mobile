import React, { useState } from "react";
import { Text, 
    TextInput, 
    ScrollView, 
    View, 
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
 } from "react-native";
import { SvgXml } from "react-native-svg";
import  DateTimePicker  from "@react-native-community/datetimepicker";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const hammerSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hammer" viewBox="0 0 16 16">
<path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
</svg>`
const personCircleSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>`
const EyeFill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>`;
const EyeSlashed = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
<path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
<path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
</svg>`;
const calendarSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
<path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
<path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>`

const Register = () => {
    const [text, SetText] = useState("");
    const [toggle, setToggle] = useState(true)
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };
 
    function changeToggle() {
        setToggle(prevToggle => !prevToggle)
    }

    return(
        <ScrollView style={styles.body}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ?  'padidng' : 'height'}
            >
            <View style={styles.registerBox}>
                <View style={styles.box}>
                <SvgXml 
                style={styles.svg}
                xml={personCircleSvg} 
                width="32"
                height="32"
                stroke="black"
                strokeWidth=".5"
                fill="black"
                viewBox="0 0 32 32"/>
                <Text style={styles.inputLabel}>Usuario</Text>
                </View>
                <TextInput 
                    style={styles.input} 
                    placeholder='Escriba el nombre de su cuenta'
                    placeholderTextColor='#eab948'
                 />
                 <View style={styles.box}>
                <SvgXml
                    xml={toggle ? EyeFill : EyeSlashed}
                    style={styles.svgEye}
                    width="48"
                    height="48"
                    stroke="black"
                    strokeWidth=".5"
                    fill="black"
                    viewBox="0 0 32 32"
                    onPress={changeToggle}
                />
                <Text style={styles.inputLabelPass}>Contraseña</Text>
            </View>
            <TextInput
                onChangeText={SetText}
                secureTextEntry={toggle ? true : false}
                style={styles.input}
                value={text}
                placeholder={"Contraseña"}
                placeholderTextColor='#eab948'
            />
                <View style={styles.box}>
                    <SvgXml
                        xml={calendarSvg}
                        width="32"
                        height="32"
                        stroke="black"
                        strokeWidth=".5"
                        fill="black"
                        viewBox="0 -3.5 24 19"
                    />
                    <Text style={styles.inputLabelPass}>Fecha de Nacimiento </Text>
                </View>
                <Pressable style={styles.submit} onPress={showDatepicker} >
                    <Text style={styles.btnText}>
                        Presione para mostrar el calendario
                    </Text>
                </Pressable>
                <Text> Fecha Seleccionada: {date.toLocaleDateString()} </Text>
                {show && (
                    <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                    />
                )}
            </View>

            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#eab948'
    },
    registerBox: {
        backgroundColor: "#fff",
        borderRadius: 20,
        marginTop: 50,
        height: 600,
        marginHorizontal: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
        
      },
      svg: {
        marginLeft: 7,
        marginTop: 35        
      },
      inputLabel: {
        fontSize: 20,
        marginTop: 20
      },
      box: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row-reverse',
      },
      svgEye: {
        marginLeft: 7,
        marginTop: 35  
    },
    inputLabelPass: {
        fontSize: 20,
        marginTop: 17
      },
      submit: {
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
        flexDirection: "row",
      },
      btnText: {
        fontSize: 15,
      },
})

export default Register;