import React, { useState } from 'react';
import "./style.css";

export default function State() {
  let [abc, xyz] = useState('abc');
  function Showp() {
    
    xyz('pstyle');
  }
  return (
    <div>
      <button onClick={Showp}>click</button>
      <hr></hr>
      <p className={abc}>
        Sanju Viswanath Samson (/ˌsʌndʒu sæmsən/ (listen); born 11 November
        1994) is an Indian international cricketer who captains Kerala in
        domestic cricket and Rajasthan Royals in Indian Premier League. A
        right-handed wicket-keeper-batter, he was the vice-captain of the Indian
        U-19 team for the 2014 Under-19 Cricket World Cup. He made his India
        debut in the 2015 away T20I against Zimbabwe. He made his ODI debut in
        2021 against Sri Lanka.
      </p>
    </div>
  );
}
