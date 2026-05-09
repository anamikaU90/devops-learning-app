import React,{memo} from "react";
const DeviceCard = memo(({device}) => {
    return(
        <div className="card">
            <h3>{device.name}</h3>
            <p>Status: {device.status}</p>
            <p>CPU: {device.cpu}</p>
            <p>RAM: {device.ram}</p>            
            </div>
    )
    
});

export default DeviceCard;
