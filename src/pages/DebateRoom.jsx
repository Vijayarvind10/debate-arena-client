import React, { useState, useEffect } from 'react';
import socket from '../socket';

export default function DebateRoom() {
  const [message, setMessage] = useState('');
  const [receivedMsg, setReceivedMsg] = useState('');
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setReceivedMsg(data);
    });
    return () => socket.off('receive_message');
  }, []);

  const handleSend = () => {
    socket.emit('send_message', message);
    setMessage('');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Debate Topic: Should social media have age limits?</h2>
      <p>Time Left: {timer} seconds</p>
      <textarea
        placeholder="Type your argument..."
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <button onClick={handleSend}>Send</button>

      <div style={{ marginTop: '2rem' }}>
        <h3>Opponent’s Response</h3>
        <p>{receivedMsg || '[waiting...]'}</p>
      </div>
    </div>
  );
}
