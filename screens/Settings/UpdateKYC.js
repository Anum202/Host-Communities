import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons, SimpleLineIcons, EvilIcons, FontAwesome } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import TextInputComponent from '../../components/TextInputComponent';
import PrimaryButton from '../../components/PrimaryButton';
import { stateOptions } from '../../utils/stateOptions';
import { lgaOptions } from '../../utils/lgaOptions';
import { ageOptions } from '../../utils/ageOptions';
import { genderOptions } from '../../utils/genderOptions';

const UpdateKYC = ({ navigation }) => {

    const [community, onChangeCommunity] = useState('');
    const [position, onChangePosition] = useState('');
    const [state, onChangeState] = useState('');
    const [lga, onChangeLGA] = useState('');
    const [gender, onChangeGender] = useState('');
    const [age, onChangeAge] = useState('');

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
                <Text style={styles.mainText}>Update KYC</Text>
                <Text style={styles.additionalText}>Change or make updates to your profile easily.</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Community</Text>
                <TextInputComponent
                    iconType='AntDesign'
                    iconName="solution1"
                    placeholder=''
                    placeholderTextColor='#cccc'
                    value={community}
                    onChangeText={onChangeCommunity}
                    keyboardType='default'
                    autoCapitalize="sentences"
                    secureTextEntry={false}
                    style={[styles.inputField, { textAlign: 'left' }]}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Position in Community</Text>
                <TextInputComponent
                    iconType='MaterialIcons'
                    iconName="group-add"
                    placeholder=''
                    placeholderTextColor='#cccc'
                    value={position}
                    onChangeText={onChangePosition}
                    keyboardType='default'
                    autoCapitalize="sentences"
                    secureTextEntry={false}
                    style={[styles.inputField, { textAlign: 'left' }]}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>State</Text>
                <View style={styles.pickerContainer}>
                    <EvilIcons
                        name="location"
                        size={18}
                        color="#cccc"
                        style={styles.pickerIcon}
                    />
                    <Picker
                        selectedValue={state}
                        onValueChange={(itemValue, itemIndex) => onChangeState(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select" value="Select" style={state === "Select" ? styles.defaultPickerLabelStyle : styles.pickerLabel} />
                        {stateOptions.map((option) => (
                            <Picker.Item label={option} value={option} key={option} style={styles.pickerLabel} />
                        ))}
                    </Picker>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>LGA</Text>
                <View style={styles.pickerContainer}>
                    <EvilIcons
                        name="location"
                        size={18}
                        color="#cccc"
                        style={styles.pickerIcon}
                    />
                    <Picker
                        selectedValue={lga}
                        onValueChange={(itemValue, itemIndex) => onChangeLGA(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select" value="Select" style={state === "Select" ? styles.defaultPickerLabelStyle : styles.pickerLabel} />
                        {lgaOptions[state] &&
                            lgaOptions[state].map((option) => (
                                <Picker.Item label={option} value={option} key={option} style={styles.pickerLabel} />
                            ))
                        }
                    </Picker>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Gender</Text>
                <View style={styles.pickerContainer}>
                    <MaterialCommunityIcons
                        name="gender-male-female"
                        size={18}
                        color="#cccc"
                        style={styles.pickerIcon}
                    />
                    <Picker
                        selectedValue={gender}
                        onValueChange={(itemValue, itemIndex) => onChangeGender(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select" value="Select" style={state === "Select" ? styles.defaultPickerLabelStyle : styles.pickerLabel} />
                        {genderOptions.map((option) => (
                            <Picker.Item label={option} value={option} key={option} style={styles.pickerLabel} />
                        ))}
                    </Picker>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Age Bracket</Text>
                <View style={styles.pickerContainer}>
                    <FontAwesome
                        name="id-card-o"
                        size={18}
                        color="#cccc"
                        style={styles.pickerIcon}
                    />
                    <Picker
                        selectedValue={age}
                        onValueChange={(itemValue, itemIndex) => onChangeAge(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select" value="Select" style={state === "Select" ? styles.defaultPickerLabelStyle : styles.pickerLabel} />
                        {ageOptions.map((option) => (
                            <Picker.Item label={option} value={option} key={option} style={styles.pickerLabel} />
                        ))}
                    </Picker>
                </View>
            </View>
            <View style={styles.signUpContainer}>
                <PrimaryButton >Update Profile</PrimaryButton>
            </View>

        </View>
    )
}

export default UpdateKYC;

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
        marginVertical: windowHeight * 0.001,
    },
    inputField: {
        width: '100%',
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 20,
        borderColor: Colors.lightGrey,
    },
    picker: {
        flex: 1,
    },
    pickerLabel: {
        fontSize: 11,
    },
    defaultPickerLabelStyle: {
        fontSize: 11,
        color: 'gray',
        fontWeight: 'bold',
    },
    pickerIcon: {
        paddingLeft: windowWidth * 0.01,
    },
    signUpContainer: {
        marginTop: windowHeight * 0.05,
    },
});
