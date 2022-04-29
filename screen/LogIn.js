import { TouchableOpacity, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";

export default function Login() {
	const [email, onChangeEmail] = useState("");
	const [password, onChangePassword] = useState("");

	return (
		<Container>
			<Holder>
				<MyText1>Login your Account...!</MyText1>
			</Holder>

			<Wrapper>
				<MyText clo="#004080">Email </MyText>
				<Input
					placeholder="User Name"
					value={email}
					onChangeText={onChangeEmail}
				/>
			</Wrapper>
			<Wrapper>
				<MyText clo="#004080">Password</MyText>
				<Input
					placeholder="User Name"
					value={password}
					onChangeText={onChangePassword}
				/>
			</Wrapper>
			<Wrapper>
				<MyButton>
					<MyText clo="white">Register</MyText>
				</MyButton>
			</Wrapper>

			<MyViewer>
				<Text>Don't have an Account</Text>
				<TouchableOpacity>
					<Text
						style={{
							color: "#004080",
							fontWeight: "bold",
							marginLeft: 5,
							marginRight: 20,
						}}
					>
						Sign up Here
					</Text>
				</TouchableOpacity>
			</MyViewer>
		</Container>
	);
}

const MyViewer = styled(View)`
	flex-direction: row;
	justify-content: center;
	margin-right: 10;
`;

const MyButton = styled(TouchableOpacity)`
	background-color: black;
	width: 350;
	height: 45;
	margin-top: 30;
	border-color: #004080;
	border-width: 1;
	justify-content: center;
	align-items: center;
	border-radius: 3;
`;

const Holder = styled(View)`
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled(View)`
	margin-bottom: 15;
`;

const MyText1 = styled(Text)`
	font-family: Poppins;
	font-weight: bold;
	font-size: 17;
	color: #004080;
	margin-bottom: 30;
`;

const MyText = styled(Text)`
	font-family: Poppins;
	font-weight: bold;
	font-size: 17;
	color: ${({ clo }) => clo};
`;

const Input = styled(TextInput)`
	border-width: 1;
	border-color: #004080;
	width: 350;
	height: 45;
	margin-top: 5;
	border-radius: 4;
	padding-left: 5;
	font-family: Poppins;
	color: #004080;
`;
const Container = styled(View)`
	flex: 1;
	margin-top: 50;
	margin-left: 20;
`;
