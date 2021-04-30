import './ClothingCard.css';


function ClothingCard(props) {
  // Get data from each clothing card - this will be submitted to backend on form submit, currently only prints to console
  function handleSubmit(evt) {
    evt.preventDefault();

    props.findOrCreateList();
    
    props.addClothingToListList({
      clothes_id: props.clothing.id,
      wishlist_id: props.wishlistState.userList.id,
      qty: 1,
      size: evt.target.size.value
    });
  }

    return (
        <div className="clothing-card">
          <img className="item-image" src={props.clothing.picture} alt={props.clothing.name}/>
          <h2 className="item-name">{props.clothing.name}</h2>
          <p className="item-price">{`$${props.clothing.price}`}</p>
          <p className="item-description">{props.clothing.description}</p>
          <form onSubmit={handleSubmit}>
            <div className="button-row">
            <label className="item-size" htmlFor="size"> Size:
              <select name="size" id="size">
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
              </select>
            </label>
            <input className="submit-button" type="submit" value="add to cart"/>
            </div>
          </form>
      </div>
    );
};


export default ClothingCard;