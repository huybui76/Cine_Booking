import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import TicketScreen from "../screens/TicketScreen";
import UserAccountScreen from "../screens/UserAccountScreen";




const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (<Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Search' component={SearchScreen} />
        <Tab.Screen name='Ticket' component={TicketScreen} />
        <Tab.Screen name='User' component={UserAccountScreen} />


    </Tab.Navigator>
    )

}

const styles = StyleSheet.create({})


export default TabNavigator