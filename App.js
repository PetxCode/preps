import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import styled from "styled-components";
import Register from "./screen/Register";

export default (props) => {
	const [isFont] = useFonts({
		Poppins: require("./assets/fonts/Poppins-Medium.ttf"),
		Poppins2: require("./assets/fonts/Poppins-Bold.ttf"),
	});

	if (!isFont) {
		return <AppLoading />;
	}

	return (
		<Container>
			<Register />
		</Container>
	);
};

const Container = styled.View`
	flex: 1;
	/* justify-content: center;
	align-items: center; */
`;
