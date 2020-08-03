import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const ShowInfo = ({ navigation }) => {
	return (
		<View>
			<Text> {navigation.getParam("name")}</Text>
			<Text> {navigation.getParam("age")}</Text>
			<Text> {navigation.getParam("city")}</Text>
		</View>
	);
};

export default ShowInfo;

const styles = StyleSheet.create({});
