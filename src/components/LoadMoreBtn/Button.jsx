import { LoadMoreBtn } from './Button.styled';

const LoadMore = ({ addPage }) => {
  return (
    <div>
      <LoadMoreBtn type="button" onClick={addPage}>
        Load more
      </LoadMoreBtn>
    </div>
  );
};

export default LoadMore;
