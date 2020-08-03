import React from "react";
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
import axios from "axios";

import { Octicons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default class SignUpForm extends React.Component {
	state = {
		// personInfo: {
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		cpassword: "",
		// },
		errors: {},
	};

	handleSubmit = async (e) => {
		// console.warn(
		// 	this.state.firstname +
		// 		"  " +
		// 		this.state.lastname +
		// 		"  " +
		// 		this.state.email +
		// 		"  " +
		// 		this.state.password +
		// 		"  " +
		// 		this.state.cpassword
		// );
		const result = {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			email: this.state.email.toLowerCase(),
			password: this.state.password,
			cpassword: this.state.cpassword,
		};

		// console.warn("result" + result);

		try {
			const r = await axios
				.post("http://192.168.18.144:4000/home/signup", result)
				.then((res) => {
					AsyncStorage.setItem("token", res.headers["x-auth-token"]);
					this.props.navigation.navigate("Home");
					alert("Sign Up Successfully");
					console.log("Result from database " + res.data);
				})
				.catch((err) => {
					console.log("Some problem ", err);
					alert("User Already Exists \nPlease try with another UserName");
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
		return (
			<ScrollView style={{ padding: 10 }}>
				<View style={styles.formBox}>
					<View style={styles.container}>
						<Text style={styles.text}>First Name</Text>
					</View>

					<View style={styles.iconBox}>
						<Octicons
							style={{ padding: 10 }}
							name="person"
							size={24}
							color="darkkhaki"
						/>
						<TextInput
							placeholder="First Name"
							name="firstname"
							value={this.state.firstname}
							onChangeText={(firstname) => this.setState({ firstname })}
							style={styles.input}
						/>
					</View>
					<View style={styles.container}>
						<Text style={styles.text}>Last Name</Text>
					</View>

					<View style={styles.iconBox}>
						<Octicons
							style={{ padding: 10 }}
							name="person"
							size={24}
							color="darkkhaki"
						/>
						<TextInput
							placeholder="Last Name"
							name="email"
							value={this.state.lastname}
							onChangeText={(lastname) => this.setState({ lastname })}
							style={styles.input}
						/>
					</View>
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
							placeholder="Password"
							style={styles.input}
							value={this.state.password}
							onChangeText={(password) => this.setState({ password })}
						/>
					</View>

					<View style={styles.container}>
						<Text style={styles.text}>Confirm Password</Text>
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
							placeholder="Confirm Password"
							style={styles.input}
							value={this.state.cpassword}
							onChangeText={(cpassword) => this.setState({ cpassword })}
						/>
					</View>

					<View
						style={{
							marginTop: 20,
							marginLeft: 20,
							marginBottom: 10,
							alignItems: "center",
						}}
					>
						<View style={{ width: "60%" }}>
							<Button
								color={"green"}
								title="Sign Up"
								onPress={
									this.handleSubmit
									// this.props.navigation.navigate("Home");
								}
							/>
						</View>
					</View>
				</View>
			</ScrollView>
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
		marginBottom: 20,
		borderRadius: 10,
		borderWidth: 1,
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
	buttonBox: {
		alignItems: "center",
		marginTop: 20,
	},
});
