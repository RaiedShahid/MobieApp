import React, { useState } from "react";
import { View, StyleSheet, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const DateTime = () => {
	const [date, setDate] = useState(new Date(1598051730000));
	const [mode, setMode] = useState("date");
	const [show, setShow] = useState(false);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === "ios");
		setDate(currentDate);
	};

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode("date");
	};

	const showTimepicker = () => {
		showMode("time");
	};

	return (
		<View>
			<View style={styles.button}>
				<View style={styles.iconBox}>
					<Fontisto
						style={{ padding: 10 }}
						name="date"
						size={20}
						color="darkkhaki"
					/>
					<Button
						color={"green"}
						onPress={showDatepicker}
						title="Select Date"
					/>
				</View>

				{/* <View style={styles.iconBox}>
          <Ionicons style={{ padding: 10 }} name="md-time" size={20} color="darkkhaki" />
          <Button color={'green'} onPress={showTimepicker} title="Select Time" />
        </View> */}
			</View>
			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					timeZoneOffsetInMinutes={0}
					value={date}
					mode={mode}
					is24Hour={true}
					display="default"
					onChange={onChange}
				/>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	button: {
		width: "80%",
		flexDirection: "row",
		justifyContent: "space-between",

		alignItems: "center",
	},
	iconBox: {
		width: "50%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
	},
});

export default DateTime;
