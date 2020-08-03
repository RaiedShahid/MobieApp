import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const PostButton = (props) => {
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
					backgroundColor: "green",
				}}
			>
				<Feather name="camera" size={28} color="white" />
				<Text
					style={{
						color: "white",
						padding: 2,
						fontWeight: "bold",
						fontSize: 12,
					}}
				>
					Post
				</Text>
			</View>
		</View>
	);
};

export default PostButton;

const styles = StyleSheet.create({
	border: {},
});
