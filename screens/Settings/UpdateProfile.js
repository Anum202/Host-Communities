import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import Colors from '../../constants/Colors';
import TextInputComponent from '../../components/TextInputComponent';
import PrimaryButton from '../../components/PrimaryButton';

const UpdateProfile = ({ navigation }) => {

    const [fName, onChangefName] = useState('');
    const [lName, onChangelName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [phone, onChangePhone] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
    };

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
                <Text style={styles.mainText}>Update Profile</Text>
                <Text style={styles.additionalText}>Change or make updates to your profile easily.</Text>
            </View>

            <View style={styles.profileImageContainer}>
                <View style={styles.imagePickerContainer}>
                    <Text style={[styles.labelText, { marginBottom: 5 }]}>Profile Picture</Text>
                    <TouchableOpacity onPress={pickImage}>
                        {profileImage ? (
                            <Image source={{ uri: profileImage }} style={styles.profileImage} />
                        ) : (
                            <Image source={require('../../assets/images/ProfileAvatar.png')} />
                        )}
                    </TouchableOpacity>
                </View>
                <View style={styles.profileTextContainer}>
                    <Text style={styles.profileText}>Tab to Change</Text>
                    <Text style={styles.additionalText}>Square image atleast 120px by 120px</Text>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>First Name</Text>
                <TextInputComponent
                    iconType='Ionicons'
                    iconName="person-outline"
                    placeholder=''
                    placeholderTextColor='#cccc'
                    value={fName}
                    onChangeText={onChangefName}
                    keyboardType='default'
                    autoCapitalize="sentences"
                    secureTextEntry={false}
                    style={[styles.inputField, { textAlign: 'left' }]}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Second Name</Text>
                <TextInputComponent
                    iconType='Ionicons'
                    iconName="person-outline"
                    placeholder=''
                    placeholderTextColor='#cccc'
                    value={lName}
                    onChangeText={onChangelName}
                    keyboardType='default'
                    autoCapitalize="sentences"
                    secureTextEntry={false}
                    style={[styles.inputField, { textAlign: 'left' }]}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Email Address</Text>
                <TextInputComponent
                    iconType='MaterialIcons'
                    iconName="email"
                    placeholder=''
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
                <Text style={styles.labelText}>Phone Number</Text>
                <TextInputComponent
                    iconType='AntDesign'
                    iconName="phone"
                    placeholder=''
                    placeholderTextColor='#cccc'
                    value={phone}
                    onChangeText={onChangePhone}
                    keyboardType='phone-pad'
                    autoCapitalize="none"
                    secureTextEntry={false}
                    style={[styles.inputField, { textAlign: 'left' }]}
                />
            </View>
            <View style={styles.signUpContainer}>
                <PrimaryButton >Update Profile</PrimaryButton>
            </View>
        </View>
    );
};

export default UpdateProfile;

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
    profileImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: windowWidth * 0.04,
        marginVertical: windowHeight * 0.02,
    },
    imagePickerContainer: {
        flex: 1,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileTextContainer: {
        flex: 2,
    },
    profileText: {
        fontSize: 16,
        fontWeight: 'bold',
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
    signUpContainer: {
        marginTop: windowHeight * 0.05,
    },
});
