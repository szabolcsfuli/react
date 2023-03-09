import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from '../../store/cart-context';
import { useContext } from 'react';


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const onClickHandler = () => {
        if (cartCtx.totalAmount > 0) {
            cartCtx.setCartIsShow();
        }
    }

    return (
        <button className={classes.button} onClick={onClickHandler}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartCtx.totalCount}</span>
        </button>
    );
};

export default HeaderCartButton;
