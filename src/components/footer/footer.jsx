import logo from './logo.svg';

export function Footer() {

    return (
        <div className="footer">
                <div className='footer-content'>
                    <div className="col1">
                        <img className='footer-brand' src={logo} alt='Pika logo'></img>
                        <p>Parking and transportation solutions.</p>
                    </div>
                    <div className="col2">
                        <h4>About</h4>
                        <p>About Us</p>
                        <p>Solutions</p>
                    </div>
                    <div className="col3">
                        <h4>Company</h4>
                        <p>App Privacy Policy</p>
                        <p>Website Privacy Policy</p>
                        <p>Delete Your Data</p>
                    </div>
                    <div className="col4">
                        <h4>Social</h4>
                        <p>Facebook</p>
                        <p>Instagram</p>
                    </div>
                    <div className="col5">
                        <h4>Join Our Newsletter</h4>
                    </div>
                </div>
                <div className="copyright">
                <p>© Spott, Inc 2019-2023. All rights reserved.</p>
                </div>
            </div>     
    )
  }