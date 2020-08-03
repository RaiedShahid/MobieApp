import * as React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import axios from "axios";
//import { Card } from "react-native-paper";
import prsn from "./images/person.png";

export default class ProfileGenericCard extends React.Component {
	state = {
		refresh: false,
	};
	handleDelete = (id) => {
		console.log(id);

		axios
			.delete(`http://192.168.18.144:4000/home/${id}`)
			.then((res) => {
				const info = res.data;
				this.setState({ refresh: true });
				alert("Ad Deleted ");
				this.props.navigation.navigate("Home");
			})
			.catch((err) => console.log("Some problem", err));

		// this.props.navigation.navigate("Home");
	};
	handleEdit = (data) => {
		console.log("EDIT ");
		// console.log(this.props);
		data.name && this.props.navigation.navigate("EditForm", data);
		data.mobilename && this.props.navigation.navigate("EditFormDevice", data);
		data.carname && this.props.navigation.navigate("EditFormVehicle", data);
		// 	const { navigation } = this.props;
		// 	navigation.navigate("EditForm");
	};
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
				<View style={{ flexDirection: "row", alignSelf: "center" }}>
					<Button
						color={"red"}
						onPress={() => this.handleDelete(data._id)}
						title="Delete"
						// type="clear"
					/>
					<Button
						color={"blue"}
						title="Edit"
						onPress={() =>
							// this.props.navigation.navigate(
							// 	(data.name && "EditForm") ||
							// 		(data.mobilename && "EditFormDevice") ||
							// 		(data.carname && "EditFormVehicle"),
							// 	data
							// )
							this.handleEdit(data)
						}
						// type="clear"
					/>
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
