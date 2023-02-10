import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
const Header = props=>{
return <>
<header className={classes.header}>
    <h1>Dummy Meals</h1>
    <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
</header>
<div className={classes['main-image']}>
    <img src={mealsImage} alt='food'></img>
</div>
</>
};
export default Header