import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign, FontAwesome, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const TextInputComponent = ({ iconType, iconName, placeholder, value, onChangeText, keyboardType, autoCapitalize, secureTextEntry, style, }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const renderIcon = () => {
        if (iconType === 'Ionicons') {
            return (
                <Ionicons name={iconName} size={18} color={Colors.placeholderText} style={styles.icon} />
            );
        }
        else if (iconType === 'MaterialIcons') {
            return (
                <MaterialIcons name={iconName} size={18} color={Colors.placeholderText} style={styles.icon} />
            );
        }
        else if (iconType === 'AntDesign') {
            return (
                <AntDesign name={iconName} size={18} color={Colors.placeholderText} style={styles.icon} />
            )
        }
        else if (iconType === 'EvilIcons') {
            return (
                <EvilIcons name={iconName} size={18} color={Colors.placeholderText} style={styles.icon} />
            )
        }
        else if (iconType === 'MaterialCommunityIcons') {
            return (
                <MaterialCommunityIcons name={iconName} size={18} color={Colors.placeholderText} style={styles.icon} />
            )
        }
        else if (iconType === 'FontAwesome') {
            return (
                <FontAwesome name={iconName} size={18} color={Colors.placeholderText} style={styles.icon} />
            )
        }
    }

    return (
        <View style={styles.inputWrapper}>
            {renderIcon()}
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={Colors.placeholderText}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry && !isPasswordVisible}
                style={[styles.textInput, style]}
            />
            {secureTextEntry && (
                <TouchableOpacity
                    style={styles.toggleIcon}
                    onPress={togglePasswordVisibility}
                >
                    {isPasswordVisible ? (
                        <FontAwesome name="eye" size={18} color={Colors.placeholderText} />
                    ) : (
                        <FontAwesome name="eye-slash" size={18} color={Colors.placeholderText} />
                    )}
                </TouchableOpacity>
            )}
        </View>
    )
}

export default TextInputComponent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 2,
    },
    icon: {
        position: "absolute",
        paddingLeft: windowWidth * 0.02,
        paddingRight: 5,
    },
    textInput: {
        width: windowWidth * 0.45,
        height: 45,
        borderWidth: 0.5,
        borderRadius: 20,
        borderColor: Colors.lightGrey,
        color: 'black',
        fontSize: 11,
        paddingLeft: windowWidth * 0.09,
    },
    toggleIcon: {
        position: "absolute",
        right: 8,
    },
});