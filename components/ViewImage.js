import React, { useState } from "react";
import {
	TouchableOpacity,
	Image,
	StyleSheet,
	View,
	ScrollView,
	Button,
	Text,
} from "react-native";
import prsn from "./images/person.png";

export default class ViewImage extends React.Component {
	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.inputContainer}>
				<Image
					// source={prsn}
					source={{
						uri: `data:image/png;base64,${navigation.getParam("image")}`,
					}}
					style={{
						width: "80%",
						height: "80%",
					}}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		backgroundColor: "black",
	},
});
