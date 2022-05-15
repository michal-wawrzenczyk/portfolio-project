import React from 'react';
import styled from 'styled-components';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

export const MapContainerDiv = styled.div`
  width: 50%;
  background-color: whitesmoke;
  text-align: center;
  height: 100%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Map: React.FC = () => {
  return (
    <MapContainerDiv>
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </MapContainerDiv>
  );
};
