import React from "react";

import {
	View,
	Picker,
	Text,
	StyleSheet,
	TouchableOpacity,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableWithoutFeedback,
	TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
export default class Address extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedValue: "Punjab",
		};
	}
	render() {
		return (
			<View>
				<View style={styles.container}>
					<View>
						<Text style={styles.text1}>Province</Text>
						<Picker
							selectedValue={this.state.selectedValue}
							style={styles.picker}
							onValueChange={(itemValue, itemIndex) =>
								this.setState({ selectedValue: itemValue })
							}
						>
							<Picker.Item label="Punjab" value="Punjab" />
							<Picker.Item label="Sindth" value="Sindth" />
							<Picker.Item label="Balochistan" value="Balochistan" />
							<Picker.Item
								label="Khyber Pakhtunkhwa"
								value="Khyber Pakhtunkhwa"
							/>
							{/* <Picker.Item label="Gilgit Baltistan" value="Gilgit" /> */}
						</Picker>
					</View>
					<View>
						<Text style={styles.text1}>City</Text>
						<Picker
							selectedValue={this.state.selectedValue}
							style={styles.picker}
							onValueChange={(itemValue, itemIndex) =>
								this.setState({ selectedValue: itemValue })
							}
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
					<Text style={styles.text1}>Area</Text>
					<View style={styles.iconBox}>
						<Entypo
							style={{ padding: 10 }}
							name="address"
							size={30}
							color="darkkhaki"
						/>
						<TextInput
							multiline={true}
							placeholder="ie.. Johar Town, DHA...."
							style={styles.input}
						/>
					</View>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		width: "80%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		marginBottom: 10,
	},
	input: {
		width: "86%",
		padding: 10,
	},
	iconBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		borderWidth: 1,
		borderColor: "gray",
	},
	picker: {
		height: 50,
		width: 150,
	},
	text1: {
		fontWeight: "bold",
		fontSize: 18,
		alignItems: "center",
	},
});
