import classes from './CartButton.module.css';
import {useDispatch,useSelector} from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const numberOfItems = useSelector(state=>state.cart.totalQuantity);
  function toggleCartHandler(){
    dispatch(uiActions.toggle());
  }
 return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;
