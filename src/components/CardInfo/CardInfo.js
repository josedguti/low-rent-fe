function CardInfo(props){
    let name = "name"
    let price = ""
    return(
    <>


        <h1>{name}</h1>

        <p>${price}</p>
        <div className="image-container">
        <img href="" alt="image"></img>
        </div>

        <select>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
           
    </select>
     

        <button onClick={console.log('hello')}>Add to cart</button>


    </>
    )
}

export default CardInfo;