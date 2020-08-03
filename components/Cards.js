import * as React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
//import { Card } from "react-native-paper";
import prsn from "./images/person.png";

export default class Cards extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<View style={styles.container}>
				<View style={{ flexDirection: "row" }}>
					<View style={styles.imageView}>
						<Image
							// source={prsn}
							source={{
								uri: `data:image/png;base64,${data.personImage}`,
							}}
							style={{
								width: "100%",
								height: 120,
							}}
						/>
					</View>
					<View style={{ width: "45%", marginLeft: 5 }}>
						<Text style={styles.title}>
							{" "}
							{data.name || data.mobilename || data.carname}{" "}
						</Text>
						{data.age && <Text style={styles.age}> Age: {data.age} </Text>}
						{data.ime && <Text style={styles.age}> IME: {data.ime} </Text>}
						{data.platenumber && (
							<Text style={styles.age}> Plate: {data.platenumber} </Text>
						)}
						<Text style={styles.age}> {data.city} </Text>
					</View>
					<View style={styles.category}>
						<Button
							color={data.category === "Lost" ? "#CD5C5C" : "orange"}
							title={data.category}
							// type="clear"
						/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		// marginBottom: 5,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: "red",
		shadowOpacity: 0.8,
		borderRadius: 6,
		elevation: 3,
		backgroundColor: "#fff",
	},

	imageView: {
		width: "33%",
	},
	title: {
		margin: 10,
		fontSize: 12,
		fontWeight: "bold",
	},
	age: {
		marginLeft: 10,
		marginBottom: 10,
		fontSize: 12,
		fontWeight: "bold",
	},
	category: {
		width: "22%",
		fontSize: 4,
		marginTop: "10%",
	},
});
