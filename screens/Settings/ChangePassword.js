import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import TextInputComponent from '../../components/TextInputComponent';
import PrimaryButton from '../../components/PrimaryButton';

const ChangePassword = ({ navigation }) => {
    const [oldPass, onChangeOldPass] = useState('');
    const [newPass, onChangeNewPass] = useState('');
    const [retype, onChangeRetype] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <SimpleLineIcons name="arrow-left" size={22} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Settings</Text>
                <TouchableOpacity style={styles.iconContainer}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.mainText}>Change Password</Text>
                <Text style={styles.additionalText}>Change your Host Communities password below.</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Old Password</Text>
                <TextInputComponent
                    iconType='AntDesign'
                    iconName="lock"
                    placeholder='**********'
                    placeholderTextColor='#cccc'
                    value={oldPass}
                    onChangeText={onChangeOldPass}
                    keyboardType='default'
                    autoCapitalize="sentences"
                    secureTextEntry={true}
                    style={[styles.inputField, { textAlign: 'left' }]}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>New Password</Text>
                <TextInputComponent
                    iconType='AntDesign'
                    iconName="lock"
                    placeholder='**********'
                    placeholderTextColor='#cccc'
                    value={newPass}
                    onChangeText={onChangeNewPass}
                    keyboardType='default'
                    autoCapitalize="sentences"
                    secureTextEntry={true}
                    style={[styles.inputField, { textAlign: 'left' }]}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Retype New Password</Text>
                <TextInputComponent
                    iconType='AntDesign'
                    iconName="lock"
                    placeholder='**********'
                    placeholderTextColor='#cccc'
                    value={retype}
                    onChangeText={onChangeRetype}
                    keyboardType='default'
                    autoCapitalize="sentences"
                    secureTextEntry={true}
                    style={[styles.inputField, { textAlign: 'left' }]}
                />
            </View>
            <View style={styles.signUpContainer}>
                <PrimaryButton>Change Password</PrimaryButton>
            </View>
        </View>
    )
}

export default ChangePassword;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.lightBackgroundColor,
        paddingHorizontal: 16,
        height: windowHeight * 0.15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 10,
    },
    textContainer: {
        paddingHorizontal: windowWidth * 0.06,
    },
    mainText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    additionalText: {
        fontSize: 13,
        marginTop: windowHeight * 0.01,
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
        marginVertical: windowHeight * 0.01,
    },
    inputField: {
        width: '100%',
    },
    signUpContainer: {
        marginTop: windowHeight * 0.05,
    },
});
