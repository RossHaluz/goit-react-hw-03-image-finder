import { LoadMoreBtn, LoadMoreBtnContainer } from './Button.styled';

const LoadMore = ({ changePage }) => {
  return (
    <LoadMoreBtnContainer>
      <LoadMoreBtn type="button" onClick={changePage}>
        Load more
      </LoadMoreBtn>
    </LoadMoreBtnContainer>
  );
};

export default LoadMore;
