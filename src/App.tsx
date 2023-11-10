import { LatLngTuple } from "leaflet";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function App() {
  const [position, setPosition] = useState<LatLngTuple>([51.505, -0.09]);

  return (
    <>
      <h1 className="my-4 text-center text-3xl font-semibold">
        React Leaflet : {position[0]} : {position[1]}
      </h1>
      <div className="my-4 flex justify-center gap-2">
        <input
          className="rounded-md p-1 outline-none"
          value={position[0]}
          onChange={(e) =>
            setPosition((prev) => {
              prev[0] = Number(e.target.value);
              return [...prev];
            })
          }
        />
        <input
          className="rounded-md p-1 outline-none"
          value={position[1]}
          onChange={(e) =>
            setPosition((prev) => {
              prev[1] = Number(e.target.value);
              return [...prev];
            })
          }
        />
      </div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "30vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default App;
