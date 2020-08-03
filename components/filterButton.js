import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FilterButton = (props) => {
	return (
		<View style={styles.border}>
			<View style={{ flex: 3 }}>
				<Text></Text>
			</View>
			<View
				style={{
					flex: 1,
					borderStyle: "solid",
					borderWidth: 1,
					borderColor:'gray',
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "green",
				}}
			>
				<Text
					style={{
						color: "white",
						padding: 2,
						fontWeight: "bold",
						fontSize: 15,
					}}
				>
					Filter
				</Text>
				<AntDesign name="filter" size={24} color="white" />
			</View>
		</View>
	);
};

export default FilterButton;

const styles = StyleSheet.create({
	border: {
		flexDirection: "row",
		padding: 8,
	},
});
