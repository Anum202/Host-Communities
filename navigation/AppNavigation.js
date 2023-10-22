import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GetStarted from '../screens/Onboarding/GetStarted';
import SignUp from '../screens/Onboarding/SignUp';
import CreateAccount from '../screens/Onboarding/CreateAccount';
import SignIn from '../screens/Onboarding/SignIn';
import Dashboard from '../screens/Onboarding/Dashboard';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="GetStarted">
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="CreateAccount"
                    component={CreateAccount}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="GetStarted"
                    component={GetStarted}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;