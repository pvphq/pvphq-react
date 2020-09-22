import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <div className="row home-block">
        <div className="col home-col">
          <div className="block-title">
            <p><i class="far fa-calendar-check"></i>ONGOING EVENTS</p>
          </div>
        </div>
        <div className="col home-col">
        <div className="block-title">
            <p><i class="fas fa-trophy"></i>LEADERBOARD</p>
          </div>
        </div>
        <div className="col home-col">
        <div className="block-title">
            <p><i class="far fa-calendar-alt"></i>UPCOMING EVENTS</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
