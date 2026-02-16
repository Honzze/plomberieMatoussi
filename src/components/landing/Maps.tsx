//
// 'use client';
//
// import React from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
//
// const mapContainerStyle = {
//     height: "400px",
//     width: "100%"
// };
//
// const center = {
//     lat: 47.216671, // Example: San Francisco
//     lng:  -1.55
// };
//
// const Map = () => {
//     return (
//         <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
//             <GoogleMap
//                 mapContainerStyle={mapContainerStyle}
//                 center={center}
//                 zoom={12}
//             >
//                  Additional components like markers can be added here
//   </GoogleMap>
//         </LoadScript>
//     );
// };
//
// export default Map;