import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import PostAdd from "./../components/postAdd";
import Home from "../components/home";
import Header from "../components/header";
import ShowInfo from "./../components/showInfo";

const screens = {
	Home: {
		screen: Home,
		navigationOptions: {
			title: "Lost&Found",
		},
	},
	PostAdd: {
		screen: PostAdd,
	},
	ShowInfo: {
		screen: ShowInfo,
	},
};

const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: "green",
			height: 80,
		},
		headerTintColor: "white",
	},
});
export default createAppContainer(HomeStack);
