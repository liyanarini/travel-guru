import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import FakeData from '../FakeData/FakeData';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 right-text">
                        <h1>COX'S BAZAR</h1>
                        <p>Cox's bazar is ipsum dolor sit amet consectetur adipisicing elit. Natus est ullam aperiam necessitatibus rem molestias sapiente dolorum hic voluptate voluptatum!</p>
                        <Link to={`/booking/coxsbazar`}>
                        <button className="btn btn-warning">Book Now</button>
                        </Link>
                    </div>
                    <div className="col-md-7">
                        <div className="d-flex card-area">
                            {
                                FakeData.map(place => <Card place={place}></Card>)
                            }   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;