import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountRestaurant from './CountRestaurant';
import Restaurant from './Restaurant';
import { getRestaurants, sortByRatings, sortByReviews, ToggleVeg } from '../../actions/restaurantAction';
import Loader from './Loader';
import Message from './Message';

export default function Home() {
  const dispatch = useDispatch();
  const { loading: restaurantsLoading, error: restaurantsError, restaurants, showVeg } = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const handleReviews = () => {
    dispatch(sortByReviews());
  };

  const handleRatings = () => {
    dispatch(sortByRatings());
  };

  const handleToggleVeg = () => {
    dispatch(ToggleVeg());
  };

  return (
    <div>
      <CountRestaurant />
      {restaurantsLoading ? (
        <Loader />
      ) : restaurantsError ? (
        <Message variant="danger">{restaurantsError}</Message>
      ) : (
        <>
          <section>
            <div className="sort">
              <button className="sort_veg o-3" onClick={handleToggleVeg}>
                {showVeg ? 'All Restaurants' : 'Pure Veg'}
              </button>
              <button className="sort_veg o-3" onClick={handleReviews}>
                Sort by Review
              </button>
              <button className="sort_veg o-3" onClick={handleRatings}>
                Sort by Ratings
              </button>
            </div>
          </section>
          <div className="row mt-4">
            {restaurants
              .filter((restaurant) => !showVeg || (restaurant.isVeg && showVeg))
              .map((restaurant) => (
                <Restaurant key={restaurant._id} restaurant={restaurant} />
              ))}
          </div>
        </>
      )}
    </div>
  );
}
