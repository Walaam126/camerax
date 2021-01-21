import styles from '../styles';
const Item = (props) => {
    return (
        <div>
        <img style={styles.listimg}src={props.product.image} alt="camphoto" /> 
        <h4>{props.product.name}</h4>
        <h4>{props.product.price}</h4>
      </div>
        );
};

export default Item;