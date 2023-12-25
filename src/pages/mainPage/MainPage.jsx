import moment from 'moment/moment';
import 'moment/locale/ru';
import { Spinner } from '../../components/spinner/Spinner';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './MainPage.styles';
import { useGetAdsQuery } from '../../store/api/rtkQueryApi';
import { AddAdPage } from '../addAd/AddAdPage';

export const MainPage = ({ token }) => {
	const { data: allAds, isLoading } = useGetAdsQuery();
	const [filteredWords, setFilteredWords] = useState('');
	const [filteredAds, setFilteredAds] = useState(null);
	const [activeAddAd, setActiveAddAd] = useState(null);

	useEffect(() => {
		setFilteredAds(allAds);
	}, [allAds]);

	const exit = () => {
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		localStorage.removeItem('myId');
	};

	const handleChange = event => {
		setFilteredWords(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();

		if (filteredWords) {
			const filteredAdsArray = allAds.filter(ads => {
				return ads.title.toLowerCase().includes(filteredWords.toLowerCase());
			});
			setFilteredAds(filteredAdsArray);
		} else {
			setFilteredAds(allAds);
		}
	};

	return (
		<>
			<S.MainPageWrapper>
				{isLoading ? (
					<Spinner />
				) : (
					<S.MainPageContainer>
						<S.MainPageHeader>
							<S.MainPageHeaderNav>
								{token ? (
									<>
										<NavLink to='/login'>
											<S.MainPageHeaderBtnMainEnter
												onClick={async () => {
													await exit();
													window.location.reload();
												}}
												style={{ marginRight: '10px' }}
											>
												Выйти
											</S.MainPageHeaderBtnMainEnter>
										</NavLink>
										<NavLink to='/profile'>
											<S.MainPageHeaderBtnMainEnter>
												Личный кабинет
											</S.MainPageHeaderBtnMainEnter>
										</NavLink>
									</>
								) : (
									<NavLink to='/login'>
										<S.MainPageHeaderBtnMainEnter>
											Вход в личный кабинет
										</S.MainPageHeaderBtnMainEnter>
									</NavLink>
								)}
							</S.MainPageHeaderNav>
						</S.MainPageHeader>
						<S.MainPageMain>
							<S.MainPageMainSearch>
								<NavLink to='/'>
									<S.MainPageMainBigSvg>
										<svg
											width='54'
											height='38'
											viewBox='0 0 54 38'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M6.89126 36.6721C2.88089 38.9885 0 37.0581 0 33.6245C0 29.9693 0 19.0017 0 19.0017C0 19.0017 0 8.03413 0 4.37888C0 0.945258 2.8791 -0.985148 6.89126 1.33134C13.1373 4.93834 31.8738 15.7629 31.8738 15.7629C34.3651 17.2018 34.3651 20.7998 31.8738 22.2387C31.8738 22.2405 13.1373 33.0651 6.89126 36.6721Z'
												fill='#00C1FF'
											/>
											<path
												d='M27.5138 36.6686C23.5034 38.9851 20.6226 37.0547 20.6226 33.6211C20.6226 29.9658 20.6226 18.9983 20.6226 18.9983C20.6226 18.9983 20.6226 8.03072 20.6226 4.37546C20.6226 0.94184 23.5017 -0.988566 27.5138 1.32792C33.6223 4.85627 51.9478 15.4431 51.9478 15.4431C54.6839 17.0232 54.6839 20.9734 51.9478 22.5534C51.946 22.5534 33.6223 33.1403 27.5138 36.6686Z'
												fill='#BCEC30'
											/>
											<mask
												id='mask0_7_86'
												style={{ maskType: 'alpha' }}
												maskUnits='userSpaceOnUse'
												x='20'
												y='0'
												width='34'
												height='38'
											>
												<path
													d='M27.5138 36.6686C23.5034 38.9851 20.6226 37.0547 20.6226 33.6211C20.6226 29.9658 20.6226 18.9983 20.6226 18.9983C20.6226 18.9983 20.6226 8.03072 20.6226 4.37546C20.6226 0.94184 23.5017 -0.988566 27.5138 1.32792C33.6223 4.85627 51.9478 15.4431 51.9478 15.4431C54.6839 17.0232 54.6839 20.9734 51.9478 22.5534C51.946 22.5534 33.6223 33.1403 27.5138 36.6686Z'
													fill='#6FE4FF'
												/>
											</mask>
											<g mask='url(#mask0_7_86)'>
												<g filter='url(#filter0_f_7_86)'>
													<path
														d='M6.89223 36.672C2.88186 38.9885 0.000976562 37.0581 0.000976562 33.6245C0.000976562 29.9692 0.000976562 19.0016 0.000976562 19.0016C0.000976562 19.0016 0.000976562 8.03407 0.000976562 4.37882C0.000976562 0.945197 2.88008 -0.985209 6.89223 1.33128C13.1383 4.93827 31.8748 15.7628 31.8748 15.7628C34.3661 17.2017 34.3661 20.7998 31.8748 22.2386C31.8748 22.2404 13.1383 33.065 6.89223 36.672Z'
														fill='#99D100'
													/>
												</g>
											</g>
											<defs>
												<filter
													id='filter0_f_7_86'
													x='-8.92848'
													y='-8.61048'
													width='51.6011'
													height='55.2242'
													filterUnits='userSpaceOnUse'
													colorInterpolationFilters='sRGB'
												>
													<feFlood
														floodOpacity='0'
														result='BackgroundImageFix'
													/>
													<feBlend
														mode='normal'
														in='SourceGraphic'
														in2='BackgroundImageFix'
														result='shape'
													/>
													<feGaussianBlur
														stdDeviation='4.46473'
														result='effect1_foregroundBlur_7_86'
													/>
												</filter>
											</defs>
										</svg>
									</S.MainPageMainBigSvg>

									<S.MainPageMainLittleSvg>
										<svg
											width='32'
											height='32'
											viewBox='0 0 32 32'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<rect width='32' height='32' rx='16' fill='white' />
											<path
												d='M8.55231 22.4652C7.06699 23.3231 6 22.6082 6 21.3364C6 19.9826 6 15.9206 6 15.9206C6 15.9206 6 11.8585 6 10.5047C6 9.23303 7.06633 8.51807 8.55231 9.37603C10.8657 10.7119 17.8051 14.721 17.8051 14.721C18.7278 15.254 18.7278 16.5866 17.8051 17.1195C17.8051 17.1201 10.8657 21.1292 8.55231 22.4652Z'
												fill='#00C1FF'
											/>
											<path
												d='M16.1903 22.4641C14.7049 23.322 13.6379 22.6071 13.6379 21.3353C13.6379 19.9815 13.6379 15.9195 13.6379 15.9195C13.6379 15.9195 13.6379 11.8574 13.6379 10.5036C13.6379 9.23194 14.7043 8.51697 16.1903 9.37493C18.4527 10.6817 25.2398 14.6028 25.2398 14.6028C26.2532 15.188 26.2532 16.651 25.2398 17.2362C25.2392 17.2362 18.4527 21.1573 16.1903 22.4641Z'
												fill='#BCEC30'
											/>
											<mask
												id='mask0_7_701'
												style={{ maskType: 'alpha' }}
												maskUnits='userSpaceOnUse'
												x='13'
												y='9'
												width='14'
												height='14'
											>
												<path
													d='M16.1905 22.4641C14.7052 23.322 13.6382 22.6071 13.6382 21.3353C13.6382 19.9815 13.6382 15.9195 13.6382 15.9195C13.6382 15.9195 13.6382 11.8574 13.6382 10.5036C13.6382 9.23194 14.7045 8.51697 16.1905 9.37493C18.4529 10.6817 25.2401 14.6028 25.2401 14.6028C26.2535 15.188 26.2535 16.651 25.2401 17.2362C25.2394 17.2362 18.4529 21.1573 16.1905 22.4641Z'
													fill='#6FE4FF'
												/>
											</mask>
											<g mask='url(#mask0_7_701)'>
												<g filter='url(#filter0_f_7_701)'>
													<path
														d='M8.5528 22.4653C7.06748 23.3232 6.00049 22.6083 6.00049 21.3366C6.00049 19.9828 6.00049 15.9207 6.00049 15.9207C6.00049 15.9207 6.00049 11.8587 6.00049 10.5049C6.00049 9.23316 7.06682 8.51819 8.5528 9.37615C10.8662 10.7121 17.8056 14.7212 17.8056 14.7212C18.7283 15.2541 18.7283 16.5867 17.8056 17.1196C17.8056 17.1203 10.8662 21.1294 8.5528 22.4653Z'
														fill='#99D100'
													/>
												</g>
											</g>
											<defs>
												<filter
													id='filter0_f_7_701'
													x='-2.92896'
													y='0.0717678'
													width='30.356'
													height='31.6979'
													filterUnits='userSpaceOnUse'
													colorInterpolationFilters='sRGB'
												>
													<feFlood
														floodOpacity='0'
														result='BackgroundImageFix'
													/>
													<feBlend
														mode='normal'
														in='SourceGraphic'
														in2='BackgroundImageFix'
														result='shape'
													/>
													<feGaussianBlur
														stdDeviation='4.46473'
														result='effect1_foregroundBlur_7_701'
													/>
												</filter>
											</defs>
										</svg>
									</S.MainPageMainLittleSvg>
								</NavLink>

								<S.MainPageMainForm onSubmit={handleSubmit}>
									<S.MainPageText
										type='text'
										placeholder='Поиск по объявлениям'
										name='search'
										onChange={handleChange}
									/>
									<S.MainPageMiniText
										type='text'
										placeholder='Поиск'
										name='search'
										onChange={handleChange}
									/>

									<S.MainPageSearchBtn type='submit'>Найти</S.MainPageSearchBtn>
								</S.MainPageMainForm>
							</S.MainPageMainSearch>
							<S.MainPageMainContainer>
								<S.MainPageMainH2Div>
									<S.MainPageMainH2>Объявления</S.MainPageMainH2>
								</S.MainPageMainH2Div>

								<S.MainPageMainContentCards>
									{filteredAds &&
										filteredAds.map(ads => {
											const img = ads.images[0]?.url;

											return (
												<S.MainPageMainCardsItemNav
													key={ads.id}
													to={`/seller/${ads?.id}`}
												>
													<S.MainPageMainCardsItem>
														<S.MainPageMainCardsCard>
															<S.MainPageMainCardImg>
																<S.MainPageCardImg
																	src={`http://localhost:8090/${img}`}
																/>
															</S.MainPageMainCardImg>

															<S.MainPageCardContent>
																<S.MainPageCardTitle>
																	{ads.title}
																</S.MainPageCardTitle>
																<S.MainPageCardPrice>
																	{ads.price
																		.toString()
																		.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}{' '}
																	₽
																</S.MainPageCardPrice>
																<S.MainPageCardPlaceDate>
																	<S.MainPageCardPlace>
																		{ads.user?.city}
																	</S.MainPageCardPlace>
																	<S.MainPageCardDate>
																		{moment(ads.created_on).format('LLL')}
																	</S.MainPageCardDate>
																</S.MainPageCardPlaceDate>
															</S.MainPageCardContent>
														</S.MainPageMainCardsCard>
													</S.MainPageMainCardsItem>
												</S.MainPageMainCardsItemNav>
											);
										})}
								</S.MainPageMainContentCards>
							</S.MainPageMainContainer>
						</S.MainPageMain>

						<S.MainPageFooter>
							<S.MainPageFooterContainer>
								<S.MainPageFooterImgDiv>
									<svg
										width='30'
										height='25'
										viewBox='0 0 30 25'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M4.3584 15.1559V15.1591L4.3584 20.2324C4.3584 22.3527 6.08259 24.0769 8.19968 24.0769H22.0289C24.146 24.0769 25.8702 22.3527 25.8702 20.2324V15'
											stroke='#009EE4'
										/>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M16.6549 1.61657L28.5338 11.4153L28.5867 11.4633C29.4485 12.3251 29.4409 13.719 28.5882 14.5766L28.5867 14.5781C27.7371 15.4277 26.365 15.4379 25.5029 14.6085L15.1158 6.21083L4.72875 14.6085C3.86665 15.4379 2.49456 15.4277 1.64492 14.5781C0.785028 13.7182 0.785028 12.3232 1.64492 11.4633C1.66174 11.4465 1.67935 11.4305 1.6977 11.4153L13.5749 1.61542C14.0075 1.20153 14.5636 1.00083 15.1126 1.00006C15.6689 0.99608 16.2268 1.20331 16.6549 1.61657Z'
											stroke='#009EE4'
											strokeLinejoin='round'
										/>
										<path
											d='M9.59591 5V3.28925C9.59591 2.0781 8.61205 1.09424 7.4009 1.09424H6.55341C5.34226 1.09424 4.3584 2.0781 4.3584 3.28925V9'
											stroke='#009EE4'
										/>
										<path
											d='M11.4207 23.5865V17.7873C11.4207 16.378 12.5669 15.2318 13.9761 15.2318H16.2555C17.6648 15.2318 18.811 16.378 18.811 17.7873V23.5865'
											stroke='#009EE4'
										/>
									</svg>
								</S.MainPageFooterImgDiv>

								<S.MainPageFooterImgDiv onClick={() => setActiveAddAd(true)}>
									<svg
										width='42'
										height='42'
										viewBox='0 0 42 42'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<circle cx='21' cy='21' r='20.5' stroke='#009EE4' />
										<path
											d='M20.4751 11.55V29.4001'
											stroke='#009EE4'
											strokeLinecap='round'
										/>
										<path
											d='M29.4001 20.475L11.5501 20.475'
											stroke='#009EE4'
											strokeLinecap='round'
										/>
									</svg>
								</S.MainPageFooterImgDiv>

								<NavLink to='/profile'>
									<S.MainPageFooterImgDiv>
										<svg
											width='28'
											height='27'
											viewBox='0 0 28 27'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<circle cx='14' cy='13.5' r='13' stroke='#009EE4' />
											<path
												d='M4.66089 22.6607C5.73135 18.5017 9.50677 15.4286 14 15.4286C18.4089 15.4286 22.1268 18.3876 23.276 22.428'
												stroke='#009EE4'
											/>
											<circle
												cx='13.9999'
												cy='8.67854'
												r='4.32143'
												stroke='#009EE4'
											/>
										</svg>
									</S.MainPageFooterImgDiv>
								</NavLink>
							</S.MainPageFooterContainer>
						</S.MainPageFooter>
					</S.MainPageContainer>
				)}
			</S.MainPageWrapper>
			{activeAddAd && <AddAdPage setActiveAddAd={setActiveAddAd} />}
		</>
	);
};
