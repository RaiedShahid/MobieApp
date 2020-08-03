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
import Home from "../components/home";
import SelectForm from "../components/SelectForm";
import LostForm from "../components/LostForm";
import FoundForm from "../components/FoundForm";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import ShowInfo from "./../components/showInfo";
import ImageOption from "./../components/imageOption";
import ViewImage from "../components/ViewImage";
import ProfilePage from "../components/ProfilePage";
import HomeTitle from "../components/homeTitle";
import CategoryListLost from "../components/CategoryListLost";
import CategoryListFound from "../components/CategoryListFound";
import VehicleLostForm from "../components/VehicleLostForm";
import VehicleFoundForm from "../components/VehicleFoundForm";
import DeviceLostForm from "../components/DeviceLostForm";
import DeviceFoundForm from "../components/DeviceFoundForm";
import { DrawerNavigator } from "react-navigation";
import IOSIcon from "react-native-vector-icons/Ionicons";
import ImageOptionForVehicle from "./../components/ImageOptionForVehicle";
import EditForm from "./../components/EditForm";
import EditFormDevice from "./../components/EditFormDevice";
import EditFormVehicle from "./../components/EditFormVehicle";

const screens = {
	Home: {
		screen: Home,
		navigationOptions: ({ navigation }) => ({
			//headerTitle:()=><HomeTitle/>
			title: "Lost & Found",
			// headerLeft:(
			// <TouchableOpacity>
			// 	<IOSIcon name="ios-menu" size={30} color="white" style={{paddingLeft:10}}  />
			// </TouchableOpacity>
			// ),
		}),
	},

	ShowInfo: {
		screen: ShowInfo,
	},

	SelectForm: {
		screen: SelectForm,
		navigationOptions: {
			title: "Select Form",
		},
	},
	EditFormVehicle: {
		screen: EditFormVehicle,
		// Component={EditForm},
		navigationOptions: {
			title: "Update Vehicle Info",
		},
	},
	EditFormDevice: {
		screen: EditFormDevice,
		// Component={EditForm},
		navigationOptions: {
			title: "Update Device Info",
		},
	},
	EditForm: {
		screen: EditForm,
		// Component={EditForm},
		navigationOptions: {
			title: "Update Person Info",
		},
	},
	LostForm: {
		screen: LostForm,
		navigationOptions: {
			title: "Lost Form",
		},
	},
	FoundForm: {
		screen: FoundForm,
		navigationOptions: {
			title: "Found Form",
		},
	},
	ImageOption: {
		screen: ImageOption,
		navigationOptions: {
			title: "Image Option",
		},
	},
	ImageOptionForVehicle: {
		screen: ImageOptionForVehicle,
		navigationOptions: {
			title: "Update Image",
		},
	},
	LoginForm: {
		screen: LoginForm,
		navigationOptions: {
			title: "Login ",
		},
	},

	SignUpForm: {
		screen: SignUpForm,
		navigationOptions: {
			title: "Sign Up",
		},
	},
	ViewImage: {
		screen: ViewImage,
		navigationOptions: {
			title: "",
			headerStyle: {
				backgroundColor: "black",
			},
		},
	},
	ProfilePage: {
		screen: ProfilePage,
		navigationOptions: {
			title: "Profile",
		},
	},
	CategoryListLost: {
		screen: CategoryListLost,
		navigationOptions: {
			title: "Categories",
		},
	},
	CategoryListFound: {
		screen: CategoryListFound,
		navigationOptions: {
			title: "Categories",
		},
	},
	VehicleLostForm: {
		screen: VehicleLostForm,
		navigationOptions: {
			title: "Lost Form",
		},
	},
	VehicleFoundForm: {
		screen: VehicleFoundForm,
		navigationOptions: {
			title: "Found Form",
		},
	},
	DeviceLostForm: {
		screen: DeviceLostForm,
		navigationOptions: {
			title: "Lost Form",
		},
	},
	DeviceFoundForm: {
		screen: DeviceFoundForm,
		navigationOptions: {
			title: "Found Form",
		},
	},
};

const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: "green",
		},
		headerTintColor: "white",
	},
});
export default HomeStack;
//export default createAppContainer(HomeStack);
