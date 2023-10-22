import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Feather, FontAwesome, MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import TextComponent from '../../components/TextComponent';
import TextInputComponent from '../../components/TextInputComponent';
import PrimaryButton from '../../components/PrimaryButton';
import FooterComponent from '../../components/FooterComponent';
import { stateOptions } from '../../utils/stateOptions';
import { lgaOptions } from '../../utils/lgaOptions';
import { ageOptions } from '../../utils/ageOptions';
import { genderOptions } from '../../utils/genderOptions';

const CreateAccount = ({ navigation }) => {
    const [community, onChangeCommunity] = useState('');
    const [position, onChangePosition] = useState('');
    const [state, onChangeState] = useState('');
    const [lga, onChangeLGA] = useState('');
    const [gender, onChangeGender] = useState('');
    const [age, onChangeAge] = useState('');

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
                        <Text style={styles.labelText}>Community</Text>
                        <TextInputComponent
                            iconType='AntDesign'
                            iconName="solution1"
                            placeholder='e.g Ado Ekiti'
                            placeholderTextColor='#cccc'
                            value={community}
                            onChangeText={onChangeCommunity}
                            keyboardType='default'
                            autoCapitalize="sentences"
                            secureTextEntry={false}
                            style={styles.inputField}
                        />
                    </View>
                    <View style={styles.inputItem}>
                        <Text style={styles.labelText}>Position in Community</Text>
                        <TextInputComponent
                            iconType='MaterialIcons'
                            iconName="group-add"
                            placeholder='Select Postition'
                            placeholderTextColor='#cccc'
                            value={position}
                            onChangeText={onChangePosition}
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
                                <Picker.Item label="Select State" value="Select State" style={state === "Select State" ? styles.defaultPickerLabelStyle : styles.pickerLabel} />
                                {stateOptions.map((option) => (
                                    <Picker.Item label={option} value={option} key={option} style={styles.pickerLabel} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.inputItem}>
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
                                <Picker.Item label="Select LGA" value="Select LGA" style={lga === "Select LGA" ? styles.defaultPickerLabelStyle : styles.pickerLabel} />
                                {lgaOptions[state] &&
                                    lgaOptions[state].map((option) => (
                                        <Picker.Item label={option} value={option} key={option} style={styles.pickerLabel} />
                                    ))
                                }
                            </Picker>
                        </View>

                    </View>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputRow}>
                    <View style={styles.inputItem}>
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
                                <Picker.Item label="Select Gender" value="Select Gender" style={gender === "Select Gender" ? styles.defaultPickerLabelStyle : styles.pickerLabel} />
                                {genderOptions.map((option) => (
                                    <Picker.Item label={option} value={option} key={option} style={styles.pickerLabel} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.inputItem}>
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
                                <Picker.Item label="Select Age" value="Select Age" style={age === "Select Age" ? styles.defaultPickerLabelStyle : styles.pickerLabel} />
                                {ageOptions.map((option) => (
                                    <Picker.Item label={option} value={option} key={option} style={styles.pickerLabel}
                                    />
                                ))}
                            </Picker>
                        </View>
                    </View>

                </View>
            </View>

            <View style={styles.createAccountContainer}>
                <PrimaryButton onPress={() => navigation.navigate('SignIn')}>Create Account</PrimaryButton>
            </View>
            <View style={styles.footerContainer}>
                <FooterComponent
                    onPress={() => navigation.navigate('SignIn')}
                    buttonText=' Sign In'
                >
                    Already have an account?
                </FooterComponent>
            </View>

            <View style={styles.agreementContainer}>
                <Text>
                    By creating an account, you agree to {' '}
                </Text>
                <View style={styles.linkTextContainer}>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>terms & conditions</Text>
                    </TouchableOpacity>
                    <Text> and </Text>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>privacy policy</Text>
                    </TouchableOpacity>
                </View>
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
    createAccountContainer: {
        marginTop: windowHeight * 0.01,
    },
    footerContainer: {
        marginTop: windowHeight * 0.02,
    },
    agreementContainer: {
        alignItems: 'center',
        marginTop: windowHeight * 0.02,
    },
    linkTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    linkText: {
        color: Colors.green,
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
});

export default CreateAccount;
