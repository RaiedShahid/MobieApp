import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const HomeButton = (props) => {
	return (
		<View style={styles.border}>
			<View
				style={{
					width: "100%",
					// height: "35%",
					borderStyle: "solid",
					borderWidth: 1,
					borderColor: "green",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "white",
				}}
			>
				<AntDesign name="home" size={28} color="gray" />
				<Text
					style={{
						color: "gray",
						padding: 2,
						fontWeight: "bold",
						fontSize: 12,
					}}
				>
					Home
				</Text>
			</View>
		</View>
	);
};

export default HomeButton;

const styles = StyleSheet.create({
	border: {},
});
