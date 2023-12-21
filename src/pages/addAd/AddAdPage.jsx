import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUrlImages } from '../../store/slices/authSlice';
import { usePostAdMutation } from '../../store/slices/postAdSlice';
import * as S from './AddAdPage.styles';

export const AddAdPage = ({ setActiveAddAd }) => {
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [price, setPrice] = useState(null);
	const [postAd, { isSuccess }] = usePostAdMutation();
	const { urlFiles } = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const [files, setFiles] = useState([]);
	const navigate = useNavigate();

	const handlePost = async e => {
		e.preventDefault();
		await postAd({ title, description, price, files });
		if (isSuccess) {
			navigate('/');
		}
	};
	console.log(files);

	const imageUpload = e => {
		files.push(e.target.files[0]);
		dispatch(setUrlImages(URL.createObjectURL(e.target.files[0])));
	};

	return (
		<S.AddAdPageBlock>
			<S.AddAdPageContent>
				<S.AddAdPageTitle>Новое объявление</S.AddAdPageTitle>
				<S.AddAdPageBtnClose onClick={() => setActiveAddAd(null)}>
					<S.AddAdPageBtnCloseLine></S.AddAdPageBtnCloseLine>
				</S.AddAdPageBtnClose>
				<S.AddAdPageNewArt id='formNewArt' action='#'>
					<S.AddAdPageNewArtBlock>
						<label htmlFor='name'>Название</label>
						<S.AddAdPageNewArtInput
							type='text'
							name='name'
							id='formName'
							placeholder='Введите название'
							onChange={e => setTitle(e.target.value)}
						/>
					</S.AddAdPageNewArtBlock>
					<S.AddAdPageNewArtBlock>
						<label htmlFor='text'>Описание</label>
						<S.AddAdPageTextArea
							name='text'
							id='formArea'
							cols='auto'
							rows='10'
							placeholder='Введите описание'
							onChange={e => setDescription(e.target.value)}
						></S.AddAdPageTextArea>
					</S.AddAdPageNewArtBlock>
					<S.AddAdPageNewArtBlock>
						<S.AddAdPageP>
							Фотографии товара<span>не более 5 фотографий</span>
						</S.AddAdPageP>
						<S.AddAdPageBarImg>
							<S.AddAdPageImg>
								<S.AddAdPageLabel htmlFor='adImg'>
									<S.AddAdPageImgCover
										onChange={e => imageUpload(e)}
										accept='image/*'
										id='adImg'
										type='file'
										multiple
									/>
									<S.AddAdPageLabelDiv />
								</S.AddAdPageLabel>
								<img
									style={
										urlFiles?.[0]
											? { visibility: 'visible' }
											: { visibility: 'hidden' }
									}
									src={urlFiles?.[0]}
									alt=''
								/>
							</S.AddAdPageImg>

							<S.AddAdPageImg>
								<S.AddAdPageLabel htmlFor='adImg2'>
									<S.AddAdPageImgCover
										onChange={e => imageUpload(e)}
										accept='image/*'
										id='adImg2'
										type='file'
										multiple
									/>
									<S.AddAdPageLabelDiv />
								</S.AddAdPageLabel>
								<img
									style={
										urlFiles?.[1]
											? { visibility: 'visible' }
											: { visibility: 'hidden' }
									}
									src={urlFiles?.[1]}
									alt=''
								/>
							</S.AddAdPageImg>
							<S.AddAdPageImg>
								<S.AddAdPageLabel htmlFor='adImg3'>
									<S.AddAdPageImgCover
										onChange={e => imageUpload(e)}
										accept='image/*'
										id='adImg3'
										type='file'
										multiple
									/>
									<S.AddAdPageLabelDiv />
								</S.AddAdPageLabel>
								<img
									style={
										urlFiles?.[2]
											? { visibility: 'visible' }
											: { visibility: 'hidden' }
									}
									src={urlFiles?.[2]}
									alt=''
								/>
							</S.AddAdPageImg>
							<S.AddAdPageImg>
								<S.AddAdPageLabel htmlFor='adImg4'>
									<S.AddAdPageImgCover
										onChange={e => imageUpload(e)}
										accept='image/*'
										id='adImg4'
										type='file'
										multiple
									/>
									<S.AddAdPageLabelDiv />
								</S.AddAdPageLabel>
								<img
									style={
										urlFiles?.[3]
											? { visibility: 'visible' }
											: { visibility: 'hidden' }
									}
									src={urlFiles?.[3]}
									alt=''
								/>
							</S.AddAdPageImg>
							<S.AddAdPageImg>
								<S.AddAdPageLabel htmlFor='adImg5'>
									<S.AddAdPageImgCover
										onChange={e => imageUpload(e)}
										accept='image/*'
										id='adImg5'
										type='file'
										multiple
									/>
									<S.AddAdPageLabelDiv />
								</S.AddAdPageLabel>
								<img
									style={
										urlFiles?.[4]
											? { visibility: 'visible' }
											: { visibility: 'hidden' }
									}
									src={urlFiles?.[4]}
									alt=''
								/>
							</S.AddAdPageImg>
						</S.AddAdPageBarImg>
					</S.AddAdPageNewArtBlock>
					<S.AddAdPageNewArtBlockPrice>
						<label htmlFor='price'>Цена</label>
						<S.AddAdPageNewArtInputPrice
							type='text'
							name='price'
							id='formName'
							onChange={e => setPrice(e.target.value)}
						/>
						<S.AddAdPageNewArtInputPriceCover></S.AddAdPageNewArtInputPriceCover>
					</S.AddAdPageNewArtBlockPrice>

					<S.AddAdPageBtnPub onClick={handlePost}>
						Опубликовать
					</S.AddAdPageBtnPub>
				</S.AddAdPageNewArt>
			</S.AddAdPageContent>
		</S.AddAdPageBlock>
	);
};
