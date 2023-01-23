import { LoadMoreBtn, LoadMoreBtnContainer } from './Button.styled';

const LoadMore = ({ addPage }) => {
  return (
    <LoadMoreBtnContainer>
      <LoadMoreBtn type="button" onClick={addPage}>
        Load more
      </LoadMoreBtn>
    </LoadMoreBtnContainer>
  );
};

export default LoadMore;
