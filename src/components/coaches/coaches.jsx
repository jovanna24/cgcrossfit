import './coaches.css';
import cJess from '../../assets/images/cJess.png';
import cPaul from '../../assets/images/cPaul.png';
import blank from '../../assets/images/blank.png';
import cChris from '../../assets/images/chrism.jpg'


const ourTeam = [
    {
        name: 'Jessica Diaz',
        creds: ['CF L1', 'Owner', 'Coach'],
        image: cJess,
        instagramURL: 'https://www.instagram.com/p/DHXO-9eOuFv/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=='
    },
    {
        name: 'Paul Diaz',
        creds: ['CF L1', 'Owner', 'Coach'],
        image: cPaul,
        instagramURL: 'https://www.instagram.com/p/DE_039oRKp-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='

    },
    {
        name: 'Chris Montiel',
        creds: ['CF L1','Weightlifing Instructor', 'Coach'],
        image: cChris,
        instagramURL: 'https://www.instagram.com/grande.city.crossfit/'

    },
    {
        name: 'Mike Bejerano',
        creds: ['CF L1', 'Coach'],
        image: blank,
        instagramURL: 'https://www.instagram.com/grande.city.crossfit/'

    }
];

const Coaches = () => {
    return (
        <div className='coaches-section'>
            <h1 className='coaches-heading'>MEET OUR TEAM</h1>
            {ourTeam.map((peeps, index) => (
                <div key={index} className="coach-profile">
                    <a href={peeps.instagramURL} target="_blank" rel="noopener noreferrer">
                        <img src={peeps.image} alt={peeps.name} className="coach-image" loading="lazy" />
                    </a>
                    <div className='deets'>
                        <h2 className='coach-name'>{peeps.name}</h2>
                        <ul className='coach-credentials-list'>
                            {peeps.creds.map((classname, idx) => (
                                <li key={idx}>{classname}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Coaches;