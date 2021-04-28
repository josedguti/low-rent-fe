function ClothingCard(props) {
    return (
        <div>
        <h1>{props.clothing.name}</h1>
        <p class="price">{`$${props.clothing.price}`}</p>
        <p>{props.clothing.description}</p>
        <p><img src={props.clothing.imagePath} alt={props.clothing.name}/></p>
        <p><button>Add to Cart</button></p>
      </div>
    );
};


export default ClothingCard;