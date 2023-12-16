import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainPageWrapper = styled.div`
	width: 100%;
	min-height: 100%;

	background-color: #f1f1f1;
	display: flex;
	flex-direction: column;
`;



export const MainPageContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	background-color: #ffffff;
`;

export const MainPageHeader = styled.header`
	background-color: #009ee4;
	position: sticky;
	top: 0;
`;

export const MainPageHeaderNav = styled.nav`
	margin: 0 auto;
	height: 79px;
	display: flex;
	align-items: center;
	max-width: 1158px;
	justify-content: end;
`;

export const MainPageHeaderBtnMainEnter = styled.button`
	width: 224px;
	height: 40px;
	border: 1px solid #ffffff;
	border-radius: 6px;
	background-color: transparent;
	color: #ffffff;
	font-size: 16px;
	line-height: 1;
	&:hover {
		background: rgba(255, 255, 255, 0.15);
		border: 1px solid #ffffff;
	}
`;

export const MainPageMain = styled.main``;

export const MainPageMainSearch = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 11px 0;
	max-width: 1158px;
	margin: 0 auto;
	padding: 43px 0 43px;
	position: sticky;
	top: 79px;
	background: white;
	opacity: 0.99;
`;

export const MainPageMainLogoImg = styled.img`
	width: 54px;
	height: auto;
`;

export const MainPageMainForm = styled.form`
	margin-left: 60px;
	max-width: 1044px;
	width: 100%;
	display: flex;
`;

export const MainPageText = styled.input`
	width: 100%;
	height: 50px;
	border-width: 1px;
	border-style: solid;
	border-color: rgba(0, 0, 0, 0.2);
	border-radius: 6px;
	background-color: transparent;
	padding: 13px 19px;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #000000;
	&::placeholder {
		background-color: transparent;
		color: rgba(0, 0, 0, 0.3);
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
	}
`;

export const MainPageSearchBtn = styled.button`
	margin-left: 10px;
	width: 158px;
	height: 50px;
	background-color: #009ee4;
	border: 1px solid #009ee4;
	border-radius: 6px;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	&:hover {
		background: rgba(0, 128, 193, 1);
	}
`;

export const MainPageMainContainer = styled.div`
	max-width: 1158px;
	margin: 0 auto;
	padding: 0 0 37px 0;
`;

export const MainPageMainH2 = styled.h2`
	font-style: normal;
	font-weight: 500;
	font-size: 40px;
	line-height: 42px;
	color: #000000;
	height: 88px;
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

export const MainPageMainContent = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
`;

export const MainPageMainContentCards = styled.div`
	max-width: 1158px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 270px);
	grid-auto-rows: 441px;
	grid-gap: 40px 26px;
	justify-content: center;

	scrollbar-color: #ffffff #2e2e2e; // Firefox
	scrollbar-width: thin; // Firefox
	scrollbar-width: 0px; // Firefox

	&::-webkit-scrollbar {
		width: 0px;
		background-color: #009ee4;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #0080c1;
		border-radius: 3px;
	}
`;

export const MainPageMainCardsItemNav = styled(NavLink)`
	color: rgba(0, 158, 228, 1);
	text-decoration: none
`;

export const MainPageMainCardsItem = styled.div`
	margin: 0;
`;

export const MainPageMainCardsCard = styled.div`
	width: 270px;
	height: 441px;
	display: flex;
	flex-direction: column;
`;

export const MainPageMainCardImg = styled.div`
	width: 270px;
	height: 270px;
	background-color: #f0f0f0;
	margin-bottom: 20px;
`;

export const MainPageCardImg = styled.img`
	width: 100%;
	height: 100%;
`;

export const MainPageA = styled.a``;

export const MainPageCardPrice = styled.p`
	font-size: 22px;
	font-weight: 500;
	line-height: 33px;
	letter-spacing: 0em;
	text-align: left;
	padding-top: 10px;
	padding-bottom: 10px;
`;

export const MainPageCardTitle = styled.h3`
	font-size: 22px;
	font-weight: 500;
	line-height: 26px;
	letter-spacing: 0em;
	text-align: left;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const MainPageCardContent = styled.div`
	height: 151px;
`;

export const MainPageCardPlaceDate = styled.div``;

export const MainPageCardDate = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 21px;
	letter-spacing: 0em;
	text-align: left;
`;

export const MainPageCardPlace = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 21px;
	letter-spacing: 0em;
	text-align: left;
`;
