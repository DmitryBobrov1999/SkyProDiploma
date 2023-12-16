import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSpecificAdQuery } from '../../store/slices/specificAd';
import * as S from './AdPage.styles';

export const AdPage = ({ token }) => {
	let { id } = useParams();
	const [specificAdInfo, setSpecificInfo] = useState(null);
	const { data: specificAd } = useSpecificAdQuery({ id });

	useEffect(() => {
		setSpecificInfo(specificAd);
	}, [specificAd]);

	return (
		<S.AdPageWrapper>
			<S.AdPageContainer>
				<S.AdPageHeader>
					<S.AdPageHeaderNav>
						<S.AdPageHeaderBtnPutAd>
							Разместить объявление
						</S.AdPageHeaderBtnPutAd>
						<NavLink to='/profile'>
							<S.AdPageHeaderBtnLk>Личный кабинет</S.AdPageHeaderBtnLk>
						</NavLink>
					</S.AdPageHeaderNav>
				</S.AdPageHeader>

				<S.AdPageMain>
					<S.AdPageMainContainer>
						<S.AdPageMainMenu>
							<S.AdPageHeaderLogo>
								<svg
									width='55'
									height='40'
									viewBox='0 0 55 40'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M7.01887 37.9993C2.93424 40.3586 0 38.3925 0 34.8953C0 31.1723 0 20.0017 0 20.0017C0 20.0017 0 8.831 0 5.10805C0 1.61085 2.93242 -0.355308 7.01887 2.00408C13.3806 5.67787 32.4641 16.7029 32.4641 16.7029C35.0015 18.1684 35.0015 21.8331 32.4641 23.2986C32.4641 23.3004 13.3806 34.3255 7.01887 37.9993Z'
										fill='#00C1FF'
									/>
									<path
										d='M28.0233 37.9958C23.9386 40.3552 21.0044 38.3891 21.0044 34.8919C21.0044 31.1689 21.0044 19.9983 21.0044 19.9983C21.0044 19.9983 21.0044 8.82758 21.0044 5.10463C21.0044 1.60743 23.9368 -0.358726 28.0233 2.00066C34.2449 5.59435 52.9097 16.3772 52.9097 16.3772C55.6965 17.9866 55.6965 22.0099 52.9097 23.6192C52.9079 23.6192 34.2449 34.4021 28.0233 37.9958Z'
										fill='#BCEC30'
									/>
									<mask
										id='mask0_7_221'
										style={{ maskType: 'alpha' }}
										maskUnits='userSpaceOnUse'
										x='21'
										y='0'
										width='34'
										height='40'
									>
										<path
											d='M28.0233 37.9958C23.9386 40.3552 21.0044 38.3891 21.0044 34.8919C21.0044 31.1689 21.0044 19.9983 21.0044 19.9983C21.0044 19.9983 21.0044 8.82758 21.0044 5.10463C21.0044 1.60743 23.9368 -0.358726 28.0233 2.00066C34.2449 5.59435 52.9097 16.3772 52.9097 16.3772C55.6965 17.9866 55.6965 22.0099 52.9097 23.6192C52.9079 23.6192 34.2449 34.4021 28.0233 37.9958Z'
											fill='#6FE4FF'
										/>
									</mask>
									<g mask='url(#mask0_7_221)'>
										<g filter='url(#filter0_f_7_221)'>
											<path
												d='M7.01985 37.9992C2.93522 40.3586 0.000976562 38.3924 0.000976562 34.8952C0.000976562 31.1723 0.000976562 20.0016 0.000976562 20.0016C0.000976562 20.0016 0.000976562 8.83094 0.000976562 5.10799C0.000976562 1.61079 2.93339 -0.355369 7.01985 2.00402C13.3816 5.67781 32.4651 16.7028 32.4651 16.7028C35.0025 18.1684 35.0025 21.833 32.4651 23.2986C32.4651 23.3004 13.3816 34.3254 7.01985 37.9992Z'
												fill='#99D100'
											/>
										</g>
									</g>
									<defs>
										<filter
											id='filter0_f_7_221'
											x='-8.92848'
											y='-7.95649'
											width='52.2261'
											height='55.9162'
											filterUnits='userSpaceOnUse'
											colorInterpolationFilters='sRGB'
										>
											<feFlood floodOpacity='0' result='BackgroundImageFix' />
											<feBlend
												mode='normal'
												in='SourceGraphic'
												in2='BackgroundImageFix'
												result='shape'
											/>
											<feGaussianBlur
												stdDeviation='4.46473'
												result='effect1_foregroundBlur_7_221'
											/>
										</filter>
									</defs>
								</svg>
							</S.AdPageHeaderLogo>

							<NavLink to='/'>
								<S.AdPageHeaderBtn>Вернуться на главную</S.AdPageHeaderBtn>
							</NavLink>
						</S.AdPageMainMenu>
					</S.AdPageMainContainer>

					<S.AdPageMainArcticle>
						<S.AdPageArcticleContent>
							<S.AdPageArticleLeft>
								<S.AdPageArticleImg>
									<S.AdPageArticleFillImg>
										<img
											src={`http://localhost:8090/${specificAdInfo?.images[0]?.url}`}
											alt='firstImg'
										/>
									</S.AdPageArticleFillImg>
									<div class='article__img-bar'>
										<div class='article__img-bar-div'>
											<img src='' alt='' />
										</div>
										<div class='article__img-bar-div'>
											<img src='' alt='' />
										</div>
										<div class='article__img-bar-div'>
											<img src='' alt='' />
										</div>
										<div class='article__img-bar-div'>
											<img src='' alt='' />
										</div>
										<div class='article__img-bar-div'>
											<img src='' alt='' />
										</div>
										<div class='article__img-bar-div'>
											<img src='' alt='' />
										</div>
									</div>
									<div class='article__img-bar-mob img-bar-mob'>
										<div class='img-bar-mob__circle circle-active'></div>
										<div class='img-bar-mob__circle'></div>
										<div class='img-bar-mob__circle'></div>
										<div class='img-bar-mob__circle'></div>
										<div class='img-bar-mob__circle'></div>
									</div>
								</S.AdPageArticleImg>
							</S.AdPageArticleLeft>
							<S.AdPageArticleRight>
								<S.AdPageArticleBlock>
									<S.AdPageArticleTitle>
										{specificAdInfo?.title}
									</S.AdPageArticleTitle>
									<S.AdPageArticleInfo>
										<S.AdPageArticleDate>
											{moment(specificAdInfo?.created_on).format('LLL')}
										</S.AdPageArticleDate>
										<S.AdPageArticleCity>
											{specificAdInfo?.user?.city}
										</S.AdPageArticleCity>
										<S.AdPageArticleLink href='' target='_blank' rel=''>
											23 отзыва
										</S.AdPageArticleLink>
									</S.AdPageArticleInfo>
									<S.AdPageArticlePrice>
										{specificAdInfo?.price
											.toString()
											.replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}{' '}
										₽
									</S.AdPageArticlePrice>
									<S.AdPageArticleBtn>
										Показать&nbsp;телефон
										<span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
									</S.AdPageArticleBtn>
									<S.AdPageArticleAuthor>
										<S.AdPageAuthorImg>
											<img
												src={`http://localhost:8090/${specificAdInfo?.user?.avatar}`}
												alt='avatar'
											/>
										</S.AdPageAuthorImg>
										<S.AdPageAuthorCont>
											<S.AdPageAuthorName>
												{specificAdInfo?.user?.name}
											</S.AdPageAuthorName>
											<S.AdPageAuthorAbout>
												Продает товары c{' '}
												{moment(specificAdInfo?.user?.sells_from).format('LL')}
											</S.AdPageAuthorAbout>
										</S.AdPageAuthorCont>
									</S.AdPageArticleAuthor>
								</S.AdPageArticleBlock>
							</S.AdPageArticleRight>
						</S.AdPageArcticleContent>
					</S.AdPageMainArcticle>

					<S.AdPageMainContainer>
						<S.AdPageArcticleTitle>Описание товара</S.AdPageArcticleTitle>
						<S.AdPageMainContent>
							<S.AdPageArcticleText>
								{specificAdInfo?.description}
							</S.AdPageArcticleText>
						</S.AdPageMainContent>
					</S.AdPageMainContainer>
				</S.AdPageMain>

				<S.AdPageFooter>
					<div className='footer__container'>
						<div className='footer__img'>
							<img src='img/icon_01.png' alt='home' />
						</div>
						<div className='footer__img'>
							<img src='img/icon_02.png' alt='home' />
						</div>
						<div className='footer__img'>
							<img src='img/icon_03.png' alt='home' />
						</div>
					</div>
				</S.AdPageFooter>
			</S.AdPageContainer>
		</S.AdPageWrapper>
	);
};
