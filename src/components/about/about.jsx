import about from './about.png';

export function About() {

    return (
        <>
            <div className='about'>
                <img src={about} className='about-img' alt='About us'></img>
                <div className='about-content'>
                    <div className='about-title'>
                        <h4>ABOUT US</h4>
                        <h1>A Team on a Mission</h1>
                    </div>
                    <p className='subtitle'>Pika is on a mission to optimize and improve the parking experience and efficiency at universities. Our mission is to change the way you look for a parking spot by finding it for you.</p>
                    <button class="btn">Meet the Team</button>
                </div>
            </div>
        </>
    );
  }