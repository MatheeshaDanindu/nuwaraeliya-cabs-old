import React, { useState, useEffect } from "react";
import { getAllVehicles } from "../services/vehicleService";
import { getAvailableDrivers } from "../services/driverService";
import { createBooking } from "../services/bookingService";

const BookingPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedDriver, setSelectedDriver] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    async function fetchData() {
      const vehicleResponse = await getAllVehicles();
      const driverResponse = await getAvailableDrivers();
      setVehicles(vehicleResponse.data);
      setDrivers(driverResponse.data);
    }
    fetchData();
  }, []);

  const handleBooking = async () => {
    await createBooking(1, selectedVehicle, selectedDriver, date, "10:00 AM");
    alert("Booking Successful!");
  };

  return (
    <div>
      <h1>Book Your Ride</h1>
      <select onChange={(e) => setSelectedVehicle(e.target.value)}>
        <option value="">Select Vehicle</option>
        {vehicles.map((v) => (
          <option key={v.id} value={v.id}>{v.name} - {v.price} LKR</option>
        ))}
      </select>
      <select onChange={(e) => setSelectedDriver(e.target.value)}>
        <option value="">Select Driver</option>
        {drivers.map((d) => (
          <option key={d.id} value={d.id}>{d.name}</option>
        ))}
      </select>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default BookingPage;
