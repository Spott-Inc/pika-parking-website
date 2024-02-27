import car from './car.svg';
import apple from './applestore.png';
import android from './googleplay.png';

export function Hero() {

  return (
      <div className='hero'>
        <div className='hero-content'>
            <h1>Parking at Universities Made Easy</h1>
            <p className='subtitle'>The best parking on campus at the tip of your fingers. For students, faculty and staff members.</p>
            {/* <div className='action-buttons'>
                <a href='#' className='btn-hero'>Solutions</a>
                <a href='#' className='btn'>Contact us</a>
            </div> */}
            <div className='action-buttons'>
                <a href='#' className='apple'><img src={apple} alt='Spott Parking Guide. IOS Download button.'></img></a>
                <a href='#' className='android'><img src={android} alt='Spott Parking App. Android download link.'></img></a>
            </div>
        </div>
        <img src={car} className='car' alt='car parking'></img>
      </div>
  );
}
