import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const Header = (props) => {
	return (
		<View style={styles.headerview}>
			<Text style={styles.headertitle}> Lost&Found </Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	headerview: {
		padding: 10,
		backgroundColor: "green",
		alignItems: "center",
	},
	headertitle: {
		color: "white",
		fontSize: 25,
	},
});
