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

class Filteration extends Component {
	state = {
		personInfo: {
			// month: "January",
			// date: "01",
			// year: "2020",
			// province: "Punjab",
			// city: "Lahore",
			// age: "0-10",
			// gender: "Male",
			month: "",
			date: "",
			type: "",
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
	setShow = () => {
		this.props.setBoolean(false);
	};

	handleMonthChange = (e) => {
		const personInfo = { ...this.state.personInfo };
		personInfo.month = e;
		this.setState({ personInfo });
	};
	handleTypeChange = (e) => {
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
								marginTop: "0%",
								padding: 40,

								height: "100%",
							}}
						>
							<View style={{ marginLeft: "91%", marginTop: "-12%" }}>
								<AntDesign
									name="close"
									size={24}
									color="gray"
									onPress={this.setShow}
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
									Filteration
								</Text>
							</View>
							<View style={{ marginBottom: "5%" }}>
								<Text style={{ fontWeight: "bold", fontSize: 15 }}>
									Category
								</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<View
									style={{
										width: "25%",
										borderStyle: "solid",
										borderWidth: 1,
										borderColor: "grey",
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "center",
										backgroundColor:
											this.state.allBtn === true ? "grey" : "white",
									}}
								>
									<TouchableOpacity onPress={this.allButton}>
										<Text
											style={{
												color: this.state.allBtn === true ? "white" : "grey",
												// padding: 2,
												fontWeight: "bold",
												fontSize: 15,
											}}
										>
											All
										</Text>
									</TouchableOpacity>
								</View>

								<View style={{ width: "10%" }}></View>
								<View
									style={{
										width: "25%",
										borderStyle: "solid",
										borderWidth: 1,
										borderColor: "red",
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "center",
										backgroundColor:
											this.state.lostBtn === true ? "red" : "white",
									}}
								>
									<TouchableOpacity onPress={this.lostButton}>
										<Text
											style={{
												color: this.state.lostBtn === true ? "white" : "red",
												// padding: 2,
												fontWeight: "bold",
												fontSize: 15,
											}}
										>
											Lost
										</Text>
									</TouchableOpacity>
								</View>
								<View style={{ width: "10%" }}></View>
								<View
									style={{
										width: "25%",
										borderStyle: "solid",
										borderWidth: 1,
										borderColor: "orange",
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "center",
										backgroundColor:
											this.state.foundbtn === true ? "orange" : "white",
									}}
								>
									<TouchableOpacity onPress={this.foundButton}>
										<Text
											style={{
												color:
													this.state.foundbtn === true ? "white" : "orange",
												// padding: 2,
												fontWeight: "bold",
												fontSize: 15,
											}}
										>
											Found
										</Text>
									</TouchableOpacity>
								</View>
							</View>
							<View>
								<Text
									style={{
										fontSize: RFPercentage(3),

										fontWeight: "bold",
									}}
								>
									Type
								</Text>
								<View style={{ flexDirection: "row" }}>
									<View style={{ width: "50%" }}>
										<Picker
											selectedValue={this.state.personInfo.type}
											name="month"
											style={{
												height: 50,
												width: "90%",
											}}
											onValueChange={(itemValue, itemIndex) =>
												this.handleTypeChange(itemValue)
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
							<View style={{ marginTop: "5%" }}>
								<Text style={{ fontWeight: "bold", fontSize: 15 }}> Date</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<View style={{ width: "70%" }}>
									<Picker
										selectedValue={this.state.personInfo.month}
										name="month"
										style={{
											height: 50,
											width: "90%",
										}}
										onValueChange={(itemValue, itemIndex) =>
											this.handleMonthChange(itemValue)
										}
									>
										<Picker.Item label="January" value="January" />
										<Picker.Item label="February" value="February" />
										<Picker.Item label="March" value="March" />
										<Picker.Item label="April" value="April" />
										<Picker.Item label="May" value="May" />
										<Picker.Item label="June" value="June" />
										<Picker.Item label="July" value="July" />
										<Picker.Item label="August" value="August" />
										<Picker.Item label="September" value="September" />
										<Picker.Item label="October" value="October" />
										<Picker.Item label="November" value="November" />
										<Picker.Item label="December" value="December" />
									</Picker>
								</View>
								<View style={{ width: "40%" }}>
									<Picker
										selectedValue={this.state.personInfo.date}
										style={{ height: 50, width: "100%" }}
										name="month"
										onValueChange={(itemValue, itemIndex) =>
											this.handleDateChange(itemValue)
										}
									>
										<Picker.Item label="01" value="01" />
										<Picker.Item label="02" value="02" />
										<Picker.Item label="03" value="03" />
										<Picker.Item label="04" value="04" />
										<Picker.Item label="05" value="05" />
										<Picker.Item label="06" value="06" />
										<Picker.Item label="07" value="07" />
										<Picker.Item label="08" value="08" />
										<Picker.Item label="09" value="09" />
										<Picker.Item label="10" value="10" />
										<Picker.Item label="11" value="11" />
										<Picker.Item label="12" value="12" />
										<Picker.Item label="13" value="13" />
										<Picker.Item label="14" value="14" />
										<Picker.Item label="15" value="15" />
										<Picker.Item label="16" value="16" />
										<Picker.Item label="17" value="17" />
										<Picker.Item label="18" value="18" />
										<Picker.Item label="19" value="19" />
										<Picker.Item label="20" value="20" />
										<Picker.Item label="21" value="21" />
										<Picker.Item label="22" value="22" />
										<Picker.Item label="23" value="23" />
										<Picker.Item label="24" value="24" />
										<Picker.Item label="25" value="25" />
										<Picker.Item label="26" value="26" />
										<Picker.Item label="27" value="27" />
										<Picker.Item label="28" value="28" />
										<Picker.Item label="29" value="29" />
										<Picker.Item label="30" value="30" />
										<Picker.Item label="31" value="31" />
									</Picker>
								</View>
							</View>
							<View style={{}}>
								<Picker
									selectedValue={this.state.personInfo.year}
									style={{ height: 50, width: "50%" }}
									onValueChange={(itemValue, itemIndex) =>
										this.handleYearChange(itemValue)
									}
								>
									<Picker.Item label="2020" value="2020" />
									<Picker.Item label="2019" value="2019" />
									<Picker.Item label="2018" value="2018" />
									<Picker.Item label="2017" value="2017" />
									<Picker.Item label="2016" value="2016" />
									<Picker.Item label="2015" value="2015" />
									<Picker.Item label="2014" value="2014" />
									<Picker.Item label="2013" value="2013" />
									<Picker.Item label="2012" value="2012" />
									<Picker.Item label="2011" value="2011" />
									<Picker.Item label="2010" value="2010" />
									<Picker.Item label="2008" value="2008" />
									<Picker.Item label="2007" value="2007" />
									<Picker.Item label="2006" value="2006" />
									<Picker.Item label="2005" value="2005" />
									<Picker.Item label="2004" value="2004" />
									<Picker.Item label="2003" value="2003" />
									<Picker.Item label="2002" value="2002" />
									<Picker.Item label="2001" value="2001" />
									<Picker.Item label="2000" value="2000" />
								</Picker>
							</View>
							<View style={{ marginTop: "5%" }}>
								<Text style={{ fontWeight: "bold", fontSize: 15 }}> Area</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<View style={{ width: "60%" }}>
									<Picker
										selectedValue={this.state.personInfo.province}
										name="month"
										style={{ height: 50, width: "80%" }}
										onValueChange={(itemValue, itemIndex) =>
											this.handleProvinceChange(itemValue)
										}
									>
										<Picker.Item label="Punjab" value="Punjab" />
										<Picker.Item label="Sindh" value="Sindh" />
										<Picker.Item label="Balochistan" value="Balochistan" />
										<Picker.Item label="KPK" value="KPK" />
									</Picker>
								</View>
								<View style={{ width: "50%" }}>
									<Picker
										selectedValue={this.state.personInfo.city}
										style={{ height: 50, width: "100%" }}
										name="month"
										onValueChange={(itemValue, itemIndex) =>
											this.handleCityChange(itemValue)
										}
									>
										<Picker.Item label="Lahore" value="Lahore" />
										<Picker.Item label="Karachi" value="Karachi" />
										<Picker.Item label="Quetta" value="Quetta" />
										<Picker.Item label="Peshawar" value="Peshawar" />
									</Picker>
								</View>
							</View>
							<View style={{ flexDirection: "row", marginTop: "5%" }}>
								<View style={{ width: "50%" }}>
									<Text style={{ fontWeight: "bold", fontSize: 15 }}>
										Age Group
									</Text>
								</View>
								<View>
									<Text style={{ fontWeight: "bold", fontSize: 15 }}>
										Gender
									</Text>
								</View>
							</View>
							<View style={{ flexDirection: "row" }}>
								<View style={{ width: "50%" }}>
									<Picker
										selectedValue={this.state.personInfo.age}
										name="month"
										style={{ height: 50, width: "100%" }}
										onValueChange={(itemValue, itemIndex) =>
											this.handleAgeChange(itemValue)
										}
									>
										<Picker.Item label="0 - 10" value="1-10" />
										<Picker.Item label="11 - 20" value="10-20" />
										<Picker.Item label="21 - 30" value="20-30" />
										<Picker.Item label="31 - 40" value="30-40" />
										<Picker.Item label="41 - 50" value="40-50" />
										<Picker.Item label="51 - 60" value="50-60" />
										<Picker.Item label="60+" value="60+" />
									</Picker>
								</View>
								<View style={{ width: "50%" }}>
									<Picker
										selectedValue={this.state.personInfo.gender}
										style={{ height: 50, width: "100%" }}
										name="month"
										onValueChange={(itemValue, itemIndex) =>
											this.handleGenderChange(itemValue)
										}
									>
										<Picker.Item label="Male" value="Male" />
										<Picker.Item label="Female" value="Female" />
									</Picker>
								</View>
							</View>
							<View
								style={{
									// marginLeft: "30%",
									marginTop: "10%",
									flexDirection: "row",
								}}
							>
								<View style={{ width: "40%" }}>
									<Button
										title="Confirm"
										color="green"
										onPress={this.handleConfirm}
									/>
								</View>
								<View style={{ width: "20%" }}></View>
								<View style={{ width: "40%" }}>
									<Button
										title="Reset"
										color="#6699CC"
										onPress={this.handleReset}
									/>
								</View>
							</View>
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}

export default Filteration;
