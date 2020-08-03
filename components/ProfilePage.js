import * as React from "react";
import {
	Text,
	View,
	StyleSheet,
	Image,
	FlatList,
	TouchableOpacity,
	Button,
	AsyncStorage,
} from "react-native";
import axios from "axios";
// import Cards from "./Cards";
//import { Card } from "react-native-paper";
import prsn from "./images/person.png";
import ProfileGenericCard from "./ProfileGenericCard";

export default class ProfilePage extends React.Component {
	state = {
		info: [],
		username: [],
	};

	async componentDidMount() {
		console.log("USER IN PROFILE", this.props.navigation.getParam("_id"));
		const result = await axios
			.get(
				`http://192.168.18.144:4000/home/profile/${this.props.navigation.getParam(
					"_id"
				)}`
			)
			.then((res) => {
				const info = res.data;
				this.setState({ info });

				// console.log(info);
			})
			.catch((err) => console.log("Some problem", err));

		// console.log("profile Result", this.state.info[0].personImage);
	}
	handleLogout = async () => {
		const user = await AsyncStorage.getItem("token");

		console.log("LOGOUT:  ", user);
		await AsyncStorage.removeItem("token");
		this.props.navigation.navigate("Home");
	};
	render() {
		const data = this.state.info;
		const { navigation } = this.props;
		// console.log(data);
		return (
			<React.Fragment>
				<FlatList
					// data={this.state.info}
					data={data}
					renderItem={({ item }) => (
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => navigation.navigate("ShowInfo", item)}
						>
							<View style={{ marginBottom: "2%" }}>
								<ProfileGenericCard
									navigation={this.props.navigation}
									data={item}
								/>
							</View>
						</TouchableOpacity>
					)}
					keyExtractor={(item, index) => index.toString()}
				/>
				{/* // <View style={styles.container}>
			// 	<View style={styles.container}>
			// 		<View style={{ flexDirection: "row" }}>
			// 			<View style={styles.imageView}>
			// 				<Image */}
				{/* // 					// source={prsn}
			// 					source={{ */}
				{/* // 						uri: `data:image/png;base64,${data.personImage}`,
			// 					}}
			// 					style={{ */}
				{/* // 						width: "100%",
			// 						height: 120,
			// 					}}
			// 				/>
			// 			</View>
			// 			<View style={{ width: "45%", marginLeft: 5 }}> */}
				{/* // 				<Text style={styles.title}>
			// 					{" "}
			// 					{data.name || data.mobilename || data.carname}{" "}
			// 				</Text>
			// 				{data.age && <Text style={styles.age}> Age: {data.age} </Text>}
			// 				{data.ime && <Text style={styles.age}> IME: {data.ime} </Text>}
			// 				{data.platenumber && ( */}
				{/* // 					<Text style={styles.age}> Plate: {data.platenumber} </Text>
			// 				)}
			// 				<Text style={styles.age}> {data.city} </Text>
			// 			</View> */}
				{/* // 			<View style={styles.category}>
			// 				<Button */}
				{/* // 					color={data.category === "Lost" ? "#CD5C5C" : "orange"}
			// 					// title={data.category}
			// 					title="Lost"
			// 					// type="clear"
			// 				/>
			// 			</View> */}
				{/* // 		</View> */}
				{/* // 	</View> */}
				<View style={{ justifyContent: "center" }}>
					<Button
						color="blue"
						title="LogOut"
						// type="clear"
						onPress={this.handleLogout}
					/>
				</View>
			</React.Fragment>
			// {/* // </View> */}
		);
	}
}
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		// marginBottom: 5,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: "red",
		shadowOpacity: 0.8,
		borderRadius: 6,
		elevation: 3,
		backgroundColor: "#fff",
	},

	imageView: {
		width: "33%",
	},
	title: {
		margin: 10,
		fontSize: 12,
		fontWeight: "bold",
	},
	age: {
		marginLeft: 10,
		marginBottom: 10,
		fontSize: 12,
		fontWeight: "bold",
	},
	category: {
		width: "22%",
		fontSize: 4,
		marginTop: "10%",
	},
});
