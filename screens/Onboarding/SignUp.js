import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import TextComponent from '../../components/TextComponent';
import TextInputComponent from '../../components/TextInputComponent';
import PrimaryButton from '../../components/PrimaryButton';
import FooterComponent from '../../components/FooterComponent';

const SignUp = ({ navigation }) => {
    const [fName, onChangeFname] = useState('');
    const [lName, onChangeLname] = useState('');
    const [email, onChangeEmail] = useState('');
    const [phone, onChangePhone] = useState('');
    const [pass, onChangePass] = useState('');
    const [cPass, onChangecPass] = useState('');

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                <Feather
                    name="corner-up-left"
                    size={32}
                    color="black"
                />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <TextComponent style={styles.mainText}>Welcome to HC.</TextComponent>
                <TextComponent style={styles.summaryText}>Let's create your host communities account today.</TextComponent>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputRow}>
                    <View style={styles.inputItem}>
                        <Text style={styles.labelText}>First Name</Text>
                        <TextInputComponent
                            iconType='Ionicons'
                            iconName="person-outline"
                            placeholder='e.g Oluwabumi'
                            placeholderTextColor='#cccc'
                            value={fName}
                            onChangeText={onChangeFname}
                            keyboardType='default'
                            autoCapitalize="sentences"
                            secureTextEntry={false}
                            style={styles.inputField}
                        />
                    </View>
                    <View style={styles.inputItem}>
                        <Text style={styles.labelText}>Second Name</Text>
                        <TextInputComponent
                            iconType='Ionicons'
                            iconName="person-outline"
                            placeholder='e.g Abdulahi'
                            placeholderTextColor='#cccc'
                            value={lName}
                            onChangeText={onChangeLname}
                            keyboardType='default'
                            autoCapitalize="sentences"
                            secureTextEntry={false}
                            style={styles.inputField}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputRow}>
                    <View style={styles.inputItem}>
                        <Text style={styles.labelText}>Email Address</Text>
                        <TextInputComponent
                            iconType='MaterialIcons'
                            iconName="email"
                            placeholder='example@email.com'
                            placeholderTextColor='#cccc'
                            value={email}
                            onChangeText={onChangeEmail}
                            keyboardType='email-address'
                            autoCapitalize="none"
                            secureTextEntry={false}
                            style={styles.inputField}
                        />
                    </View>
                    <View style={styles.inputItem}>
                        <Text style={styles.labelText}>Phone Number</Text>
                        <TextInputComponent
                            iconType='AntDesign'
                            iconName="phone"
                            placeholder='Phone Number'
                            placeholderTextColor='#cccc'
                            value={phone}
                            onChangeText={onChangePhone}
                            keyboardType='phone-pad'
                            autoCapitalize='none'
                            secureTextEntry={false}
                            style={styles.inputField}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputRow}>
                    <View style={styles.inputItem}>
                        <Text style={styles.labelText}>Password</Text>
                        <TextInputComponent
                            iconType='AntDesign'
                            iconName="lock"
                            placeholder='**********'
                            placeholderTextColor='#cccc'
                            value={pass}
                            onChangeText={onChangePass}
                            keyboardType='default'
                            autoCapitalize="sentences"
                            secureTextEntry={true}
                            style={styles.inputField}
                        />
                    </View>
                    <View style={styles.inputItem}>
                        <Text style={styles.labelText}>Confirm Password</Text>
                        <TextInputComponent
                            iconType='AntDesign'
                            iconName="lock"
                            placeholder='**********'
                            placeholderTextColor='#cccc'
                            value={cPass}
                            onChangeText={onChangecPass}
                            keyboardType='default'
                            autoCapitalize="sentences"
                            secureTextEntry={true}
                            style={styles.inputField}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.signUpContainer}>
                <PrimaryButton onPress={() => navigation.navigate('CreateAccount')}>Sign Up</PrimaryButton>
            </View>
            <View style={styles.footerContainer}>
                <FooterComponent
                    onPress={() => navigation.navigate('SignIn')}
                    buttonText=' Sign In'
                    showFooterText={true}
                >
                    Already have an account?
                </FooterComponent>
            </View>
        </ScrollView>
    )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: 'center',
    },
    icon: {
        marginTop: 20,
        paddingHorizontal: windowWidth * 0.1,
    },
    textContainer: {
        paddingHorizontal: windowWidth * 0.1,
        marginVertical: windowHeight * 0.02,
    },
    mainText: {
        color: 'black',
        fontSize: 28,
        marginTop: 10,
    },
    summaryText: {
        fontSize: 22,
        fontWeight: 'normal',
        color: 'black',
    },
    inputContainer: {
        marginVertical: 5
    },
    inputRow: {
        paddingHorizontal: windowWidth * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputItem: {
        flex: 1,
        margin: 5,
    },
    labelText: {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: windowHeight * 0.001,
    },
    inputField: {
        padding: 10,
    },
    signUpContainer: {
        marginTop: windowHeight * 0.03,
    },
    footerContainer: {
        marginTop: windowHeight * 0.03,
    }
});

export default SignUp;
