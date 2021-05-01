import model from '../../img/model.jpg'


function HomePage(props) {
    return (
        <div className="model-container">
            <img className="model" src={model} />
        </div>
    );
};


export default HomePage;