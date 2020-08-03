import React from "react";
import {
	TextInput,
	StyleSheet,
	View,
	ScrollView,
	Button,
	Text,
} from "react-native";
// import Navigator from "./routes/homeStack";
import Navigator from "./routes/drawer";
//import Home from './components/home';
import "react-native-gesture-handler";
import LoginForm from "./components/LoginForm";
import ImagePickerExample from "./components/image";
import ViewImage from "./components/ViewImage";

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';
// SelectForm from './components/SelectForm';
//import Home from './components/Home';
//import LostForm from './components/LostForm';
//import FoundForm from './components/FoundForm'
import UploadImage from "./components/UploadImage";

export default class App extends React.Component {
	render() {
		return (
			<Navigator />
			// <UploadImage />
			// <ViewImage/>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
	},
});
