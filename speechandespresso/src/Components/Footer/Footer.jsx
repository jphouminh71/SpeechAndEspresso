import './Footer.css';

function Footer()
{
    return (
        <div className="footer-container"> 
            
            <div className="contact-information">
                    <p> Email:  kdang98@gmail.com </p>
                    <p> Copyright SpeechAndEspresso </p> 
                </div> 
                <div className="social-media-links">
                        <p> About Me</p>
                        <p> Privacy Policy </p>
                        <p> Shipping Policy </p>
                        <p> Refund Policy </p> 
                        <p> Terms of Service</p>
                        <p> facebook </p>
                        <p> Instagram</p>
                        <p> Leave a review! </p> 
                    </div>
                    <div className="news-letter-signup">
                            <p> Sign up for our Newsletter </p>
                            <input type="text" />  
                        </div> 
                        
        </div>
    );
}
export default Footer;