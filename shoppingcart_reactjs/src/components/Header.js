import classes from "./Header.module.css";
function Header({ soluong, setShowCart }) {
  const onShowCartHandler = () => {
    setShowCart(true);
  };
  return (
    <div className={classes.row}>
      <div className={classes.logo}>My Shop</div>
      <div className={classes.cart} onClick={onShowCartHandler}>
        <i className="fa fa-shopping-bag" aria-hidden="true"></i>

        <span className={classes.cartamount}>
          <sup>{soluong}</sup>
        </span>
      </div>
    </div>
  );
}

export default Header;
