import { useSelector, useDispatch } from "react-redux";

import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const itemCount = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  function handleToogle() {
    dispatch(uiActions.toogle());
  }

  return (
    <button className={classes.button} onClick={handleToogle}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default CartButton;
