import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const Search = (props) => {
	return (
		<View style={styles.headerview}>
			<TextInput
				placeholder={"Search"}
				style={styles.inputStyle}
				value={props.value}
				onChangeText={(e) => props.onChange(e)}
			/>
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({
	headerview: {},
	inputStyle: {
		padding: 5,
		borderColor: "gray",
		borderWidth: 1,
		backgroundColor: "white",
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	},
});
