import './contact.css'

const Contact = () => {

   const instagramReelEmbedCode = `<iframe src="https://www.instagram.com/reel/DFq_Ck1Apbt/embed" width="320" height="568" style="border:0;" allowtransparency="true" allowfullscreen></iframe><script async src="//www.instagram.com/embed.js"></script>`;


    return (
        <div className='contact'>
            <h1>
                Say what's up!
            </h1>
            <div className='details'>
            <h2>
                Phone:
                (520) 251-8215
            </h2>
            <h2>
                Email: grandecitycrossfit@gmail.com
            </h2>
            <h2>
                Location: <a href='https://www.google.com/maps/place/1150+E+Florence+Blvd+Suite+5,+Casa+Grande,+AZ+85122/@32.8806227,-111.7402671,17z/data=!3m1!4b1!4m6!3m5!1s0x872a673e1d4c0bc9:0x976283f563ac919!8m2!3d32.8806227!4d-111.7376868!16s%2Fg%2F11t4b72lpf?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D' target='blank' rel='noopener noreferrer' >
                 1150 E. Florence Blvd Ste 5 , Casa Grande, AZ, United States, Arizona
                </a>
            </h2>
            <div className='insta-stuff'>
            <div className='instagram-reel-embed'>
                    <div dangerouslySetInnerHTML={{ __html: instagramReelEmbedCode }} />
                </div>
                </div>
            </div>


        </div>
    );
};

export default Contact;