import React, { Component } from "react";
import {
	Text,
	Button,
	View,
	Modal,
	Picker,
	TouchableOpacity,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";

class Type extends Component {
	state = {
		personInfo: {
			// month: "January",
			// date: "01",
			// year: "2020",
			// province: "Punjab",
			// city: "Lahore",
			// age: "0-10",
			// gender: "Male",
			type: "",
			date: "",
			year: "",
			province: "",
			city: "",
			age: "",
			gender: "",
		},
		allBtn: true,
		lostBtn: false,
		foundbtn: false,
	};
	setTypeShow = () => {
		this.props.setBoolean(false);
	};

	handleMonthChange = (e) => {
		const personInfo = { ...this.state.personInfo };
		personInfo.type = e;
		this.setState({ personInfo });
	};
	handleDateChange = (e) => {
		const personInfo = { ...this.state.personInfo };
		personInfo.date = e;
		this.setState({ personInfo });
	};
	handleYearChange = (e) => {
		const personInfo = { ...this.state.personInfo };
		personInfo.year = e;
		this.setState({ personInfo });
	};
	handleProvinceChange = (e) => {
		const personInfo = { ...this.state.personInfo };
		personInfo.province = e;
		this.setState({ personInfo });
	};
	handleCityChange = (e) => {
		const personInfo = { ...this.state.personInfo };
		personInfo.city = e;
		this.setState({ personInfo });
	};
	handleAgeChange = (e) => {
		const personInfo = { ...this.state.personInfo };
		personInfo.age = e;
		this.setState({ personInfo });
	};

	handleGenderChange = (e) => {
		const personInfo = { ...this.state.personInfo };
		personInfo.gender = e;
		this.setState({ personInfo });
	};
	handleReset = () => {
		const personInfo = { ...this.state.personInfo };
		personInfo.month = "";
		personInfo.date = "";
		personInfo.year = "";
		personInfo.province = "";
		personInfo.city = "";
		personInfo.age = "";
		this.setState({ personInfo });
	};

	handleConfirm = () => {
		// console.warn("State....", this.state.personInfo);
		this.props.filtraion(this.state.personInfo);
		this.props.setBoolean(false);
		this.state.allBtn === true ? this.props.genre("All") : null;
		this.state.lostBtn === true ? this.props.genre("Lost") : null;
		this.state.foundbtn === true ? this.props.genre("Found") : null;
	};
	allButton = () => {
		const allBtn = this.state.allBtn;
		const lostBtn = this.state.lostBtn;
		const foundbtn = this.state.foundbtn;
		this.setState({ lostBtn: false, allBtn: true, foundbtn: false });
	};
	lostButton = () => {
		const lostBtn = this.state.lostBtn;
		const allBtn = this.state.allBtn;
		const foundbtn = this.state.foundbtn;
		this.setState({ lostBtn: true, allBtn: false, foundbtn: false });
	};
	foundButton = () => {
		const lostBtn = this.state.lostBtn;
		const allBtn = this.state.allBtn;
		const foundbtn = this.state.foundbtn;
		this.setState({ lostBtn: false, allBtn: false, foundbtn: true });
	};
	render() {
		const { show } = this.props;

		return (
			<View>
				<Modal transparent={true} visible={show}>
					<View style={{ backgroundColor: "#000000aa", flex: 1 }}>
						<View
							style={{
								backgroundColor: "#ffffff",
								marginLeft: "10%",
								marginTop: "16%",
								padding: 40,

								height: "83%",
							}}
						>
							<View style={{ marginLeft: "91%", marginTop: "-12%" }}>
								<AntDesign
									name="close"
									size={24}
									color="gray"
									onPress={this.setTypeShow}
								/>
							</View>

							<View
								style={{
									alignItems: "center",
								}}
							>
								<Text
									style={{
										fontSize: RFPercentage(4),

										fontWeight: "bold",
									}}
								>
									Type
								</Text>
							</View>

							<View style={{ flexDirection: "row" }}>
								<View style={{ width: "70%" }}>
									<Picker
										selectedValue={this.state.personInfo.type}
										name="month"
										style={{
											height: 50,
											width: "90%",
										}}
										onValueChange={(itemValue, itemIndex) =>
											this.handleMonthChange(itemValue)
										}
									>
										<Picker.Item label="All" value="All" />
										<Picker.Item label="Person" value="Person" />
										<Picker.Item label="Car" value="Car" />
										<Picker.Item label="Bike" value="Bike" />
										<Picker.Item label="Mobile" value="Mobile" />
										<Picker.Item label="Tablet" value="Tablet" />
									</Picker>
								</View>
							</View>
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}

export default Type;
