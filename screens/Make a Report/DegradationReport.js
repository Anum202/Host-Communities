import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import TextInputComponent from '../../components/TextInputComponent';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';

const DegradationReport = ({ navigation }) => {

    const [community, onChangeCommunity] = useState('');
    const [project, onChangeProject] = useState('');
    const [location, onChangeLocation] = useState('');
    const [reportDetails, onChangeReportDetails] = useState('');
    const [image, setImage] = useState(null);

    // Function to open the image picker
    const openImagePicker = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access photos is required!');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (!pickerResult.canceled) {
            if (pickerResult.assets && pickerResult.assets.length > 0) {
                const selectedAsset = pickerResult.assets[0];
                setImage(selectedAsset.uri);
            }
        }
    };

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
                    <Text style={styles.mainText}>Environmental Degradation</Text>
                    <Text style={styles.additionalText}>Report any environmental degradation incident.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputRow}>
                        <View style={styles.inputItem}>
                            <Text style={styles.labelText}>Community</Text>
                            <TextInputComponent
                                iconType='AntDesign'
                                iconName="solution1"
                                placeholder='e.g Afao-Ekiti-Ekiti'
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
                            <Text style={styles.labelText}>Mining Project</Text>
                            <TextInputComponent
                                iconType='image-icon'
                                iconName="image-icon"
                                placeholder='e.g Stone Quaring'
                                placeholderTextColor='#cccc'
                                value={project}
                                onChangeText={onChangeProject}
                                keyboardType='default'
                                autoCapitalize="sentences"
                                secureTextEntry={false}
                                style={styles.inputField}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Location of incident</Text>
                    <TextInputComponent
                        iconType='EvilIcons'
                        iconName="location"
                        placeholder='e.g Mile 4, Agashi community, Langtang South '
                        placeholderTextColor='#cccc'
                        value={location}
                        onChangeText={onChangeLocation}
                        keyboardType='default'
                        autoCapitalize="sentences"
                        secureTextEntry={false}
                        style={styles.inputField}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Report Details</Text>
                    <TextInput
                        placeholder='Write your detail report here'
                        placeholderTextColor={Colors.placeholderText}
                        value={reportDetails}
                        onChangeText={onChangeReportDetails}
                        multiline={true}
                        numberOfLines={6}
                        textAlignVertical='top'
                        style={styles.detailInput}
                    />
                </View>
                <Text style={[styles.labelText, { marginLeft: 10, }]}>Photos of Incident</Text>
                <TouchableOpacity onPress={openImagePicker} style={styles.imagePickerButton}>
                    <View style={styles.imagePickerContent}>
                        <FontAwesome name="image" size={20} color="gray" style={styles.imagePickerIcon} />
                        <Text style={styles.imagePickerText}>Upload photos of the present state of CDA Project. We recommend a 1024 x 512 pixel JPG or PNG under 5MB in size. </Text>
                    </View>
                    {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
                </TouchableOpacity>
                <PrimaryButton style={styles.btn} onPress={() => navigation.navigate('ReportSubmission')}>Submit Report</PrimaryButton>
                <SecondaryButton style={styles.btn}>Cancel</SecondaryButton>
            </ScrollView>
        </View>
    )
}

export default DegradationReport;

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
    detailInput: {
        borderWidth: 0.5,
        borderRadius: 20,
        borderColor: Colors.lightGrey,
        color: 'black',
        fontSize: 11,
        paddingLeft: windowWidth * 0.05,
        paddingTop: windowHeight * 0.02,
    },
    imagePreview: {
        width: '80%',
        height: 100,
        alignSelf: 'center',
    },
    imagePickerButton: {
        borderColor: Colors.primaryColor,
        borderWidth: 1.5,
        borderStyle: 'dotted',
        borderRadius: 10,
        alignSelf: 'center',
        padding: 15,
        width: '90%',
        marginVertical: windowHeight * 0.01,
    },
    imagePickerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: windowWidth * 0.05,
    },
    imagePickerIcon: {
        marginRight: 10,
    },
    imagePickerText: {
        color: 'gray',
        fontSize: 11,
    },
    btn: {
        marginVertical: windowHeight * 0.01,
    }
})