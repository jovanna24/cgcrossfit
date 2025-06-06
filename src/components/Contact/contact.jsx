import './contact.css'

const Contact = () => {

    const instagramReelHtml = `<iframe src="https://www.instagram.com/reel/DFq_Ck1Apbt/embed" width="320" height="568" style="border:0;" allowtransparency="true" allowfullscreen></iframe><script async src="//www.instagram.com/embed.js"></script>`;


    return (
        <div className='contact-section'>
            <h1>
                Say what's up!
            </h1>
            <div className='contact-details'>
                <h2>
                    Phone: <a href="tel:+15202518215">(520) 251-8215</a>
                </h2>
                <h2>
                    Email: <a href="mailto:grandecitycrossfit@gmail.com">grandecitycrossfit@gmail.com</a>
                </h2>
                <h2>
                    Location:
                    <a
                        href='https://www.google.com/maps/search/1150+E.+Florence+Blvd+Ste+5+,+Casa+Grande,+AZ,+United+States,+Arizona'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        1150 E. Florence Blvd Ste 5, Casa Grande, AZ, United States, Arizona
                    </a>
                </h2>

                <div className='instagram-section'>
                    <div className='instagram-reel-embed'>
                        <div dangerouslySetInnerHTML={{ __html: instagramReelHtml }} />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Contact;