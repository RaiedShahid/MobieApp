import React from "react";
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	Image,
	ScrollView,
	Button,
	TextInput,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import prsn from "./images/person.png";
import { Foundation } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ShowInfo = ({ navigation }) => {
	const personImage = navigation.getParam("personImage");
	const obj = {
		image: personImage,
	};

	return (
		<ScrollView>
			<View style={{ padding: 10 }}>
				<View style={styles.formBox}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignContent: "center",
						}}
					>
						<View>
							<Text
								style={{
									marginTop: "20%",
									fontWeight: "bold",
									fontSize: 20,
								}}
							>
								Status:
								<Text style={{ color: "red" }}>
									{navigation.getParam("category")}
								</Text>
							</Text>
						</View>
						<View style={{ height: "50%" }}>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate("ViewImage", obj);
								}}
							>
								<Image
									// source={prsn}
									source={{
										uri: `data:image/png;base64,${navigation.getParam(
											"personImage"
										)}`,
										// uri: navigation.getParam("personImage"),
									}}
									style={{
										paddingLeft: "40%",
										paddingTop: "40%",
										paddingBottom: "40%",
										width: "90%",
										height: "30%",
									}}
								/>
							</TouchableOpacity>
						</View>
					</View>

					<View
						style={{
							width: "100%",
							backgroundColor: "green",
							alignItems: "center",
							borderLeftWidth: 1,
							borderRightWidth: 1,
							borderTopWidth: 1,
							borderColor: "gray",
						}}
					>
						<Text style={{ fontSize: 25, color: "white" }}>
							{navigation.getParam("name") && "Person Information"}
							{navigation.getParam("mobilename") && "Device Information"}
							{navigation.getParam("carname") && "Vehicle Information"}
						</Text>
					</View>

					<View
						style={{
							borderRightWidth: 1,
							borderLeftWidth: 1,
							borderBottomWidth: 1,
							padding: 10,
							borderColor: "gray",
						}}
					>
						<View style={styles.iconBox}>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									backgroundColor: "gainsboro",
									borderRightWidth: 1,
									borderRightColor: "gray",
								}}
							>
								<Octicons
									style={{ padding: "1.5%" }}
									name={navigation.getParam("name") != null ? "person" : null}
									size={20}
									color="grey"
								/>
								<Text
									style={{
										paddingRight: "2%",
										paddingTop: "2%",
										paddingBottom: "2%",
										fontWeight: "bold",
									}}
								>
									{navigation.getParam("name") && "Name"}
									{navigation.getParam("mobilename") && "Device"}
									{navigation.getParam("carname") && "Vehicle"}
								</Text>
							</View>

							<Text style={styles.text}>
								{" "}
								{navigation.getParam("name") ||
									navigation.getParam("carname") ||
									navigation.getParam("mobilename")}
							</Text>
						</View>

						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								marginTop: 20,
							}}
						>
							<View style={styles.iconBox}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										backgroundColor: "gainsboro",
										borderRightWidth: 1,
										borderRightColor: "gray",
									}}
								>
									<FontAwesome5
										style={{ padding: "1.5%" }}
										name={
											navigation.getParam("age") != null
												? "birthday-cake"
												: null
										}
										size={20}
										color="grey"
									/>
									<Text
										style={{
											paddingRight: "2%",
											paddingTop: "2%",
											paddingBottom: "2%",
											fontWeight: "bold",
										}}
									>
										{navigation.getParam("age") && "Age"}
										{navigation.getParam("ime") && "IME"}
										{navigation.getParam("platenumber") && "Plate"}
									</Text>
								</View>
								<Text style={styles.text}>
									{" "}
									{navigation.getParam("age") ||
										navigation.getParam("platenumber") ||
										navigation.getParam("ime")}
								</Text>
							</View>
							{/* <View style={styles.iconBox}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										backgroundColor: "gainsboro",
										borderRightWidth: 1,
										borderRightColor: "gray",
									}}
								>
									<Foundation
										style={{ padding: "1.5%" }}
										name="male-female"
										size={20}
										color="grey"
									/>
									<Text
										style={{
											paddingRight: "2%",
											paddingTop: "2%",
											paddingBottom: "2%",
											fontWeight: "bold",
										}}
									>
										Gender
									</Text>
								</View>
								<Text style={styles.text}>{"Male"}</Text>
							</View> */}
						</View>
						{navigation.getParam("company") && (
							<View style={{ marginTop: 20 }}>
								<View style={styles.iconBox}>
									<View
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											backgroundColor: "gainsboro",
											borderRightWidth: 1,
											borderRightColor: "gray",
										}}
									>
										<Text
											style={{
												paddingRight: "2%",
												paddingLeft: "2%",
												paddingTop: "2%",
												paddingBottom: "2%",
												fontWeight: "bold",
											}}
										>
											Company
										</Text>
									</View>

									<Text style={styles.text}>
										{" "}
										{navigation.getParam("company")}
									</Text>
								</View>
							</View>
						)}
						{navigation.getParam("color") && (
							<View style={{ marginTop: 20 }}>
								<View style={styles.iconBox}>
									<View
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											backgroundColor: "gainsboro",
											borderRightWidth: 1,
											borderRightColor: "gray",
										}}
									>
										<Text
											style={{
												paddingRight: "2%",
												paddingTop: "2%",
												paddingLeft: "2%",
												paddingBottom: "2%",
												fontWeight: "bold",
											}}
										>
											Color
										</Text>
									</View>

									<Text style={styles.text}>
										{" "}
										{navigation.getParam("color")}
									</Text>
								</View>
							</View>
						)}
						{navigation.getParam("type") && (
							<View style={{ marginTop: 20 }}>
								<View style={styles.iconBox}>
									<View
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											backgroundColor: "gainsboro",
											borderRightWidth: 1,
											borderRightColor: "gray",
										}}
									>
										<Text
											style={{
												paddingRight: "2%",
												paddingTop: "2%",
												paddingLeft: "2%",
												paddingBottom: "2%",
												fontWeight: "bold",
											}}
										>
											Type
										</Text>
									</View>

									<Text style={styles.text}>
										{" "}
										{navigation.getParam("type")}
									</Text>
								</View>
							</View>
						)}
					</View>
					<View
						style={{
							width: "100%",
							backgroundColor: "green",
							alignItems: "center",
							borderLeftWidth: 1,
							borderRightWidth: 1,
							borderTopWidth: 1,
							borderColor: "gray",
							marginTop: 10,
						}}
					>
						<Text style={{ fontSize: 25, color: "white" }}>Details</Text>
					</View>
					<View
						style={{
							borderRightWidth: 1,
							borderLeftWidth: 1,
							borderBottomWidth: 1,
							padding: 10,
							borderColor: "gray",
						}}
					>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								marginTop: 20,
							}}
						>
							<View style={styles.iconBox}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										backgroundColor: "gainsboro",
										borderRightWidth: 1,
										borderRightColor: "gray",
									}}
								>
									<Fontisto
										style={{ padding: "1.5%" }}
										name="date"
										size={20}
										color="grey"
									/>
									<Text
										style={{
											paddingRight: "2%",
											paddingTop: "2%",
											paddingBottom: "2%",
											fontWeight: "bold",
										}}
									>
										Date
									</Text>
								</View>
								<Text style={styles.text}>
									{navigation.getParam("date")} {navigation.getParam("month")}{" "}
									{navigation.getParam("year")}
								</Text>
							</View>
							{/* <View style={styles.iconBox}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										backgroundColor: "gainsboro",
										borderRightWidth: 1,
										borderRightColor: "gray",
									}}
								>
									<Ionicons
										style={{ padding: "1.5%" }}
										name="md-time"
										size={20}
										color="grey"
									/>
									<Text
										style={{
											paddingRight: "2%",
											paddingTop: "2%",
											paddingBottom: "2%",
											fontWeight: "bold",
										}}
									>
										Time
									</Text>
								</View>
								<Text style={styles.text}> {"4:00"}</Text>
							</View> */}
						</View>

						<View style={{ marginTop: 20 }}>
							<View style={styles.iconBox}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										backgroundColor: "gainsboro",
										borderRightWidth: 1,
										borderRightColor: "gray",
									}}
								>
									<Entypo
										style={{ padding: "1.5%" }}
										name="location"
										size={20}
										color="grey"
									/>
									<Text
										style={{
											paddingRight: "2%",
											paddingTop: "2%",
											paddingBottom: "2%",
											fontWeight: "bold",
										}}
									>
										Province
									</Text>
								</View>
								<Text
									style={{
										padding: "2%",
										fontWeight: "bold",
										fontSize: 15,
										width: "60%",
									}}
								>
									{" "}
									{navigation.getParam("province")}
								</Text>
							</View>
						</View>
						<View style={{ marginTop: 20 }}>
							<View style={styles.iconBox}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										backgroundColor: "gainsboro",
										borderRightWidth: 1,
										borderRightColor: "gray",
									}}
								>
									<FontAwesome5
										style={{ padding: "1.5%" }}
										name="city"
										size={20}
										color="grey"
									/>
									<Text
										style={{
											paddingRight: "2%",
											paddingTop: "2%",
											paddingBottom: "2%",
											fontWeight: "bold",
										}}
									>
										City
									</Text>
								</View>
								<Text style={styles.text}> {navigation.getParam("city")}</Text>
							</View>
						</View>

						<View style={{ marginTop: 20 }}>
							<View style={styles.iconBox}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										backgroundColor: "gainsboro",
										borderRightWidth: 1,
										borderRightColor: "gray",
									}}
								>
									<FontAwesome
										style={{ padding: "1.5%" }}
										name="location-arrow"
										size={20}
										color="grey"
									/>
									<Text
										style={{
											paddingRight: "2%",
											paddingTop: "2%",
											paddingBottom: "2%",
											fontWeight: "bold",
										}}
									>
										Area
									</Text>
								</View>
								<Text
									style={{
										padding: "2%",
										fontWeight: "bold",
										fontSize: 15,
										width: "66%",
									}}
								>
									{" "}
									{navigation.getParam("area")}
								</Text>
							</View>
						</View>
						<View style={{ marginTop: 20 }}>
							<View style={styles.iconBox}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										backgroundColor: "gainsboro",
										borderRightWidth: 1,
										borderRightColor: "gray",
									}}
								>
									<MaterialIcons
										style={{ padding: "1.5%" }}
										name="details"
										size={20}
										color="grey"
									/>
									<Text
										style={{
											paddingRight: "2%",
											paddingTop: "2%",
											paddingBottom: "2%",
											fontWeight: "bold",
										}}
									>
										Other Details
									</Text>
								</View>
								<Text
									style={{
										padding: "2%",
										fontWeight: "bold",
										fontSize: 15,
										width: "66%",
									}}
								>
									{navigation.getParam("details")}
								</Text>
							</View>
						</View>
					</View>
					<View
						style={{
							width: "100%",
							backgroundColor: "green",
							alignItems: "center",
							borderLeftWidth: 1,
							borderRightWidth: 1,
							borderTopWidth: 1,
							borderColor: "gray",
							marginTop: 10,
						}}
					>
						<Text style={{ fontSize: 25, color: "white" }}>
							Contact Information
						</Text>
					</View>

					<View
						style={{
							borderRightWidth: 1,
							borderLeftWidth: 1,
							borderBottomWidth: 1,
							padding: 10,
							borderColor: "gray",
						}}
					>
						<View style={styles.iconBox}>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									backgroundColor: "gainsboro",
									borderRightWidth: 1,
									borderRightColor: "gray",
								}}
							>
								<Octicons
									style={{ padding: "1.5%" }}
									name="person"
									size={20}
									color="grey"
								/>
								<Text
									style={{
										paddingRight: "2%",
										paddingTop: "2%",
										paddingBottom: "2%",
										fontWeight: "bold",
									}}
								>
									Name
								</Text>
							</View>

							<Text style={styles.text}>
								{" "}
								{navigation.getParam("contactName")}
							</Text>
						</View>

						<View style={{ marginTop: 20 }}>
							<View style={styles.iconBox}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										backgroundColor: "gainsboro",
										borderRightWidth: 1,
										borderRightColor: "gray",
									}}
								>
									<MaterialIcons
										style={{ padding: "1.5%" }}
										name="contact-phone"
										size={20}
										color="grey"
									/>
									<Text
										style={{
											paddingRight: "2%",
											paddingTop: "2%",
											paddingBottom: "2%",
											fontWeight: "bold",
										}}
									>
										Contact No
									</Text>
								</View>
								<Text style={styles.text}>
									{navigation.getParam("contactNumber")}
								</Text>
							</View>
						</View>
						<View style={{ marginTop: 20 }}>
							<View style={styles.iconBox}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										backgroundColor: "gainsboro",
										borderRightWidth: 1,
										borderRightColor: "gray",
									}}
								>
									<Entypo
										style={{ padding: "1.5%" }}
										name="address"
										size={20}
										color="grey"
									/>
									<Text
										style={{
											paddingRight: "2%",
											paddingTop: "2%",
											paddingBottom: "2%",
											fontWeight: "bold",
										}}
									>
										Address
									</Text>
								</View>
								<Text
									style={{
										padding: "2%",
										fontWeight: "bold",
										fontSize: 15,
										width: "66%",
									}}
								>
									{navigation.getParam("contactAddress")}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default ShowInfo;

const styles = StyleSheet.create({
	formBox: {
		backgroundColor: "ghostwhite",

		marginBottom: 15,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "gray",
		padding: 10,
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
	},
	text: {
		padding: "2%",
		fontWeight: "bold",
		fontSize: 15,
	},
	iconBox: {
		flexDirection: "row",
		alignContent: "center",
		borderColor: "gray",
		borderWidth: 1,
	},
	iconBox1: {
		flexDirection: "row",
		alignContent: "center",
		borderColor: "gray",
		borderWidth: 1,
		marginTop: "10%",
	},
});
