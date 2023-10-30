import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons, SimpleLineIcons, EvilIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import TextInputComponent from '../../components/TextInputComponent';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';
import { stateOptions } from '../../utils/stateOptions';

const ViolenceReport = ({ navigation }) => {

    const [state, onChangeState] = useState('');
    const [city, onChangeCity] = useState('');
    const [nameAssaulted, onChangeNameAssaulted] = useState('');
    const [addressAssaulted, onChangeAddressAssaulted] = useState('');
    const [phone, onChangePhone] = useState('');
    const [nameAssaulter, onChangeNameAssaulter] = useState('');
    const [addressAssaulter, onChangeAddressAssaulter] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <SimpleLineIcons name="arrow-left" size={22} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>CDA Project</Text>
                <TouchableOpacity style={styles.iconContainer}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.mainText}>Violence against women </Text>
                    <Text style={styles.additionalText}>Report incidents of violence against women in your host community.</Text>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputRow}>
                        <View style={styles.inputItem}>
                            <Text style={styles.labelText}>State of Incident</Text>
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
                        <View style={styles.inputItem}>
                            <Text style={styles.labelText}>City of Incident</Text>
                            <TextInputComponent
                                iconType='EvilIcons'
                                iconName="location"
                                placeholder='e.g Abakaliki'
                                placeholderTextColor='#cccc'
                                value={city}
                                onChangeText={onChangeCity}
                                keyboardType='default'
                                autoCapitalize="sentences"
                                secureTextEntry={false}
                                style={styles.inputField}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Name of person Assaulted</Text>
                    <TextInputComponent
                        iconType='Ionicons'
                        iconName="person-outline"
                        placeholder='e.g Oluwabumi'
                        placeholderTextColor='#cccc'
                        value={nameAssaulted}
                        onChangeText={onChangeNameAssaulted}
                        keyboardType='default'
                        autoCapitalize="sentences"
                        secureTextEntry={false}
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Address of person Assaulted</Text>
                    <TextInputComponent
                        iconType='EvilIcons'
                        iconName="location"
                        placeholder='e.g 55 lke road, opp, Nema filing station'
                        placeholderTextColor='#cccc'
                        value={addressAssaulted}
                        onChangeText={onChangeAddressAssaulted}
                        keyboardType='default'
                        autoCapitalize="sentences"
                        secureTextEntry={false}
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Phone of person Assaulted</Text>
                    <TextInputComponent
                        iconType='AntDesign'
                        iconName="phone"
                        placeholder='e.g 09067000005'
                        placeholderTextColor='#cccc'
                        value={phone}
                        onChangeText={onChangePhone}
                        keyboardType='phone-pad'
                        autoCapitalize='none'
                        secureTextEntry={false}
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Name of Assaulter</Text>
                    <TextInputComponent
                        iconType='Ionicons'
                        iconName="person-outline"
                        placeholder='e.g Oluwabumi'
                        placeholderTextColor='#cccc'
                        value={nameAssaulter}
                        onChangeText={onChangeNameAssaulter}
                        keyboardType='default'
                        autoCapitalize="sentences"
                        secureTextEntry={false}
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Address of Assaulter</Text>
                    <TextInputComponent
                        iconType='EvilIcons'
                        iconName="location"
                        placeholder='e.g 55 lke road, opp, Nema filing station'
                        placeholderTextColor='#cccc'
                        value={addressAssaulter}
                        onChangeText={onChangeAddressAssaulter}
                        keyboardType='default'
                        autoCapitalize="sentences"
                        secureTextEntry={false}
                        style={styles.inputField}
                    />
                </View>
                <PrimaryButton style={styles.btn} onPress={() => navigation.navigate('ViolenceReport2')}>Continue</PrimaryButton>
                <SecondaryButton style={styles.btn}>Cancel</SecondaryButton>
            </ScrollView>
        </View>
    )
}

export default ViolenceReport;

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
    scrollContainer: {
        flex: 1,
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
    inputRow: {
        paddingHorizontal: windowWidth * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputItem: {
        flex: 1,
        margin: 5,
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
    btn: {
        marginVertical: windowHeight * 0.01,
    }
})