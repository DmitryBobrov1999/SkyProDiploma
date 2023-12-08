import styled from 'styled-components';

export const ProfilePageWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	overflow: hidden;
	background-color: #f1f1f1;
	display: flex;
	flex-direction: column;
`;

export const ProfilePageContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	background-color: #ffffff;
`;

export const ProfilePageHeader = styled.header`
	background-color: #009ee4;
`;

export const ProfilePageHeaderNav = styled.nav`
	max-width: 1178px;
	margin: 0 auto;
	padding: 0 10px;
	height: 79px;
	display: flex;
	align-items: center;
	justify-content: end;
`;

export const ProfilePageHeaderLogo = styled.div`
	display: block;
`;

export const ProfilePageHeaderBtnPutAd = styled.button`
	width: 232px;
	height: 40px;
	border: 1px solid #ffffff;
	border-radius: 6px;
	background-color: transparent;
	color: #ffffff;
	font-size: 16px;
	line-height: 1;
	&::hover {
		background: rgba(255, 255, 255, 0.15);
		border: 1px solid #ffffff;
	}
`;

export const ProfilePageHeaderBtnLk = styled.button`
	width: 173px;
	height: 40px;
	margin-left: 10px;
	border: 1px solid #ffffff;
	border-radius: 6px;
	background-color: transparent;
	color: #ffffff;
	font-size: 16px;
	line-height: 1;
	&::hover {
		background: rgba(255, 255, 255, 0.15);
		border: 1px solid #ffffff;
	}
`;

export const ProfilePageMainContainer = styled.div`
	max-width: 1178px;
	margin: 0 auto;
	padding: 0px 10px 79px;
`;

export const ProfilePageMainMenu = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	padding: 11px 0;
	width: 100%;
	padding: 31px 10px 64px;
`;

export const ProfilePageMainH2 = styled.h2`
	font-style: normal;
	font-weight: 500;
	font-size: 40px;
	line-height: 42px;
	color: #000000;
	margin-bottom: 30px;
`;

export const ProfilePageMainProfile = styled.div`
	width: 100%;
	padding: 0 0 70px;
`;

export const ProfilePageProfileContent = styled.div`
	width: 100%;
	margin: 0 auto;
`;

export const ProfilePageProfileTitle = styled.h3`
	font-size: 32px;
	font-weight: 500;
	line-height: 70px;
	letter-spacing: 0em;
	text-align: left;
	margin-bottom: 20px;
`;

export const ProfilePageProfileSettings = styled.div`
	display: flex;
	align-items: top;
`;

export const ProfilePageSettingsLeft = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 43px;
`;

export const ProfilePageSettingsImg = styled.div`
	width: 170px;
	height: 170px;
	border-radius: 50%;
	background-color: #f0f0f0;
	& img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
	}
`;

export const ProfilePageChangePhoto = styled.a`
	margin-top: 10px;
	margin-bottom: 30px;
	text-decoration: none;
	font-size: 16px;
	line-height: 24px;
	color: #009ee4;
`;

export const ProfilePageSettingsRight = styled.div`
	width: 630px;
`;

export const ProfilePageSettingsForm = styled.form`
	width: 630px;
	display: flex;
	flex-wrap: wrap;

	& input {
		background-color: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 6px;
		padding: 13px 19px;
		color: rgba(0, 0, 0, 1);
		outline: none;
		&:focus {
			border: 1px solid rgba(0, 158, 228, 1);
		}
		&::placeholder {
			color: rgba(0, 0, 0, 0.3);
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 24px;
		}
	}
	& input:focus ~ label,
	label:focus {
		
		color: rgba(0, 158, 228, 1);
	}

	& label {
		font-size: 16px;
		line-height: 24px;
		font-weight: 500;
		color: #c4c4c4;
		margin-bottom: 4px;
		display: block;
	}
`;

export const ProfilePageSettingsDiv = styled.div`
	display: flex;
	flex-direction: column-reverse;
	margin: 0 7px 20px;
`;

export const ProfilePageSettingsFname = styled.input`
	width: 300px;
`;

export const ProfilePageSettingsLname = styled.input`
	width: 300px;
`;

export const ProfilePageSettingsCity = styled.input`
	width: 300px;
`;

export const ProfilePageSettingsPhone = styled.input`
	width: 614px;
`;

export const ProfilePageSettingsBtn = styled.button`
	font-size: 16px;
	line-height: 1;
	color: #ffffff;
	width: 154px;
	height: 50px;
	margin: 10px 7px 0;
	border-radius: 6px;
	background: #009ee4;
	border: 1px solid #009ee4;
	&:hover {
		background-color: #0080c1;
	}
`;

export const ProfilePageCards = styled.div`
	max-width: 1158px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 270px);
	grid-auto-rows: 441px;
	grid-gap: 40px 26px;
	justify-content: center;

	overflow-y: auto;
	scrollbar-color: #ffffff #2e2e2e; // Firefox
	scrollbar-width: thin; // Firefox
	scrollbar-width: 0px; // Firefox
	height: 441px;

	&::-webkit-scrollbar {
		width: 0px;
		background-color: #009ee4;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #0080c1;
		border-radius: 3px;
	}
`;

export const ProfilePageCardsItem = styled.div`
	margin: 0;
`;

export const ProfilePageCardsCard = styled.div`
	width: 270px;
	height: 441px;
	display: flex;
	flex-direction: column;
`;

export const ProfilePageCardsImg = styled.div`
	width: 270px;
	height: 270px;
	background-color: #f0f0f0;

	& img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}
`;

export const ProfilePageCardsTitle = styled.h3`
	height: 52px;
	font-size: 22px;
	font-weight: 500;
	line-height: 26px;
	color: #009ee4;
	margin-bottom: 10px;
	margin-top: 20px;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ProfilePageCardsPrice = styled.p`
	color: #000000;
	font-size: 22px;
	font-weight: 500;
	line-height: 33px;
	margin-bottom: 10px;
`;

export const ProfilePageCardsPlace = styled.p`
	font-size: 16px;
	line-height: 21px;
	color: #5f5f5f;
`;

export const ProfilePageCardsDate = styled.p`
	font-size: 16px;
	line-height: 21px;
	color: #5f5f5f;
`;

export const ProfilePageMenuBtn = styled.button`
	width: 241px;
	height: 50px;
	border-radius: 6px;
	border: 1px;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	color: rgba(255, 255, 255, 1);
	margin-left: 60px;
	background: rgba(0, 158, 228, 1);

	&:hover {
		background-color: #0080c1;
	}
`;
