import './home.css';
import logo from '../../assets/images/smallgccf.jpg'
import platform from '../../assets/images/platform.jpg'

const Home = () => {
    return (
        <div className='home'>
            <div className='header'>
                <img src={logo} alt="cgcf" />
            </div>
            <div className='body-content'>
                <h1>
                    WORDS OF ENCOURAGEMENT FROM COACHES AND MEMBERS
                </h1>
                <h2>
                    WORDS OF ENCOURAGEMENT FROM COACHES AND MEMBERS
                </h2>
                <h3>
                    WORDS OF ENCOURAGEMENT FROM COACHES AND MEMBERS
                </h3>

            </div>
            <div className='platform'>
                <img src={platform} alt="cgcfplatform"/>
            </div>
        </div>
    );

}

export default Home;