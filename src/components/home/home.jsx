import './home.css';
import logo from '../../assets/images/smallgccf.jpg'
import platform from '../../assets/images/platform.jpg'

const Home = () => {
    return (
        <div className='home'>
            <div className='header'>
                <img src={logo} />
            </div>
            <div className='body'>
                <h1>
                    WORDS OF ENCOURAGEMENT FROM COACHES AND MEMBERS
                </h1>
                <h2>
                    WORDS OF ENCOURAGEMENT FROM COACHES AND MEMBERS
                </h2>
                <p>
                    WORDS OF ENCOURAGEMENT FROM COACHES AND MEMBERS
                </p>

            </div>
            <div className='platform'>
                <img src={platform} />
            </div>
        </div>
    );

}

export default Home;