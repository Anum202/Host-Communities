import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import TextComponent from '../../components/TextComponent';
import TextInputComponent from '../../components/TextInputComponent';
import PrimaryButton from '../../components/PrimaryButton';
import FooterComponent from '../../components/FooterComponent';

const SignIn = ({ navigation }) => {
    const [email, onChangeEmail] = useState('');
    const [pass, onChangePass] = useState('');

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
                <TextComponent style={styles.mainText}>Welcome Back!</TextComponent>
                <TextComponent style={styles.summaryText}>Let's sign you into your host communities account.</TextComponent>
            </View>

            <View style={styles.inputContainer}>
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
                    style={[styles.inputField, { textAlign: 'left' }]}
                />
            </View>

            <View style={styles.inputContainer}>
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
                    style={[styles.inputField, { textAlign: 'left' }]}
                />
            </View>

            <TouchableOpacity style={styles.recoverContainer}>
                <Text style={styles.recoverText}>Recover Password</Text>
            </TouchableOpacity>

            <View style={styles.signInContainer}>
                <PrimaryButton onPress={() => navigation.navigate('Dashboard')}>Sign In</PrimaryButton>
            </View>
            <View style={styles.footerContainer}>
                <FooterComponent
                    onPress={() => navigation.navigate('SignUp')}
                    buttonText=' Sign Up'
                    showFooterText={true}
                >
                    Don't have an account?
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
        marginVertical: windowHeight * 0.01,
        paddingHorizontal: windowWidth * 0.05,
    },
    labelText: {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'left',
        marginVertical: windowHeight * 0.001,
    },
    inputField: {
        width: '100%',
    },
    recoverContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginHorizontal: windowWidth * 0.06,
    },
    recoverText: {
        color: Colors.green,
        opacity: 0.7,
    },
    signInContainer: {
        marginTop: windowHeight * 0.03,
    },
    footerContainer: {
        marginTop: windowHeight * 0.03,
    }
});

export default SignIn;








