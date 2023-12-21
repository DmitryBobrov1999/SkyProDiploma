import styled from 'styled-components';

export const AdPageWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	background-color: #f1f1f1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center
`;

export const AdPageContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	background-color: #ffffff;
`;

export const AdPageHeader = styled.header`
	background-color: #009ee4;
`;

export const AdPageHeaderNav = styled.nav`
	max-width: 1178px;
	margin: 0 auto;
	padding: 0 10px;
	height: 79px;
	display: flex;
	align-items: center;
	justify-content: end;
`;

export const AdPageHeaderBtnMainEnter = styled.button`
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

export const AdPageHeaderBtnPutAd = styled.button`
	border: 1px solid #ffffff;
	border-radius: 6px;
	background-color: transparent;
	color: #ffffff;
	font-size: 16px;
	line-height: 1;
	width: 232px;
	height: 40px;
	&:hover {
		background: rgba(255, 255, 255, 0.15);
		border: 1px solid #ffffff;
	}
`;

export const AdPageHeaderBtnLk = styled.button`
	border: 1px solid #ffffff;
	border-radius: 6px;
	background-color: transparent;
	color: #ffffff;
	font-size: 16px;
	line-height: 1;
	width: 173px;
	height: 40px;
	margin-left: 10px;
	&:hover {
		background: rgba(255, 255, 255, 0.15);
		border: 1px solid #ffffff;
	}
`;

export const AdPageHeaderLogo = styled.div`
	display: block;
`;

export const AdPageHeaderBtn = styled.button`
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

export const AdPageMain = styled.div`
	margin: 0 auto;
`;

export const AdPageMainContent = styled.div`
	max-width: 792px;
	width: 100%;
	padding: 0 5px 117px;
`;

export const AdPageMainContainer = styled.div`
	max-width: 1178px;
	margin: 0 auto;
	padding: 0px 5px;
`;
export const AdPageMainMenu = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	padding: 11px 0;
	padding: 43px 5px 77px;
`;
export const AdPageMainArcticle = styled.div`
	max-width: 1178px;
	padding: 0 0 70px;
	margin: 0 auto;
	padding: 0 5px 70px;
`;

export const AdPageArcticleTitle = styled.h3`
	margin-bottom: 32px;
	padding: 0 5px;
	font-size: 32px;
	font-weight: 700;
	line-height: 45px;
	letter-spacing: 0em;
	text-align: left;
`;
export const AdPageArcticleText = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	color: rgba(0, 0, 0, 1);
`;
export const AdPageArcticleContent = styled.div`
	display: flex;
	align-items: top;
	${'' /* justify-content: center; */}
`;

export const AdPageArticleLeft = styled.div`
	max-width: 480px;
	margin-right: 54px;
	@media (max-width: 890px) {
		margin-right: 20px;
	}
`;

export const AdPageArticleImg = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const AdPageArticleFillImg = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: #f0f0f0;
	& img {
		width: 480px;
		height: 480px;
	}
`;

export const AdPageArticleRight = styled.div`
	max-width: 621px;
`;

export const AdPageArticleBlock = styled.div`
	display: flex;
	flex-direction: column;
`;

export const AdPageArticleTitle = styled.h3`
	font-size: 32px;
	font-weight: 700;
	line-height: 45px;
	letter-spacing: 0em;
	text-align: left;

	margin-bottom: 10px;
`;

export const AdPageArticleInfo = styled.div`
	margin-bottom: 34px;
`;

export const AdPageArticleDate = styled.p`
	color: #5f5f5f;
	margin-bottom: 4px;
	font-size: 16px;
	font-weight: 400;
	line-height: 21px;
	letter-spacing: 0em;
	text-align: left;
`;
export const AdPageArticleCity = styled.p`
	font-size: 16px;
	line-height: 21px;
	color: #5f5f5f;
	margin-bottom: 4px;
`;
export const AdPageArticleLink = styled.a`
	font-family: 'Noto Sans', sans-serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 21px;
	letter-spacing: 0em;
	text-align: left;

	color: #009ee4;
`;

export const AdPageArticlePrice = styled.p`
	font-size: 28px;
	line-height: 39px;
	font-weight: 700;
	margin-bottom: 20px;
`;

export const AdPageArticleBtn = styled.button`
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
	&:hover {
		background-color: #0080c1;
	}
	& span {
		display: block;
		font-size: 14px;
		font-weight: 400;
	}
`;
export const AdPageArticleAuthor = styled.div`
	margin-top: 34px;
	margin-bottom: 20px;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
`;

export const AdPageAuthorImg = styled.div`
	width: 40px;
	height: 40px;
	background-color: #f0f0f0;
	border-radius: 50%;
	& img {
		width: 40px;
		height: 40px;
		background-color: #f0f0f0;
		border-radius: 50%;
	}
`;

export const AdPageAuthorCont = styled.div`
	margin-left: 12px;
`;

export const AdPageAuthorName = styled.p`
	font-size: 20px;
	line-height: 26px;
	font-weight: 600;
	color: #009ee4;
`;

export const AdPageAuthorAbout = styled.p`
	font-size: 16px;
	line-height: 32px;
	color: #5f5f5f;
`;

export const AdPageFooter = styled.footer`
	display: none;
`;

export const AdPageArticleImgBar = styled.div`
	margin-top: 30px;
	width: 490px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: left;
	overflow: hidden;
	margin-left: -5px;
`;

export const AdPageArticleImgBarDiv = styled.div`
	width: 88px;
	min-width: 88px;
	height: 88px;
	background-color: #f0f0f0;
	margin: 0 5px;
	border: 2px solid rgba(0, 158, 228, 1);
	cursor: pointer;
	& img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}
`;

export const AdPageArticleImgBarMob = styled.div`
	display: none;
`;
