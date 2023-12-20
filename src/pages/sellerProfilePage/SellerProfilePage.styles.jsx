
import styled from 'styled-components';

export const SellerProfilePageWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	overflow: hidden;
	background-color: #f1f1f1;
	display: flex;
	flex-direction: column;
`;

export const SellerProfilePageContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	background-color: #ffffff;
`;

export const SellerProfilePageHeader = styled.header`
	background-color: #009ee4;
`;

export const SellerProfilePageHeaderNav = styled.nav`
	max-width: 1178px;
	margin: 0 auto;
	padding: 0 10px;
	height: 79px;
	display: flex;
	align-items: center;
	justify-content: end;
`;

export const SellerProfilePageHeaderLogo = styled.div`
	display: block;
`;

export const SellerProfilePageHeaderBtn = styled.button`
	width: 241px;
	height: 50px;
	border-radius: 6px;
	border: 1px;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	color: rgba(255, 255, 255, 1);
	background: rgba(0, 158, 228, 1);

	&:hover {
		background-color: #0080c1;
	}
`;

export const SellerProfilePageHeaderBtnPutAd = styled.button`
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

export const SellerProfilePageHeaderBtnLk = styled.button`
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

export const SellerProfilePageHeaderBtnMainEnter = styled.button`
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

export const SellerProfilePageMain = styled.div``;

export const SellerProfilePageMainContainer = styled.div`
	max-width: 1178px;
	margin: 0 auto;
	padding: 0px 10px 79px;
`;

export const SellerProfilePageMainCenterBlock = styled.div`
	margin: 0 auto;
`;

export const SellerProfilePageMainMenu = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	padding: 11px 0;
	width: 100%;
	padding: 31px 10px 64px;
`;

export const SellerProfilePageMenuForm = styled.div`
	margin-left: 60px;
	max-width: 1044px;
	width: 100%;
`;

export const SellerProfilePageTitle = styled.h2`
	color: rgba(0, 0, 0, 1);
	font-size: 40px;
	font-weight: 500;
	line-height: 88px;
	letter-spacing: 0em;
	text-align: left;
`;

export const SellerProfilePageSellContent = styled.div`
	width: 100%;
`;

export const SellerProfilePageSellSeller = styled.div`
	display: flex;
	align-items: top;
	justify-content: start;
`;

export const SellerProfilePageSellerLeft = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 50px;
`;

export const SellerProfilePageSellerImg = styled.div`
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

export const SellerProfilePageSellerRight = styled.div`
	width: auto;
`;

export const SellerProfilePageSellerTitle = styled.h3`
	font-size: 20px;
	font-weight: 600;
	line-height: 40px;
	color: #000000;
	margin-bottom: 0px;
`;

export const SellerProfilePageSellerCity = styled.p`
	font-size: 16px;
	line-height: 21px;
	color: #5f5f5f;
	margin-bottom: 10px;
`;

export const SellerProfilePageSellerInf = styled.p`
	font-size: 16px;
	line-height: 21px;
	color: #5f5f5f;
	margin-bottom: 10px;
`;

export const SellerProfilePageSellerBtn = styled.button`
	margin-top: 20px;
	background-color: #009ee4;
	border-radius: 6px;
	border: 1px solid #009ee4;
	width: 214px;
	height: 62px;
	font-size: 16px;
	font-weight: 500;
	line-height: 22px;
	color: #ffffff;
	font-family: 'Roboto', sans-serif;

	& span {
		display: block;
		font-size: 14px;
		font-weight: 400;
	}
`;

export const SellerProfilePageImgMobBlock = styled.div`
	display: block;
`;

export const SellerProfilePageMainTitle = styled.h3`
	font-size: 32px;
	font-weight: 500;
	line-height: 70px;
	letter-spacing: 0em;
	text-align: left;
`;

export const SellerProfilePageMainContent = styled.div`
	width: 100%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(4, 270px);
	grid-auto-rows: 441px;
	grid-gap: 40px 26px;
	justify-content: center;
`;

export const SellerProfilePageProfileSell = styled.div`
	margin-bottom: 44px;
`;

export const SellerProfilePageCardsImg = styled.div`
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

export const SellerProfilePageCardsTitle = styled.h3`
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

export const SellerProfilePageCardsPrice = styled.p`
	color: #000000;
	font-size: 22px;
	font-weight: 500;
	line-height: 33px;
	margin-bottom: 10px;
`;

export const SellerProfilePageCardsPlace = styled.p`
	font-size: 16px;
	line-height: 21px;
	color: #5f5f5f;
	margin-bottom: 4px;
`;

export const SellerProfilePageCardsDate = styled.p`
	font-size: 16px;
	line-height: 21px;
	color: #5f5f5f;
`;

export const SellerProfilePageCardsItem = styled.div`
	margin: 0;
`;

export const SellerProfilePageCardsCard = styled.div`
	width: 270px;
	height: 441px;
	display: flex;
	flex-direction: column;
`;
