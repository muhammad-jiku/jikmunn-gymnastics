const Sessions = () => {
  return (
    <section className='workout_session'>
      <div className='wrapper'>
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Experience a high-octane workout designed to push your limits and
          elevate your fitness. Our top session blends strength, endurance, and
          agility training for a transformative experience that leaves you
          energized and empowered.
        </p>
        <img src='/img5.jpg' alt='Workout in action' />
      </div>
      <div className='wrapper'>
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Dive into our exclusive bootcamp series where community spirit meets
          rigorous training. Each bootcamp is crafted to challenge your body and
          invigorate your mind, all while enjoying a dynamic group environment.
        </p>
        <div className='bootcamps'>
          <div>
            <h4>High-Intensity Cardio Blast</h4>
            <p>
              Burn calories and boost your endurance with a session full of
              explosive movements and heart-pumping drills.
            </p>
          </div>
          <div>
            <h4>Strength and Power Surge</h4>
            <p>
              Build muscle and harness your power through resistance training
              and functional exercises tailored for all fitness levels.
            </p>
          </div>
          <div>
            <h4>Flexibility and Core Fusion</h4>
            <p>
              Enhance your balance and core stability with exercises that blend
              stretching and strength for a well-rounded workout.
            </p>
          </div>
          <div>
            <h4>Team Challenge Extravaganza</h4>
            <p>
              Embrace the spirit of competition and teamwork with challenges
              that not only test your fitness but also build lasting
              camaraderie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sessions;
