import React, { useState } from "react";
import { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Button,
	TouchableOpacity,
	AsyncStorage,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import jwtDecode from "jwt-decode";
import Cards from "./Cards";
import FilterButton from "./filterButton";
import Header from "./header";
import Search from "./search";
import ShowInfo from "./showInfo";
import axios from "axios";
import HomeButton from "./homeButton";
import PostButton from "./postButton";
import ProfileButton from "./profileButton";
import Filteration from "./filteration";
import ProfilePage from "./ProfilePage";
import Type from "./type";

export default class Home extends Component {
	state = {
		info: [],
		show: false,
		showtype: false,
		filtration: [],
		selectedGenre: null,
		searchQuery: "",
	};
	//LAN        192.168.18.98
	//Ethernet1  192.168.181.1
	//Ethernet   192.168.186.1

	componentDidMount() {
		axios
			.get("http://192.168.18.144:4000/home/")
			.then(async (res) => {
				const info = res.data;
				this.setState({ info });
				// console.warn(res.data);
				// console.log("data.. ", res.data);
				try {
					const jwt = await AsyncStorage.getItem("token");
					const user = jwtDecode(jwt);
					// console.log(user);
					this.setState({ user });
				} catch (ex) {
					console.log("Token Problem", ex);
				}
			})
			.catch((err) => console.log("Some problem n", err));

		this.willFocusSubscription = this.props.navigation.addListener(
			"willFocus",
			() => {
				axios
					.get("http://192.168.18.144:4000/home/")
					.then(async (res) => {
						const info = res.data;
						this.setState({ info });
						// console.warn(res.data);
						// console.log("data.. ", res.data);
						try {
							const jwt = await AsyncStorage.getItem("token");
							const user = jwtDecode(jwt);
							// console.log("User from cdm" + user);
							this.setState({ user });
						} catch (ex) {
							console.log("Token Problem", ex);
							this.setState({ user: null });
						}
					})
					.catch((err) => console.log("Some problem n", err));
			}
		);
	}

	componentWillUnmount() {
		this.willFocusSubscription.remove();
	}

	// const [show, setShow] = useState(false);

	setBooleanState = (e) => {
		// const show = { ...this.state.show };
		// show = false;
		this.setState({ show: false });
	};
	setTypeBooleanState = (e) => {
		// const show = { ...this.state.show };
		// show = false;
		this.setState({ showtype: false });
	};
	setShow = (e) => {
		// const i = true;
		// const show = { ...this.state };
		// show.show = i;

		this.setState({ show: true });
	};
	setTypeShow = (e) => {
		// const i = true;
		// const show = { ...this.state };
		// show.show = i;

		this.setState({ showtype: true });
	};

	handelSearch = (query) => {
		this.setState({
			searchQuery: query,
		});
	};
	getPagedData = () => {
		const { searchQuery, info, selectedGenre } = this.state;

		const filtration = this.state.filtration;
		const age = filtration.age;
		//age.split("");

		let filtered = info;

		if (selectedGenre) {
			if (selectedGenre === "All") {
			} else filtered = info.filter((m) => m.category === selectedGenre);
		}
		if (searchQuery)
			// filtered = filtered.filter((m) =>
			// 	m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
			// );
			filtered = filtered.filter((m) =>
				m.name != null
					? m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
					: m.mobilename != null
					? m.mobilename.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
					  m.ime.toLowerCase().startsWith(searchQuery.toLowerCase())
					: m.carname != null
					? m.carname.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
					  m.platenumber.toLowerCase().startsWith(searchQuery.toLowerCase())
					: null
			);

		if (filtration) {
			if (filtration.province) {
				if (filtration.province === "Sindh") {
					filtered = filtered.filter((m) => m.province === "Sindth");
				} else if (filtration.province === "KPK") {
					filtered = filtered.filter(
						(m) => m.province === "Khyber Pakhtunkhwa"
					);
				} else
					filtered = filtered.filter((m) => m.province === filtration.province);
			}
			if (filtration.city) {
				filtered = filtered.filter((m) => m.city === filtration.city);
			}
			if (filtration.year) {
				filtered = filtered.filter((m) => m.year === filtration.year);
			}
			if (filtration.month) {
				let month = filtration.month + "";
				month = month.substring(0, 3);
				filtered = filtered.filter((m) => m.month === month);
			}
			if (filtration.date) {
				filtered = filtered.filter((m) => m.date === filtration.date);
			}
			if (filtration.type) {
				if (filtration.type === "All") {
					filtered = filtered.filter((m) => m.area);
				} else if (filtration.type === "Person") {
					filtered = filtered.filter((m) => m.age);
					// console.log("Person");
					// console.log(filtered);
				} else filtered = filtered.filter((m) => m.type === filtration.type);
			}

			if (filtration.age) {
				if (filtration.age === "1-10") {
					filtered = filtered.filter((m) => m.age >= 1 && m.age <= 10);
				} else if (filtration.age === "10-20") {
					filtered = filtered.filter((m) => m.age >= 10 && m.age <= 20);
				} else if (filtration.age === "20-30") {
					filtered = filtered.filter((m) => m.age >= 20 && m.age <= 30);
				} else if (filtration.age === "30-40") {
					filtered = filtered.filter((m) => m.age >= 30 && m.age <= 40);
				} else if (filtration.age === "40-50") {
					filtered = filtered.filter((m) => m.age >= 40 && m.age <= 50);
				} else if (filtration.age === "50-60") {
					filtered = filtered.filter((m) => m.age >= 50 && m.age <= 60);
				} else if (filtration.age === "60+") {
					filtered = filtered.filter((m) => m.age >= 60);
				}
			}
		}

		const data = filtered;

		return { data: data };
	};

	handleFiltration = (e) => {
		// console.warn("home", e);

		this.setState({ filtration: e });
	};
	handleCategory = (e) => {
		// console.warn("home", e);

		this.setState({ selectedGenre: e });
	};
	render() {
		const { navigation } = this.props;
		const { data } = this.getPagedData();
		const user = this.state.user;
		console.log("USER RENDER", user);
		// console.log(this.state.user);
		return (
			<React.Fragment>
				<View style={{ height: "100%" }}>
					<View style={{ height: "14%" }}>
						<View
							style={{
								flexDirection: "row",
								paddingLeft: "8%",
								paddingTop: 8,

								paddingRight: "8%",
							}}
						>
							<View style={styles.searchView}>
								<Search
									value={this.state.searchQuery}
									onChange={this.handelSearch}
								/>
							</View>
							<TouchableOpacity style={styles.searchIcon} activeOpacity={0.8}>
								<View>
									<FontAwesome name="search" size={20} color="white" />
								</View>
							</TouchableOpacity>
						</View>
						<TouchableOpacity onPress={this.setShow}>
							<View style={{ marginTop: "1%" }}>
								<FilterButton />
							</View>
						</TouchableOpacity>
					</View>
					{/* <View> */}

					{/* <TouchableOpacity onPress={this.setTypeShow}>
							<View style={{ marginTop: "1%" }}>
								<Text>Type</Text>
							</View>
						</TouchableOpacity> */}
					{/* </View> */}

					<View>
						{/* <Type
							show={this.state.showtype}
							setBoolean={this.setTypeBooleanState}
						/> */}
						<Filteration
							show={this.state.show}
							setBoolean={this.setBooleanState}
							filtraion={this.handleFiltration}
							genre={this.handleCategory}
						/>
					</View>
					<View
						style={{
							paddingLeft: "2%",
							paddingTop: "2%",
							paddingRight: "2%",
							height: "77%",
						}}
					>
						<FlatList
							// data={this.state.info}
							data={data}
							renderItem={({ item }) => (
								<TouchableOpacity
									activeOpacity={0.8}
									onPress={() => navigation.navigate("ShowInfo", item)}
								>
									<View style={{ marginBottom: "2%" }}>
										<Cards data={item} />
									</View>
								</TouchableOpacity>
							)}
							keyExtractor={(item, index) => index.toString()}
						/>
					</View>
					<View
						style={{ flex: 1, justifyContent: "flex-end", marginBottom: 0 }}
					>
						<View style={{ flexDirection: "row" }}>
							<View style={{ flex: 1 }}>
								<TouchableOpacity
									activeOpacity={0.8}
									onPress={() => {
										navigation.navigate("Home");
									}}
								>
									<HomeButton />
								</TouchableOpacity>
							</View>
							<View style={{ flex: 1 }}>
								<TouchableOpacity
									activeOpacity={0.8}
									onPress={() => {
										navigation.navigate("SelectForm");
									}}
								>
									<PostButton />
								</TouchableOpacity>
							</View>
							<View style={{ flex: 1 }}>
								<TouchableOpacity
									activeOpacity={0.8}
									onPress={() => {
										!this.state.user && navigation.navigate("LoginForm");
										this.state.user && navigation.navigate("ProfilePage", user);
									}}
								>
									<ProfileButton />
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	headerview: {},
	searchView: {
		flex: 6,
	},
	searchIcon: {
		flex: 1,
		backgroundColor: "green",
		alignItems: "center",
		justifyContent: "center",
		alignContent: "center",
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
	},
});
