import { connect } from 'react-redux';
import * as React from 'react';

import { Comment } from '../../types';

import { getReviews } from '../../reducer/reviews/selectors';
import { Operation } from '../../reducer/reviews/reviews';

import ReviewItem from '../reviews-item/reviews-item';

interface Props {
  offerId: number,
  loadReviews: (id: number) => void,
  reviews: Comment[],
}

const MAX_REVIEWS_COUNT = 10;

class ReviewList extends React.PureComponent<Props> {
  render() {
    const {
      reviews,
    } = this.props;

    return <>
      <h2 className="reviews__title">Reviews &middot;
      <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.reverse().slice(0, MAX_REVIEWS_COUNT).map((review) => <ReviewItem
          key={`review-${review.id}`}
          review={review}
        />)}
      </ul>
    </>;
  }

  componentDidMount() {
    const {
      offerId,
      loadReviews,
    } = this.props;

    loadReviews(offerId);
  }
}

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (id) => dispatch(Operation.loadReviews(id)),
});

export { ReviewList };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReviewList);
