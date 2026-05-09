import './App.css';
import { useEffect, useState } from 'react';
import DeviceCard from './components/DeviceCard';


function App() {
  const [devices, setDevices]= useState([]);
  const [health, setHealth]=useState(null);
  const [loading, setLoading]= useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/health').then(res=>res.json()).then(data=>{
      setHealth(data);
    });

    fetch('http://localhost:5000/api/devices').then(res=>res.json()).then(data=>{
      setDevices(data);
      setLoading(false);
    });
    
  },[]);
  return (
    <div className="App">
     <h1>Device Health Dashboard</h1>

     {health && (
      <div>
        <h2>Health Status</h2>
        <p>Status: {health.status}</p>
        <p>Message: {health.message}</p>
        <p>Timestamp: {health.timestamp}</p>
    </div>
  )}

  {loading ? (<p>Loading...</p>):(
    <div className='grid'>
      {devices.map(device=>(
        <DeviceCard key={device.id} device={device}/>
      ))}
    </div>
  )}

 
  </div>
  );
  
  }

export default App;
