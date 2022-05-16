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

import { emailSvg, personCircleSvg, EyeFill, EyeSlashed, calendarSvg, phoneSvg } from "../assets/svgsPaths";



const Register = () => {
    const [text, SetText] = useState("");
    const [toggle, setToggle] = useState(true)
    const [toggleConfirm, setToggleConfirm] = useState(true)
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
    function changeToggleConfirm() {
        setToggleConfirm(prevToggle => !prevToggle)
    }

    return(
        <ScrollView style={styles.body}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ?  'padding' : 'height'}
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
                    label='username' 
                    placeholder='Escriba el nombre de su cuenta'
                    placeholderTextColor='#eab948'
                 />
                 <View style={styles.box}>
                    <SvgXml
                        style={styles.svg}
                        xml={emailSvg}
                        width="32"
                        height="32"
                        stroke="black"
                        strokeWidth=".5"
                        fill="black"
                        viewBox="0 0 32 32"
                    />
                    <Text style={styles.inputLabel}>Email</Text>
                 </View>
                 <TextInput
                    style={styles.input}
                    label='email'
                    keyboardType="email-address"
                    placeholder="ejemplo@mail.com"
                    placeholderTextColor='#eab948' 
                 />
                 <View style={styles.box}>
                     <SvgXml
                        style={styles.svg}
                        xml={phoneSvg}
                        width="32"
                        height="32"
                        stroke="black"
                        strokeWidth=".5"
                        fill="black"
                        viewBox="0 0 32 32"
                     />
                     <Text style={styles.inputLabel}>Teléfono</Text>
                 </View>
                 <TextInput
                    style={styles.input}
                    label='phone'
                    keyboardType="phone-pad"
                    placeholder="123 456 78 91"
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
                    label='password'
                    placeholder={"Contraseña"}
                    placeholderTextColor='#eab948'
                />
                <View style={styles.box}>
                <SvgXml
                    xml={toggleConfirm ? EyeFill : EyeSlashed}
                    style={styles.svgEye}
                    width="48"
                    height="48"
                    stroke="black"
                    strokeWidth=".5"
                    fill="black"
                    viewBox="0 0 32 32"
                    onPress={changeToggleConfirm}
                />
                    <Text style={styles.inputLabelPass}>Confirmar Contraseña</Text>
                </View>
                <TextInput
                    secureTextEntry={toggleConfirm ? true : false}
                    style={styles.input}
                    label='passwordConfirm'
                    placeholder={"Confirmar Contraseña"}
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
                <View style={styles.box}>
                    <Text style={styles.inputLabel}> {date.toLocaleDateString()} </Text>
                </View>
                <View style={styles.datePicker}>
                {show && (
                    <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    label='dob'
                    onChange={onChange}
                    />
                )}
                </View>
                <Pressable style={styles.submit} onPress={showDatepicker} >
                    <Text style={styles.btnText}>
                        Calendario
                    </Text>
                </Pressable>

            </View>
            

            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#eab948',
        height: 990
    },
    registerBox: {
        backgroundColor: "#fff",
        borderRadius: 20,
        marginTop: 50,
        height: 900,
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
      datePicker: {
          justifyContent: 'center',
          paddingRight: 120,
          paddingTop: 20
      }
})

export default Register;