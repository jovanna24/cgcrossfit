//inspo from cfns 🤔


import './dropin.css'
import sunset from '../../assets/images/sunset.jpeg'

const Dropin = () => {
    return (
        <div className='dropin'>
            <div className='d-header'>
                <img src={sunset} alt="desert sunset" />
                <h3> VISITING CASA GRANDE?</h3>
                <h1>Drop In For a Workout!</h1>
                <p>Maintain your fitness routine while you're in town. We welcome experienced CrossFitters to join our classes!</p>
                <a href="#how-to-drop-in" className="button">Learn How to Drop In (will add more info after review) 😊</a>
            </div>
            <div className='location-section'>
                <h2>Find Us Here!</h2>
                <p>
                    Grande City CrossFit is conveniently located in Casa Grande, Arizona.
                </p>
                <div className='map-container'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.6621800547705!2d-111.74023922441887!3d32.8806564786826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872a675b30820f41%3A0x48a858e4a92e7466!2sGrande%20City%20CrossFit!5e0!3m2!1sen!2sus!4v1752981728329!5m2!1sen!2sus" 
                    width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Map showing CrossFit Casa Grande location"></iframe>
                </div>
                <p className="address">
                    1150 E Florence Blvd Suite 5<br/>
                    Casa Grande, AZ 85122<br/>
                    <a href="https://maps.app.goo.gl/YOUR_GYM_MAP_LINK" target="_blank" rel="noopener noreferrer">Get Directions</a>
                </p>
            </div>
        </div>
    );
};

export default Dropin; 