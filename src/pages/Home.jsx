import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      <h1>Anonymous Debate Arena</h1>
      <p>Argue with strangers. Win with logic.</p>
      <button onClick={() => navigate('/debate')}>Join Debate</button>
    </div>
  );
}
