import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMenus } from '../../actions/MenuAction';
import Loader from './Loader.jsx';
import Message from './Message.jsx'; // Assuming you have a Message component
import FoodItem from './FoodItem.jsx';

export default function Menu() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { menus, loading, error } = useSelector((state) => state.menus); // changed here

  useEffect(() => {
    dispatch(getMenus(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : menus && menus.length > 0 ? (
        menus.map((menu) => (
          <div key={menu._id}>
            <h2>{menu.category}</h2>
            <hr />
            {menu.items && menu.items.length > 0 ? (
              <div className='row'>
                {menu.items.map((fooditem) => (
                  <FoodItem key={fooditem._id} fooditem={fooditem} restaurant={id}/>
                ))}
              </div>
            ) : (
             <Message variant='info'>No food Item found</Message>
            )}
          </div>
        ))
      ) : (
        <Message variant='info'>No menus Found</Message>
      )}
    </div>
  );
}
