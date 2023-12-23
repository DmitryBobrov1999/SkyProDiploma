import { useState } from 'react';
import { useSelector } from 'react-redux';
import { usePostAdMutation } from '../../store/api/rtkQueryApi';
import * as S from './AddAdPage.styles';

export const AddAdPage = ({ setActiveAddAd }) => {
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [price, setPrice] = useState(null);
	const [postAd] = usePostAdMutation();
	const { urlFiles } = useSelector(state => state.auth);

	const handlePost = async e => {
		e.preventDefault();
		await postAd({ title, description, price })
			.unwrap()
			.then(() => setActiveAddAd(null));
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
									<S.AddAdPageImgCover accept='*/*' id='adImg' multiple />
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
									<S.AddAdPageImgCover accept='image/*' id='adImg2' multiple />
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
									<S.AddAdPageImgCover accept='image/*' id='adImg3' multiple />
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
									<S.AddAdPageImgCover accept='image/*' id='adImg4' multiple />
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
									<S.AddAdPageImgCover accept='image/*' id='adImg5' multiple />
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

					<S.AddAdPageBtnPub onClick={e => handlePost(e)}>
						Опубликовать
					</S.AddAdPageBtnPub>
				</S.AddAdPageNewArt>
			</S.AddAdPageContent>
		</S.AddAdPageBlock>
	);
};
