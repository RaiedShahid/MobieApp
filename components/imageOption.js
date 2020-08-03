import React, { useState } from "react";
// import RNFS from "react-native-fs";

// import ImgToBase64 from "react-native-image-base64";
// import * as FileSystem from "expo-file-system";
// import base64 from "react-native-base64";
// import RNFetchBlob from "react-native-fetch-blob";
import { Camera } from "expo-camera";
import {
	TouchableOpacity,
	StyleSheet,
	View,
	ScrollView,
	Button,
	Text,
	Image,
	Modal,
	AsyncStorage,
} from "react-native";
//import LostForm from './LostForm';
//import FoundForm from './FoundForm';
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome5 } from "@expo/vector-icons";
import VehicleFoundForm from "./VehicleFoundForm";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import jwtDecode from "jwt-decode";
import prsn from "./images/car.jpg";
export default class ImageOption extends React.Component {
	constructor() {
		super();
		this.state = {
			personInfo: {
				personImage: "",
				personImage2: "",
				personImage3: "",
				postingUser: "a",
				category: "Lost",
				// name: "",
				age: "",
				date: new Date(),
				cDate: new Date(),
				city: "Lahore",
				province: "Punjab",
				area: "",
				details: "",
				contactName: "",
				contactNumber: "",
				contactAddress: "",
			},
			image: "",
			show: false,
			show2: false,
			show3: false,
		};
	}

	// state = {
	//     image: null,
	//   };
	componentDidMount = async () => {
		const { navigation } = this.props;
		const Info = navigation.getParam("personInfo");
		let personInfo = { ...this.state.personInfo };
		personInfo = Info;
		this.setState({ personInfo });
		const jwt = await AsyncStorage.getItem("token");
		const user = jwtDecode(jwt);
		const postingUser = user._id;

		personInfo.postingUser = postingUser;
		this.setState({ personInfo });
	};
	camera = async () => {
		try {
			let result = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: false,
				aspect: [4, 3],
				quality: 1,
			});
			const uri = result.uri;

			if (!result.cancelled) {
				const personInfo = { ...this.state.personInfo };

				personInfo.personImage = uri;
				this.setState({ personInfo });
				this.setState({ show: false });
				console.log("URI", uri);
			}

			// console.log("Base 64" + result.base64);
			// console.log(result);
		} catch (E) {
			console.log(E);
		}

		// try {
		// 	const base64 = await FileSystem.readAsStringAsync(
		// 		this.state.personInfo.personImage,
		// 		{
		// 			encoding: "base64",
		// 		}
		// 	);
		// 	console.log("BASE64  ", base64);
		// } catch (E) {
		// 	console.log(E);
		// }
		// const fileReader = new FileReader();
		// fileReader.readAsDataURL("filepath:abc adaksdmasdakdma");
		// fileReader.onloadend = () => {
		// 	console.log("Result " + fileReader.result);
		// };
		// ImgToBase64.getBase64String("file://youfileurl")
		// 	.then((base64String) => console.log("BASE64 " + base64String))
		// 	.catch((err) => console.log(err));
		// var data = await RNFS.readFile("file://path-to-file", "base64").then(
		// 	(res) => {
		// 		console.log(res);
		// 	}
		// );
	};

	camera2 = async () => {
		try {
			let result = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				// base64: true,
				allowsEditing: false,
				aspect: [4, 3],
				quality: 1,
			});
			const uri = result.uri;

			if (!result.cancelled) {
				const personInfo = { ...this.state.personInfo };
				personInfo.personImage2 = uri;
				this.setState({ personInfo });
				this.setState({ show2: false });
				// console.warn(result.base64);
			}

			console.log(result);
		} catch (E) {
			console.log(E);
		}
	};
	camera3 = async () => {
		try {
			let result = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: false,
				aspect: [4, 3],
				quality: 1,
			});
			const uri = result.uri;

			if (!result.cancelled) {
				const personInfo = { ...this.state.personInfo };
				personInfo.personImage3 = uri;
				this.setState({ personInfo });
				this.setState({ show3: false });
				console.log(result.base64);
			}

			console.log(result);
		} catch (E) {
			console.log(E);
		}
	};
	_pickImage = async () => {
		try {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: false,
				aspect: [4, 3],
				quality: 1,
			});
			if (!result.cancelled) {
				const personInfo = { ...this.state.personInfo };
				personInfo.personImage = result.uri;
				this.setState({ personInfo });

				this.setState({ show: false });
			}

			console.log(result);
		} catch (E) {
			console.log(E);
		}
	};
	_pickImage2 = async () => {
		try {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: false,
				aspect: [4, 3],
				quality: 1,
			});
			if (!result.cancelled) {
				const personInfo = { ...this.state.personInfo };
				personInfo.personImage2 = result.uri;
				this.setState({ personInfo });

				this.setState({ show2: false });
			}

			console.log(result);
		} catch (E) {
			console.log(E);
		}
	};
	_pickImage3 = async () => {
		try {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: false,
				aspect: [4, 3],
				quality: 1,
			});
			if (!result.cancelled) {
				const personInfo = { ...this.state.personInfo };
				personInfo.personImage3 = result.uri;
				this.setState({ personInfo });

				this.setState({ show3: false });
			}

			console.log(result);
		} catch (E) {
			console.log(E);
		}
	};
	handleSubmit = async (e) => {
		let newdate = this.state.personInfo.date + "";

		newdate = newdate.split(" ");
		const day = newdate[0];
		const month = newdate[1];
		const date = newdate[2];
		const year = newdate[3];
		// console.warn(day, "  ", month, " ", date, " ", year);
		const formData = new FormData();

		// this.state.personInfo.name != ""
		// 	? formData.append("name", this.state.personInfo.name)
		// 	: this.state.personInfo.mobilename != ""
		// 	? formData.append("mobilename", this.state.personInfo.mobilename)
		// 	: null;
		this.state.personInfo.name &&
			formData.append("name", this.state.personInfo.name);
		this.state.personInfo.carname &&
			formData.append("carname", this.state.personInfo.carname);
		this.state.personInfo.mobilename &&
			formData.append("mobilename", this.state.personInfo.mobilename);
		this.state.personInfo.company &&
			formData.append("company", this.state.personInfo.company);
		this.state.personInfo.color &&
			formData.append("color", this.state.personInfo.color);
		this.state.personInfo.type &&
			formData.append("type", this.state.personInfo.type);
		this.state.personInfo.ime &&
			formData.append("ime", this.state.personInfo.ime);
		this.state.personInfo.platenumber &&
			formData.append("platenumber", this.state.personInfo.platenumber);
		formData.append("personImage", this.state.personInfo.personImage);
		formData.append("personImage2", this.state.personInfo.personImage2);
		formData.append("personImage3", this.state.personInfo.personImage3);

		// console.log("file: ", this.state.personInfo.personImage);
		// formData.append("name", this.state.personInfo.name);

		formData.append("postingUser", this.state.personInfo.postingUser);
		formData.append("category", this.state.personInfo.category);
		formData.append("age", this.state.personInfo.age);
		formData.append("day", day);
		formData.append("month", month);
		formData.append("date", date);
		formData.append("year", year);
		formData.append("cDate", newdate);
		formData.append("city", this.state.personInfo.city);
		formData.append("province", this.state.personInfo.province);
		formData.append("area", this.state.personInfo.area);
		formData.append("details", this.state.personInfo.details);
		formData.append("contactName", this.state.personInfo.contactName);
		formData.append("contactNumber", this.state.personInfo.contactNumber);
		formData.append("contactAddress", this.state.personInfo.contactAddress);

		const result = {
			personImage: this.state.personInfo.personImage,
			personImage2: this.state.personInfo.personImage2,
			personImage3: this.state.personInfo.personImage3,
			postingUser: this.state.personInfo.postingUser,
			category: "Lost",
			name: this.state.personInfo.name,
			age: this.state.personInfo.name,
			day: day,
			month: month,
			year: year,
			date: date,
			cDate: this.state.personInfo.cDate,
			city: this.state.personInfo.city,
			province: this.state.personInfo.province,
			area: this.state.personInfo.area,
			details: this.state.personInfo.details,
			contactName: this.state.personInfo.contactName,
			contactNumber: this.state.personInfo.contactNumber,
			contactAddress: this.state.personInfo.contactAddress,
		};
		// console.log(result);

		try {
			this.state.personInfo.mobilename &&
				(await axios
					.post("http://192.168.18.144:4000/home/mobileform", formData)
					.then((res) => {
						// window.location = "/";
						console.log(res.data);
						this.props.navigation.navigate("Home");
						console.log("Submitted");
					})
					.catch((err) =>
						console.log("Some problem in Image Option.js ", err)
					));
			this.state.personInfo.carname &&
				(await axios
					.post("http://192.168.18.144:4000/home/vehicleform", formData)
					.then((res) => {
						// window.location = "/";
						console.log(res.data);
						this.props.navigation.navigate("Home");
						console.log("Submitted");
					})
					.catch((err) =>
						console.log("Some problem in Image Option.js ", err)
					));
			this.state.personInfo.name &&
				(await axios
					.post("http://192.168.18.144:4000/home/form", formData)
					.then((res) => {
						// window.location = "/";
						console.log(res.data);
						this.props.navigation.navigate("Home");
						console.log("Submitted");
					})
					.catch((err) =>
						console.log("Some problem in Image Option.js ", err)
					));
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				const errors = { ...this.state.errors };
				errors.firstname = ex.response.data;
				this.setState({ errors });
			}
		}
	};
	render() {
		// const { navigation } = this.props;
		// const personInfo = navigation.getParam("personInfo");
		// console.log(this.state.personInfo);
		return (
			<View style={styles.inputContainer}>
				<View style={{ alignContent: "center" }}>
					<View style={{ width: 100, height: 100, backgroundColor: "green" }}>
						{this.state.personInfo.personImage != "" ? (
							<Image
								source={{
									uri: this.state.personInfo.personImage,
								}}
								style={{
									width: "100%",
									height: "100%",
									// margin: 10,
								}}
							/>
						) : (
							<Image
								source={prsn}
								style={{
									width: "100%",
									height: "100%",
									// margin: 10,
								}}
							/>
						)}
					</View>
					<View style={{ marginBottom: 20 }}>
						<Button
							title="Add Image"
							color="gray"
							onPress={() => {
								this.setState({ show: true });
							}}
						/>
					</View>

					<View style={{ width: 100, height: 100, backgroundColor: "green" }}>
						{this.state.personInfo.personImage2 != "" ? (
							<Image
								source={{
									uri: this.state.personInfo.personImage2,
								}}
								style={{
									width: "100%",
									height: "100%",
									// margin: 10,
								}}
							/>
						) : (
							<Image
								source={prsn}
								style={{
									width: "100%",
									height: "100%",
									// margin: 10,
								}}
							/>
						)}
					</View>
					<View style={{ marginBottom: 20 }}>
						<Button
							title="Add Image"
							color="gray"
							onPress={() => {
								this.setState({ show2: true });
							}}
						/>
					</View>

					<View style={{ width: 100, height: 100, backgroundColor: "green" }}>
						{this.state.personInfo.personImage3 != "" ? (
							<Image
								source={{
									uri: this.state.personInfo.personImage3,
								}}
								style={{
									width: "100%",
									height: "100%",
									// margin: 10,
								}}
							/>
						) : (
							<Image
								source={prsn}
								style={{
									width: "100%",
									height: "100%",
									// margin: 10,
								}}
							/>
						)}
					</View>
					<View style={{ marginBottom: 20 }}>
						<Button
							title="Add Image"
							color="gray"
							onPress={() => {
								this.setState({ show3: true });
							}}
						/>
					</View>
					<Button title="Submit" color="green" onPress={this.handleSubmit} />
				</View>
				{/* </View> */}
				<Modal transparent={true} visible={this.state.show}>
					<View
						style={{
							backgroundColor: "white",
							marginTop: 150,
							marginRight: 50,
							marginBottom: 200,
							marginLeft: 50,
							padding: 40,
							borderRadius: 10,
						}}
					>
						<View style={{ width: "90%" }}>
							<TouchableOpacity
								activeOpacity={0.8}
								style={styles.customButton}
								onPress={this.camera}
							>
								<View style={styles.Button}>
									<Entypo
										name="camera"
										style={{ padding: 20 }}
										size={30}
										color="white"
									/>
									<Text style={styles.text1}>Take A Photo</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.8}
								style={styles.customButton}
								onPress={this._pickImage}
							>
								<View style={styles.Button}>
									<FontAwesome5
										name="images"
										style={{ padding: 20 }}
										size={30}
										color="white"
									/>
									<Text style={styles.text2}>Choose From Gallery</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity
								activeOpacity={0.8}
								style={{
									height: "20%",
									backgroundColor: "green",
									marginBottom: 20,
								}}
								onPress={() => {
									this.setState({ show: false });
								}}
							>
								<View style={{ alignItems: "center", padding: 15 }}>
									<Text style={styles.text1}>Cancel</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>

				<Modal transparent={true} visible={this.state.show2}>
					<View
						style={{
							backgroundColor: "white",
							marginTop: 150,
							marginRight: 50,
							marginBottom: 200,
							marginLeft: 50,
							padding: 40,
							borderRadius: 10,
						}}
					>
						<View style={{ width: "90%" }}>
							<TouchableOpacity
								activeOpacity={0.8}
								style={styles.customButton}
								onPress={this.camera2}
							>
								<View style={styles.Button}>
									<Entypo
										name="camera"
										style={{ padding: 20 }}
										size={30}
										color="white"
									/>
									<Text style={styles.text1}>Take A Photo</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.8}
								style={styles.customButton}
								onPress={this._pickImage2}
							>
								<View style={styles.Button}>
									<FontAwesome5
										name="images"
										style={{ padding: 20 }}
										size={30}
										color="white"
									/>
									<Text style={styles.text2}>Choose From Gallery</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity
								activeOpacity={0.8}
								style={{
									height: "20%",
									backgroundColor: "green",
									marginBottom: 20,
								}}
								onPress={() => {
									this.setState({ show2: false });
								}}
							>
								<View style={{ alignItems: "center", padding: 15 }}>
									<Text style={styles.text1}>Cancel</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>

				<Modal transparent={true} visible={this.state.show3}>
					<View
						style={{
							backgroundColor: "white",
							marginTop: 150,
							marginRight: 50,
							marginBottom: 200,
							marginLeft: 50,
							padding: 40,
							borderRadius: 10,
						}}
					>
						<View style={{ width: "90%" }}>
							<TouchableOpacity
								activeOpacity={0.8}
								style={styles.customButton}
								onPress={this.camera3}
							>
								<View style={styles.Button}>
									<Entypo
										name="camera"
										style={{ padding: 20 }}
										size={30}
										color="white"
									/>
									<Text style={styles.text1}>Take A Photo</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.8}
								style={styles.customButton}
								onPress={this._pickImage3}
							>
								<View style={styles.Button}>
									<FontAwesome5
										name="images"
										style={{ padding: 20 }}
										size={30}
										color="white"
									/>
									<Text style={styles.text2}>Choose From Gallery</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity
								activeOpacity={0.8}
								style={{
									height: "20%",
									backgroundColor: "green",
									marginBottom: 20,
								}}
								onPress={() => {
									this.setState({ show3: false });
								}}
							>
								<View style={{ alignItems: "center", padding: 15 }}>
									<Text style={styles.text1}>Cancel</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
				{/* */}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	customButton: {
		height: "30%",
		backgroundColor: "green",
		marginBottom: 20,
	},

	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},

	Button: {
		alignItems: "center",
		flex: 1,
		width: "80%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
	},

	text1: {
		fontWeight: "bold",
		fontSize: 25,
		color: "white",
	},
	text2: {
		fontWeight: "bold",
		fontSize: 25,
		color: "white",
	},
	formBox: {
		width: "90%",
		backgroundColor: "ghostwhite",
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "gray",
		padding: 10,
	},
});
