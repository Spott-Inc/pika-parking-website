import concept from './concept.png';

export function Concept() {

  return (
    <>
      <div className='concept'>
        <div className='concept-content'>
            <div className='concept-title'>
              <h4>CONCEPT</h4>
              <h1>University Parking and Commuting</h1>
            </div>
            <p className='subtitle'>No more driving around looking for a parking spot. Our parking guide app allows you to see which parking lot you are most likely to find a parking spot.</p>
            <p className='subtitle'>If you are tired of parking, join the movement and take a ride with a friend. Our carpooling app promotes community engagement and an environment friendly commute to campus.</p>
        </div>
        <img src={concept} className='concept-img' alt='Concept'></img>
      </div>
      <div className='features-title'>
        <h1>Exeperience a smarter way to find parking</h1>
        <p>Pika finds a spot for you so you don't have to look for it.</p>
      </div>
    </>
  );
}
