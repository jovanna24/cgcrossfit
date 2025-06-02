import './home.css';
import logo from '../../assets/images/smallgccf.jpg'

const Home = () => {
    return (
        <div className='home'>
            <div className='header'>
                <img src={logo} />
            </div>
            <div className='body'>
                <h1>
                    HOLA!!
                </h1>

            </div>
        </div>
    );

}

export default Home;