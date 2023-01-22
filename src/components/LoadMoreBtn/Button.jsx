import { LoadMoreBtn } from './Button.styled';

const LoadMore = ({ addPage }) => {
  return (
    <LoadMoreBtn type="button" onClick={addPage}>
      Load more
    </LoadMoreBtn>
  );
};

export default LoadMore;
