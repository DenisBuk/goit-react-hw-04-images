import {ButtonLoadMore, ButtonLoadMoreContainer } from './Button.styled';

 const LoadMore = ({ changePage }) => {
    return (
        <ButtonLoadMoreContainer>
            <ButtonLoadMore type="button" onClick={changePage}>
                Load more
            </ButtonLoadMore>
        </ButtonLoadMoreContainer>
    );
};
  
export default LoadMore;