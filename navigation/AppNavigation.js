import 'react-native-gesture-handler';
import { View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../constants/Colors';
import GetStarted from '../screens/Onboarding/GetStarted';
import SignUp from '../screens/Onboarding/SignUp';
import CreateAccount from '../screens/Onboarding/CreateAccount';
import SignIn from '../screens/Onboarding/SignIn';
import Dashboard from '../screens/Onboarding/Dashboard';
import Settings from '../screens/Settings/Settings';
import UpdateProfile from '../screens/Settings/UpdateProfile';
import UpdateKYC from '../screens/Settings/UpdateKYC';
import NotificationSettings from '../screens/Settings/NotificationSettings';
import ChangePassword from '../screens/Settings/ChangePassword';
import ContactUs from '../screens/Settings/ContactUs';
import DeleteAccount from '../screens/Settings/DeleteAccount';
import CDAProject from '../screens/CDAs Projects/CDAProject';
import Reports from '../screens/Make a Report/Reports';
import CDAProjectReport from '../screens/Make a Report/CDAProjectReport';
import ViolenceReport from '../screens/Make a Report/ViolenceReport';
import DegradationReport from '../screens/Make a Report/DegradationReport';
import ReportSubmission from '../screens/Make a Report/ReportSubmission';
import ReportsHomeScreen from '../screens/Make a Report/ReportsHomeScreen';
import ViolenceReport2 from '../screens/Make a Report/ViolenceReport2';
import Libraries from '../screens/Libraries & Maps/Libraries';
import Maps from '../screens/Libraries & Maps/Maps';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

//array for custom tab icons
const tabs = [
    {
        name: 'TabsDashboard',
        component: Dashboard,
        source: require('../assets/images/Dashboard.png'),
    },
    {
        name: 'CDAProject',
        component: CDAProject,
        source: require('../assets/images/CDAsProjects.png'),
    },
    {
        name: 'Reports',
        component: Reports,
        source: require('../assets/images/Reports.png'),
    },
    {
        name: 'Libraries',
        component: Libraries,
        source: require('../assets/images/Libraries.png'),
    },
    {
        name: 'Maps',
        component: Maps,
        source: require('../assets/images/Map.png'),
    },

];

//function for Tab Navigation
function TabNavigator() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    const tab = tabs.find((tab) => tab.name === route.name);
                    const backgroundColor = focused ? Colors.iconBackground : 'transparent';

                    return (
                        <View style={{ backgroundColor, borderRadius: 25, padding: 10 }}>
                            <Image
                                source={tab.source}
                                style={{
                                    width: focused ? 20 : 20,
                                    height: focused ? 20 : 20,
                                    tintColor: focused ? 'red' : 'gray',
                                }}
                            />
                        </View>
                    );
                },
                tabBarLabel: () => null,
            })}
        >
            {tabs.map((tab) => (
                <Tabs.Screen key={tab.name} name={tab.name} component={tab.component} />
            ))}
        </Tabs.Navigator>
    );
}


const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="GetStarted"
                screenOptions={{
                    contentStyle: {
                        backgroundColor: Colors.lightBackgroundColor,
                    }
                }}
            >
                <Stack.Screen
                    name="ViolenceReport2"
                    component={ViolenceReport2}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ReportsHomeScreen"
                    component={ReportsHomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ReportSubmission"
                    component={ReportSubmission}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="DegradationReport"
                    component={DegradationReport}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ViolenceReport"
                    component={ViolenceReport}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="CDAProjectReport"
                    component={CDAProjectReport}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="DeleteAccount"
                    component={DeleteAccount}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ContactUs"
                    component={ContactUs}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ChangePassword"
                    component={ChangePassword}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="NotificationSettings"
                    component={NotificationSettings}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="UpdateKYC"
                    component={UpdateKYC}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="UpdateProfile"
                    component={UpdateProfile}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Dashboard"
                    component={TabNavigator}
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






