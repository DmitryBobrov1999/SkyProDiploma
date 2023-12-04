import React from 'react';
import * as S from './MainPage.styles';

export const MainPage = () => {
	return (
		<S.MainPageWrapper>
			<S.MainPageContainer>
				<S.MainPageHeader>
					<S.MainPageHeaderNav>
						<S.MainPageHeaderBtnMainEnter id='btnMainEnter'>
							Вход в личный кабинет
						</S.MainPageHeaderBtnMainEnter>
					</S.MainPageHeaderNav>
				</S.MainPageHeader>
				<S.MainPageMain>
					<S.MainPageMainSearch>
						<S.MainPageMainLogoMobLink>
							<img className='search__logo-img' src='img/logo.png' alt='logo' />
						</S.MainPageMainLogoMobLink>
						<S.MainPageMainLogoMobLink>
							<img
								className='search__logo-mob-img'
								src='img/logo-mob.png'
								alt='logo'
							/>
						</S.MainPageMainLogoMobLink>
						<S.MainPageMainForm action='#'>
							<S.MainPageText
								className='search__text'
								type='search'
								placeholder='Поиск по объявлениям'
								name='search'
							/>
							<input
								className='search__text-mob'
								type='search'
								placeholder='Поиск'
								name='search-mob'
							/>
							<S.MainPageSearchBtn className='btn-hov02'>
								Найти
							</S.MainPageSearchBtn>
						</S.MainPageMainForm>
					</S.MainPageMainSearch>
					<S.MainPageMainContainer>
						<S.MainPageMainH2>Объявления</S.MainPageMainH2>
						<S.MainPageMainContent>
							<S.MainPageMainContentCards className=' cards'>
								<S.MainPageMainCardsItem>
									<S.MainPageMainCardsCard className=' card'>
										<S.MainPageMainCardImg>
											<S.MainPageA></S.MainPageA>
										</S.MainPageMainCardImg>
										<div className='card__content'>
											<S.MainPageA>
												<h3 className='card__title'>
													Ракетка для большого тенниса Triumph Pro ST
												</h3>
											</S.MainPageA>
											<p className='card__price'>2&nbsp;200&nbsp;₽</p>
											<p className='card__place'>Санкт Петербург</p>
											<p className='card__date'>Сегодня в&nbsp;10:45</p>
										</div>
									</S.MainPageMainCardsCard>
								</S.MainPageMainCardsItem>
								<div className='cards__item'>
									<div className='cards__card card'>
										<div className='card__image'>
											<S.MainPageA target='_blank'></S.MainPageA>
										</div>
										<div className='card__content'>
											<S.MainPageA target='_blank'>
												<h3 className='card__title'>
													Ракетка для большого тенниса Triumph Pro ST
												</h3>
											</S.MainPageA>
											<p className='card__price'>2&nbsp;200&nbsp;₽</p>
											<p className='card__place'>Санкт Петербург</p>
											<p className='card__date'>Сегодня в&nbsp;10:45</p>
										</div>
									</div>
								</div>
								<div className='cards__item'>
									<div className='cards__card card'>
										<div className='card__image'>
											<S.MainPageA></S.MainPageA>
										</div>
										<div className='card__content'>
											<S.MainPageA>
												<h3 className='card__title'>
													Ракетка для большого тенниса Triumph Pro ST
												</h3>
											</S.MainPageA>
											<p className='card__price'>2&nbsp;200&nbsp;₽</p>
											<p className='card__place'>Санкт Петербург</p>
											<p className='card__date'>Сегодня в&nbsp;10:45</p>
										</div>
									</div>
								</div>
								<div className='cards__item'>
									<div className='cards__card card'>
										<div className='card__image'>
											<S.MainPageA></S.MainPageA>
										</div>
										<div className='card__content'>
											<S.MainPageA>
												<h3 className='card__title'>
													Ракетка для большого тенниса Triumph Pro ST
												</h3>
											</S.MainPageA>
											<p className='card__price'>2&nbsp;200&nbsp;₽</p>
											<p className='card__place'>Санкт Петербург</p>
											<p className='card__date'>Сегодня в&nbsp;10:45</p>
										</div>
									</div>
								</div>
								<div className='cards__item'>
									<div className='cards__card card'>
										<div className='card__image'>
											<S.MainPageA></S.MainPageA>
										</div>
										<div className='card__content'>
											<S.MainPageA>
												<h3 className='card__title'>
													Ракетка для большого тенниса Triumph Pro ST
												</h3>
											</S.MainPageA>
											<p className='card__price'>2&nbsp;200&nbsp;₽</p>
											<p className='card__place'>Санкт Петербург</p>
											<p className='card__date'>Сегодня в&nbsp;10:45</p>
										</div>
									</div>
								</div>
								<div className='cards__item'>
									<div className='cards__card card'>
										<div className='card__image'>
											<S.MainPageA></S.MainPageA>
										</div>
										<div className='card__content'>
											<S.MainPageA>
												<h3 className='card__title'>
													Ракетка для большого тенниса Triumph Pro ST
												</h3>
											</S.MainPageA>
											<p className='card__price'>2&nbsp;200&nbsp;₽</p>
											<p className='card__place'>Санкт Петербург</p>
											<p className='card__date'>Сегодня в&nbsp;10:45</p>
										</div>
									</div>
								</div>
								<div className='cards__item'>
									<div className='cards__card card'>
										<div className='card__image'>
											<S.MainPageA></S.MainPageA>
										</div>
										<div className='card__content'>
											<S.MainPageA>
												<h3 className='card__title'>
													Ракетка для большого тенниса Triumph Pro ST
												</h3>
											</S.MainPageA>
											<p className='card__price'>2&nbsp;200&nbsp;₽</p>
											<p className='card__place'>Санкт Петербург</p>
											<p className='card__date'>Сегодня в&nbsp;10:45</p>
										</div>
									</div>
								</div>
								<div className='cards__item'>
									<div className='cards__card card'>
										<div className='card__image'>
											<S.MainPageA></S.MainPageA>
										</div>
										<div className='card__content'>
											<S.MainPageA>
												<h3 className='card__title'>
													Ракетка для большого тенниса Triumph Pro ST
												</h3>
											</S.MainPageA>
											<p className='card__price'>2&nbsp;200&nbsp;₽</p>
											<p className='card__place'>Санкт Петербург</p>
											<p className='card__date'>Сегодня в&nbsp;10:45</p>
										</div>
									</div>
								</div>
								<div className='cards__item'>
									<div className='cards__card card'>
										<div className='card__image'>
											<S.MainPageA></S.MainPageA>
										</div>
										<div className='card__content'>
											<S.MainPageA>
												<h3 className='card__title'>
													Ракетка для большого тенниса Triumph Pro ST
												</h3>
											</S.MainPageA>
											<p className='card__price'>2&nbsp;200&nbsp;₽</p>
											<p className='card__place'>Санкт Петербург</p>
											<p className='card__date'>Сегодня в&nbsp;10:45</p>
										</div>
									</div>
								</div>
								<div className='cards__item'>
									<div className='cards__card card'>
										<div className='card__image'>
											<S.MainPageA></S.MainPageA>
										</div>
										<div className='card__content'>
											<S.MainPageA>
												<h3 className='card__title'>
													Ракетка для большого тенниса Triumph Pro ST
												</h3>
											</S.MainPageA>
											<p className='card__price'>2&nbsp;200&nbsp;₽</p>
											<p className='card__place'>Санкт Петербург</p>
											<p className='card__date'>Сегодня в&nbsp;10:45</p>
										</div>
									</div>
								</div>
							</S.MainPageMainContentCards>
						</S.MainPageMainContent>
					</S.MainPageMainContainer>
				</S.MainPageMain>
				<footer className='footer'>
					<div className='footer__container'>
						<div className='footer__img'>
							<S.MainPageA>
								<img src='img/icon_01.png' alt='home' />
							</S.MainPageA>
						</div>
						<div className='footer__img'>
							<S.MainPageA>
								<img src='img/icon_02.png' alt='home' />
							</S.MainPageA>
						</div>
						<div className='footer__img'>
							<S.MainPageA>
								<img src='img/icon_03.png' alt='home' />
							</S.MainPageA>
						</div>
					</div>
				</footer>
			</S.MainPageContainer>
		</S.MainPageWrapper>
	);
};
