import styled from 'styled-components';

export const CommentsPageWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	background: rgba(255, 255, 255, 1);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const CommentsPageContainer = styled.div`
	max-width: 100%;
	margin: 0 auto;
	background-color: #f4f5f6;
	position: absolute;
	top: 0;
	left: 50%;
`;

export const CommentsPageModalBlock = styled.div`
	position: fixed;
	z-index: 10;
	left: calc(50% - (800px / 2));
	top: 60px;
	opacity: 1;
`;

export const CommentsPageModalContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 800px;
	height: auto;
	padding: 20px 92px 57px 50px;
	background-color: #ffffff;
	border-radius: 12px;
	border: 1px solid grey;
`;

export const CommentsPageModalTitle = styled.h3`
	font-size: 32px;
	line-height: 46px;
	font-weight: 500;
	color: #000000;
	margin-bottom: 15px;
`;

export const CommentsPageModalBtnClose = styled.div`
	width: 23px;
	height: 23px;
	position: absolute;
	top: 47px;
	right: 50px;
	z-index: 3;
	cursor: pointer;
`;

export const CommentsPageModalBtnCloseLine = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	&::after,
	&::before {
		content: '';
		position: absolute;
		width: 30px;
		height: 2px;
		border-radius: 2px;
		background-color: #d9d9d9;
		top: 47%;
		right: -4px;
	}
	&:hover {
		&::after,
		&::before {
			background-color: #0080c1;
		}
	}

	&::before {
		transform: rotate(45deg);
	}

	&::after {
		transform: rotate(-45deg);
	}
`;

export const CommentsPageModalScroll = styled.div`
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	overflow-y: auto;
	scrollbar-color: #ffffff #2e2e2e; // Firefox
	scrollbar-width: thin; // Firefox
	scrollbar-width: 0px; // Firefox

	&::-webkit-scrollbar {
		width: 0px;
		background-color: #ffffff;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #d9d9d9;
		border-radius: 0px;
	}
`;

export const CommentsPageModalFormNewArt = styled.form`
	margin-top: 5px;
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const CommentsPageModalNewArtBlock = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 14px;
	& label {
		margin-bottom: 14px;
		font-size: 16px;
		line-height: 32px;
		font-weight: 600;
		color: #000000;
	}
`;

export const CommentsPageFormNewAreaTextArea = styled.textarea`
	font-family: 'Roboto', sans-serif;
	padding: 10px 19px;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 6px;
	font-size: 16px;
	line-height: 1;
	width: 100%;
	height: 100px;
	max-height: 100px;

	&::placeholder {
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #0000004d;
	}
`;

export const CommentsPageFormBtnPub = styled.button`
	width: 181px;
	height: 50px;
	border: 1px solid #d9d9d9;
	border-radius: 6px;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;

	&:hover {
		background: #0080c1;
	}
`;

export const CommentsPageModalReviews = styled.div`
	width: 100%;
	height: 495px;
`;

export const CommentsPageReviewsItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const CommentsPageReviewLeft = styled.div`
	margin-right: 12px;
`;

export const CommentsPageReviewImg = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #f0f0f0;
	margin-top: 30px;
	& img {
		display: block;
		width: 100%;
		height: auto;
		object-fit: cover;
	}
`;

export const CommentsPageReviewRight = styled.div`
	display: block;
`;

export const CommentsPageReviewName = styled.div`
	font-size: 16px;
	line-height: 32px;
	color: #000000;
	margin-bottom: 12px;
	margin-top: 30px;
	font-weight: 600;

	& span {
		margin-left: 10px;
		color: #5f5f5f;
	}
`;

export const CommentsPageReviewTitle = styled.h5`
	font-size: 16px;
	line-height: 32px;
	color: #000000;
`;
