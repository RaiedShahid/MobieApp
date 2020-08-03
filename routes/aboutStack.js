import React from "react";
import {
	TouchableOpacity,
	StyleSheet,
	View,
	ScrollView,
	Button,
	Text,
	Image,
	Modal,
} from "react-native";
import { AppRegistry, Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import About from "../components/About";
// import Home from "../components/home";
// import SelectForm from "../components/SelectForm";
// import LostForm from "../components/LostForm";
// import FoundForm from "../components/FoundForm";
// import SignUpForm from "../components/SignUpForm";
// import LoginForm from "../components/LoginForm";
// import ShowInfo from "./../components/showInfo";
// import ImageOption from "./../components/imageOption";
// import ViewImage from "../components/ViewImage";
// import ProfilePage from "../components/ProfilePage";
// import HomeTitle from "../components/homeTitle";
// import CategoryListLost from "../components/CategoryListLost";
// import CategoryListFound from "../components/CategoryListFound";
// import VehicleLostForm from '../components/VehicleLostForm';
// import VehicleFoundForm from '../components/VehicleFoundForm';
// import DeviceLostForm from '../components/DeviceLostForm';
// import DeviceFoundForm from '../components/DeviceFoundForm';
// import {DrawerNavigator} from 'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
const screens = {
	About: {
		screen: About,
		navigationOptions: ({ navigation }) => ({
			//headerTitle:()=><HomeTitle/>
			title: "About",
		}),
	},
};

const AboutStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: "green",
		},
		headerTintColor: "white",
	},
});
export default AboutStack;
