import React, { useState, useEffect } from "react";
import RoomVisualization from "./components/RoomVisualization";
import BookingForm from "./components/BookingForm";

const App = () => {
  const [rooms, setRooms] = useState({});

  const fetchRooms = async () => {
    const response = await fetch("http://localhost:5000/api/rooms");
    const data = await response.json();
    setRooms(data);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="app">
      <h1>Hotel Room Reservation System</h1>
      <BookingForm fetchRooms={fetchRooms} />
      <RoomVisualization rooms={rooms} />
    </div>
  );
};

export default App;
