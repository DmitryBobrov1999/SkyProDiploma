import * as S from './CommentsPage.styles';
import moment from 'moment/moment';

export const CommentsPage = ({ setActiveModal, comments }) => {
	return (
		<S.CommentsPageWrapper>
			<S.CommentsPageContainer>
				<S.CommentsPageModalBlock>
					<S.CommentsPageModalContent>
						<S.CommentsPageModalTitle>Отзывы о товаре</S.CommentsPageModalTitle>
						<S.CommentsPageModalBtnClose onClick={() => setActiveModal(null)}>
							<S.CommentsPageModalBtnCloseLine></S.CommentsPageModalBtnCloseLine>
						</S.CommentsPageModalBtnClose>
						<S.CommentsPageModalScroll>
							<S.CommentsPageModalFormNewArt id='formNewArt' action='#'>
								<S.CommentsPageModalNewArtBlock>
									<label htmlFor='text'>Добавить отзыв</label>
									<S.CommentsPageFormNewAreaTextArea
										className='form-newArt__area'
										name='text'
										id='formArea'
										cols='auto'
										rows='5'
										placeholder='Введите описание'
									></S.CommentsPageFormNewAreaTextArea>
								</S.CommentsPageModalNewArtBlock>
								<S.CommentsPageFormBtnPub className='btn-hov02' id='btnPublish'>
									Опубликовать
								</S.CommentsPageFormBtnPub>
							</S.CommentsPageModalFormNewArt>

							<S.CommentsPageModalReviews>
								<div className='reviews__review review'>
									{comments &&
										comments.map(comment => (
											<S.CommentsPageReviewsItem key={comment.id}>
												<S.CommentsPageReviewLeft>
													<S.CommentsPageReviewImg>
														<img
															src={`http://localhost:8090/${comment?.author?.avatar}`}
															alt='commentAvatar'
														/>
													</S.CommentsPageReviewImg>
												</S.CommentsPageReviewLeft>
												<S.CommentsPageReviewRight>
													<S.CommentsPageReviewName>
														{comment?.author?.name}{' '}
														<span>
															{moment(comment?.created_on).format('DD MMMM')}
														</span>
													</S.CommentsPageReviewName>
													<S.CommentsPageReviewTitle>
														Комментарий
													</S.CommentsPageReviewTitle>
													<p className='review__text font-t'>{comment?.text}</p>
												</S.CommentsPageReviewRight>
											</S.CommentsPageReviewsItem>
										))}
								</div>
							</S.CommentsPageModalReviews>
						</S.CommentsPageModalScroll>
					</S.CommentsPageModalContent>
				</S.CommentsPageModalBlock>
			</S.CommentsPageContainer>
		</S.CommentsPageWrapper>
	);
};
