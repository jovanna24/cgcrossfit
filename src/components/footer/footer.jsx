import './footer.css';
import navIcon1 from '../../assets/images/instagram.svg';
import logo from '../../assets/images/logobw.svg'; 
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-logo'>
                    <Link to="/">
                    <img src={logo} alt='logo' height="30" /> 
                    </Link>
                </div>
                <div className='social-icon'>
                    <a href='https://www.instagram.com/grande.city.crossfit/' target="_blank" rel="noopener noreferrer"> {/* Added target and rel */}
                        <img src={navIcon1} alt='instagram' height="24" /> {/* Added a basic height */}
                    </a>
                </div>
                <div className='footer-copyright'>
                    <p>&copy; 2020 Grande City CrossFit. All Rights Reserved</p> {/* More standard copyright symbol and text */}
                </div>
            </div>
        </div>
    );
};

export default Footer;