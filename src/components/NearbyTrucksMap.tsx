
import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck } from 'lucide-react';

// Mock data for available trucks
const mockTrucks = [
  { id: 1, lat: 19.076, lng: 72.8777, type: 'Mini Truck', distance: '1.3 km', eta: '5 mins', driverName: 'Rajesh K.' },
  { id: 2, lat: 19.082, lng: 72.8755, type: 'Medium Truck', distance: '2.1 km', eta: '8 mins', driverName: 'Vikram S.' },
  { id: 3, lat: 19.0715, lng: 72.8830, type: 'Heavy Truck', distance: '3.5 km', eta: '12 mins', driverName: 'Anil P.' },
  { id: 4, lat: 19.0790, lng: 72.8700, type: 'Container Truck', distance: '4.2 km', eta: '15 mins', driverName: 'Suresh M.' }
];

const containerStyle = {
  width: '100%',
  height: '500px'
};

interface NearbyTrucksMapProps {
  pickupLocation?: string;
  deliveryLocation?: string;
}

const NearbyTrucksMap: React.FC<NearbyTrucksMapProps> = ({ pickupLocation, deliveryLocation }) => {
  const [selectedTruck, setSelectedTruck] = useState<number | null>(null);
  
  // Set Mumbai as default center if no location provided
  const center = { lat: 19.0760, lng: 72.8777 };
  
  // Fix: Use import.meta.env instead of process.env for Vite
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "AIzaSyC2HQ0Vl4VNRIqSawdAIBEJKp0iFyCmYNg" // Replace with your actual API key
  });
  
  const [map, setMap] = useState<google.maps.Map | null>(null);
  
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);
  
  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);
  
  const handleMarkerClick = (truckId: number) => {
    setSelectedTruck(truckId);
  };
  
  const handleInfoWindowClose = () => {
    setSelectedTruck(null);
  };
  
  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-logistics-blue text-white rounded-t-lg">
        <CardTitle className="text-xl">Available Trucks Near {pickupLocation || 'You'}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false
            }}
          >
            {/* Pickup location marker */}
            <Marker
              position={center}
              icon={{
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
              }}
            />
            
            {/* Truck markers */}
            {mockTrucks.map((truck) => (
              <Marker
                key={truck.id}
                position={{ lat: truck.lat, lng: truck.lng }}
                onClick={() => handleMarkerClick(truck.id)}
                icon={{
                  url: "https://maps.google.com/mapfiles/ms/icons/truck.png",
                  scaledSize: new window.google.maps.Size(32, 32)
                }}
              >
                {selectedTruck === truck.id && (
                  <InfoWindow onCloseClick={handleInfoWindowClose}>
                    <div className="p-2 max-w-xs">
                      <div className="flex items-center gap-2 mb-1">
                        <Truck className="h-4 w-4 text-logistics-teal" />
                        <span className="font-semibold">{truck.type}</span>
                      </div>
                      <div className="text-sm text-gray-700">
                        <p><strong>Driver:</strong> {truck.driverName}</p>
                        <p><strong>Distance:</strong> {truck.distance}</p>
                        <p><strong>ETA:</strong> {truck.eta}</p>
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        ) : (
          <div className="flex items-center justify-center h-80">
            <p>Loading map...</p>
          </div>
        )}
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {mockTrucks.map(truck => (
            <div 
              key={truck.id} 
              className={`p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors ${selectedTruck === truck.id ? 'border-logistics-teal bg-blue-50' : 'border-gray-200'}`}
              onClick={() => handleMarkerClick(truck.id)}
            >
              <div className="flex items-center gap-2 mb-1">
                <Truck className="h-4 w-4 text-logistics-teal" />
                <span className="font-medium">{truck.type}</span>
              </div>
              <div className="text-sm text-gray-700">
                <p>{truck.distance} away • {truck.eta}</p>
                <p className="text-xs mt-1">{truck.driverName}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NearbyTrucksMap;
