import React, { Fragment } from "react";
import {
	View,
	Text,
	Modal,
	ScrollView,
	StyleSheet,
	Button,
	TextInput,
	AsyncStorage,
} from "react-native";
import { Zocial } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";
import jwtDecode from "jwt-decode";

export default class LoginForm extends React.Component {
	state = {
		// personInfo: {
		email: "",
		password: "",
		// },
		errors: {},
	};

	handleChange = (e) => {
		// const errors = { ...this.state.errors };
		// const errorMessage = this.validateProperty(e.currentTarget);

		// if (errorMessage) errors[e.currentTarget.name] = errorMessage;
		// else delete errors[e.currentTarget.name];

		const personInfo = { ...this.state.personInfo };
		personInfo[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ personInfo });
	};

	handleSubmit = async (e) => {
		// console.warn(this.state.email + "  " + this.state.password);
		const result = {
			email: this.state.email.toLowerCase(),
			password: this.state.password,
		};

		try {
			const r = await axios
				.post("http://192.168.18.144:4000/home/auth", result)
				.then((res) => {
					const user1 = jwtDecode(res.data);
					AsyncStorage.setItem("token", res.data);
					// AsyncStorage.setItem("token", JSON.stringify(user1));
					this.props.navigation.navigate("Home");

					console.log(res.data);

					// const user = AsyncStorage.getItem("token");

					// console.log("token:  ", user);
					// console.log("User:  ", user1);
				})
				.catch((err) => {
					console.log("Some problem ", err);
					alert("UserName or Password is incorrect");
				});
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				const errors = { ...this.state.errors };
				errors.firstname = ex.response.data;
				this.setState({ errors });
			}
		}
	};

	render() {
		const { navigation } = this.props;
		const user = navigation.getParam("user");
		// console.warn(user);
		return (
			<React.Fragment>
				{user && (
					<View style={{ marginTop: "20%" }}>
						<Text>User is already Logged in</Text>
						<Text>{user.name}</Text>
					</View>
				)}
				{!user && (
					<View style={{ padding: 10 }}>
						<View style={styles.formBox}>
							<View style={styles.container}>
								<Text style={styles.text}>UserName</Text>
							</View>
							<View style={styles.iconBox}>
								<Zocial
									style={{ padding: 10 }}
									name="email"
									size={30}
									color="darkkhaki"
								/>
								<TextInput
									placeholder="UserName"
									name="email"
									value={this.state.email}
									onChangeText={(email) => this.setState({ email })}
									style={styles.input}
								/>
							</View>

							<View style={styles.container}>
								<Text style={styles.text}>Password</Text>
							</View>
							<View style={styles.iconBox}>
								<Entypo
									style={{ padding: 10 }}
									name="key"
									size={30}
									color="darkkhaki"
								/>
								<TextInput
									secureTextEntry={true}
									name="password"
									value={this.state.password}
									onChangeText={(password) => this.setState({ password })}
									placeholder="Password"
									style={styles.input}
								/>
							</View>

							<View
								style={{
									marginLeft: 20,
									marginBottom: 10,
									alignItems: "center",
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: 20,
								}}
							>
								<View style={{ width: "30%" }}>
									<Button
										color={"green"}
										title="Sign In"
										onPress={
											// this.props.navigation.navigate("ProfilePage");
											this.handleSubmit
										}
									/>
								</View>
								<View style={{ width: "60%", marginRight: 20 }}>
									<Button
										color={"green"}
										title="Create A new Account"
										onPress={() => {
											this.props.navigation.navigate("SignUpForm");
										}}
									/>
								</View>
							</View>
						</View>
					</View>
				)}
			</React.Fragment>
		);
	}
}
const styles = StyleSheet.create({
	input: {
		width: "100%",
		borderColor: "gray",
		borderWidth: 0,
		padding: 10,
	},
	iconBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		borderWidth: 1,
		borderColor: "gray",
	},
	formBox: {
		backgroundColor: "ghostwhite",
		marginTop: "30%",
		marginBottom: 20,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "gray",
		padding: 10,
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		marginBottom: 10,
	},

	buttonBox: {
		alignItems: "center",
		marginTop: 20,
	},
	text: {
		marginTop: 10,
		fontWeight: "bold",
		fontSize: 15,
	},
});
