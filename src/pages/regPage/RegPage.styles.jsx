import styled from 'styled-components';

export const RegPageWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	overflow: hidden;
`;

export const RegPageContainerEnter = styled.div`
	max-width: 100%;
	height: 100vh;
	margin: 0 auto;
	position: relative;
	background-color: #f4f5f6;
`;

export const RegPageModalBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const RegPageModalForm = styled.form`
	width: 366px;
	background-color: #ffffff;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 43px 47px 47px 40px;
`;

export const RegPageModalLogo = styled.div`
	width: 140px;
	height: 21px;
	margin-bottom: 42px;
	background-color: transparent;

	& img {
		width: 140px;
		height: auto;
	}
`;

export const RegPageModalInput = styled.input`
	width: 100%;
	border-top: none;
	border-left: none;
	border-right: none;
	border-bottom: 1px solid #d0cece;
	padding: 8px 1px;
	margin-bottom: 38px;

	&::placeholder {
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: -0.05px;
		color: #d0cece;
	}
`;

export const RegPageModalBtnSignup = styled.button`
	width: 278px;
	height: 52px;
	background: rgba(0, 158, 228, 1);
	border: 1px solid #d0cece;
	border-radius: 6px;
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	letter-spacing: -0.05px;
	color: rgba(255, 255, 255, 1);
	margin-top: 22px;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background: rgba(0, 128, 193, 1);
	}

	& a {
		width: 100%;
		height: 100%;
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: -0.05px;
		color: #000000;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
