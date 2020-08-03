import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ProfileButton = (props) => {
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
				<FontAwesome name="user" size={28} color="gray" />
				<Text
					style={{
						color: "gray",
						padding: 2,
						fontWeight: "bold",
						fontSize: 12,
					}}
				>
					Profile
				</Text>
			</View>
		</View>
	);
};

export default ProfileButton;

const styles = StyleSheet.create({
	border: {},
});
