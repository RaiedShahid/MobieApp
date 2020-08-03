import React from "react";
import DateTime from "./DateTime";
import {
	View,
	Text,
	Modal,
	ScrollView,
	Picker,
	StyleSheet,
	Button,
	TextInput,
} from "react-native";
import Address from "./Address";
import Gender from "./Gender";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default class FoundForm extends React.Component {
	state = {
		personInfo: {
			personImage: "",
			personImage2: "",
			personImage3: "",
			postingUser: "a",
			category: "Found",
			name: "",
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
		errors: {},
	};
	handleSubmit = (e) => {
		console.log(this.state.personInfo);
	};
	render() {
		return (
			<View>
				<ScrollView
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					style={styles.scrollView}
				>
					<View>
						<View style={styles.heading}>
							<Text style={styles.text2}>Found Person InFormation</Text>
						</View>
						<View style={styles.formBox}>
							<View style={styles.container}>
								<Text style={styles.text}>Full Name</Text>
							</View>
							<View style={styles.iconBox}>
								<Octicons
									style={{ padding: 10 }}
									name="person"
									size={24}
									color="darkkhaki"
								/>
								<TextInput
									name="name"
									value={this.state.personInfo.name}
									onChangeText={(name) => {
										const personInfo = { ...this.state.personInfo };
										personInfo.name = name;
										this.setState({ personInfo });
									}}
									placeholder="FUll Name"
									style={styles.input}
								/>
							</View>

							<View style={styles.container}>
								<Text style={styles.text}>Age</Text>
							</View>
							<View style={styles.iconBox}>
								<TextInput
									name="age"
									value={this.state.personInfo.age}
									onChangeText={(age) => {
										const personInfo = { ...this.state.personInfo };
										personInfo.age = age;
										this.setState({ personInfo });
									}}
									placeholder="Age"
									style={styles.input}
								/>
							</View>

							<View style={styles.container}>
								<Text style={styles.text}>Gender</Text>
							</View>
							<View style={styles.container}>
								<Gender />
							</View>
						</View>

						<View style={styles.heading}>
							<Text style={styles.text2}>Found Details</Text>
						</View>
						<View style={styles.formBox}>
							<View style={styles.container}>
								<Text style={styles.text}>Date And Time</Text>
							</View>
							<View style={{ marginBottom: 20 }}>
								<DateTime />
							</View>

							<View style={styles.container}>
								{/* <Address /> */}

								<View>
									<View style={styles.container}>
										<View>
											<Text style={styles.textnew}>Province</Text>
											<Picker
												selectedValue={this.state.personInfo.province}
												// province={this.state.personInfo.province}
												style={styles.picker}
												onValueChange={(itemValue, itemIndex) => {
													const personInfo = { ...this.state.personInfo };
													personInfo.province = itemValue;
													this.setState({ personInfo });
												}}
											>
												<Picker.Item label="Punjab" value="Punjab" />
												<Picker.Item label="Sindth" value="Sindth" />
												<Picker.Item label="Balochistan" value="Balochistan" />
												<Picker.Item label="KPK" value="Khyber Pakhtunkhwa" />
												{/* <Picker.Item label="Gilgit Baltistan" value="Gilgit" /> */}
											</Picker>
										</View>
										<View>
											<Text style={styles.textnew}>City</Text>
											<Picker
												selectedValue={this.state.personInfo.city}
												// province={this.state.personInfo.province}
												style={styles.picker}
												onValueChange={(itemValue, itemIndex) => {
													const personInfo = { ...this.state.personInfo };
													personInfo.city = itemValue;
													this.setState({ personInfo });
												}}
											>
												<Picker.Item label="Lahore" value="Lahore" />
												<Picker.Item label="Faislabad" value="Faislabad" />
												<Picker.Item label="Islamabad" value="Islamabad" />
												<Picker.Item label="Quetta" value="Quetta" />
												<Picker.Item label="Peshawar" value="Peshawar" />
											</Picker>
										</View>
									</View>

									<View>
										<Text style={styles.textnew}>Area</Text>
										<View style={styles.iconBox}>
											<Entypo
												style={{ padding: 10 }}
												name="address"
												size={30}
												color="darkkhaki"
											/>
											<TextInput
												multiline={true}
												name="area"
												value={this.state.personInfo.area}
												onChangeText={(area) => {
													const personInfo = { ...this.state.personInfo };
													personInfo.area = area;
													this.setState({ personInfo });
												}}
												placeholder="ie.. Johar Town, DHA...."
												style={styles.input}
											/>
										</View>
									</View>
								</View>
							</View>
							<View style={styles.container}>
								<Text style={styles.text}>Details</Text>
							</View>
							<View style={styles.iconBox}>
								<MaterialIcons
									style={{ padding: 10 }}
									name="details"
									size={30}
									color="darkkhaki"
								/>
								<TextInput
									name="details"
									value={this.state.personInfo.details}
									onChangeText={(details) => {
										const personInfo = { ...this.state.personInfo };
										personInfo.details = details;
										this.setState({ personInfo });
									}}
									placeholder="Other Details...."
									style={styles.input}
									multiline={true}
								/>
							</View>
						</View>

						<View style={styles.heading}>
							<Text style={styles.text2}>Contact Person </Text>
						</View>
						<View style={styles.formBox}>
							<View style={styles.container}>
								<Text style={styles.text}>Full Name</Text>
							</View>
							<View style={styles.iconBox}>
								<Octicons
									style={{ padding: 10 }}
									name="person"
									size={24}
									color="darkkhaki"
								/>
								<TextInput
									name="contactName"
									value={this.state.personInfo.contactName}
									onChangeText={(contactName) => {
										const personInfo = { ...this.state.personInfo };
										personInfo.contactName = contactName;
										this.setState({ personInfo });
									}}
									placeholder="FUll Name"
									style={styles.input}
								/>
							</View>

							<View style={styles.container}>
								<Text style={styles.text}>Contact No</Text>
							</View>
							<View style={styles.iconBox}>
								<FontAwesome
									style={{ padding: 10 }}
									name="phone-square"
									size={30}
									color="darkkhaki"
								/>
								<TextInput
									name="contactNumber"
									value={this.state.personInfo.contactNumber}
									onChangeText={(contactNumber) => {
										const personInfo = { ...this.state.personInfo };
										personInfo.contactNumber = contactNumber;
										this.setState({ personInfo });
									}}
									placeholder="Contact Number"
									style={styles.input}
								/>
							</View>

							<View style={styles.container}>
								<Text style={styles.text}>Address</Text>
							</View>
							<View style={styles.iconBox}>
								<Entypo
									style={{ padding: 10 }}
									name="address"
									size={30}
									color="darkkhaki"
								/>
								<TextInput
									name="contactAddress"
									value={this.state.personInfo.contactAddress}
									onChangeText={(contactAddress) => {
										const personInfo = { ...this.state.personInfo };
										personInfo.contactAddress = contactAddress;
										this.setState({ personInfo });
									}}
									multiline={true}
									placeholder="Address"
									style={styles.input}
								/>
							</View>

							<View
								style={{
									marginTop: 20,
									marginBottom: 40,
									alignItems: "center",
								}}
							>
								<View style={{ width: "80%" }}>
									<Button
										style={{}}
										color={"green"}
										title="Upload Image"
										onPress={() => {
											this.props.navigation.navigate("ImageOption", {
												personInfo: this.state.personInfo,
											});
											// this.handleSubmit
										}}
									/>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	scrollView: {
		padding: 20,
		alignContent: "center",
		marginHorizontal: -15,
		height: "100%",
	},

	input: {
		width: "80%",
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
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		marginBottom: 10,
	},
	text: {
		marginTop: 10,
		fontWeight: "bold",
		fontSize: 18,
		marginRight: 5,
	},
	text1: {
		fontWeight: "bold",
		fontSize: 30,
		alignItems: "center",
	},
	textnew: {
		fontWeight: "bold",
		fontSize: 18,
		alignItems: "center",
	},
	container1: {
		marginBottom: 10,
		alignItems: "center",
	},
	text2: {
		paddingTop: 5,
		fontWeight: "bold",
		fontSize: 20,
		alignItems: "center",
		textDecorationLine: "underline",
		marginBottom: 20,
		color: "white",
	},
	text4: {
		marginTop: 10,
		fontWeight: "bold",
		fontSize: 18,
		marginRight: 27,
	},
	heading: {
		backgroundColor: "darkgreen",

		height: "3%",
		alignItems: "center",
	},
	formBox: {
		backgroundColor: "ghostwhite",
		marginBottom: 20,
		borderWidth: 2,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderColor: "gray",
		padding: 10,
	},
});
