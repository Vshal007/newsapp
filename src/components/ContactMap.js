import { useState } from "react";
import DeckGL from "@deck.gl/react";
import StaticMap from "react-map-gl";
import maplibregl from "maplibre-gl";
import { IconLayer, LineLayer } from '@deck.gl/layers';

import "maplibre-gl/dist/maplibre-gl.css";

// Set Umri and Nanded coordinates
const UMRI_COORDS = {
    longitude: 77.643,
    latitude: 19.036,
    zoom: 9,
};

const NANDED_COORDS = {
    longitude: 77.310,
    latitude: 19.160,
};

// URL to your icon atlas
const ICON_ATLAS_URL = "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png";

const App = () => {
    const [viewState, setViewState] = useState({
        longitude: UMRI_COORDS.longitude,
        latitude: UMRI_COORDS.latitude,
        zoom: UMRI_COORDS.zoom,
    });

    // Marker data
    const markers = [
        {
            position: [UMRI_COORDS.longitude, UMRI_COORDS.latitude],
            size: 32, // Size of the icon
        },
    ];

    // Define icon mapping
    const ICON_MAPPING = {
        icon: {
            x: 0,
            y: 0,
            width: 128,
            height: 128,
            anchorX: 'center',
            anchorY: 'center'
        }
    };

    // Define the dashed line layer
    const lineLayer = new LineLayer({
        id: 'line-layer',
        data: [
            {
                sourcePosition: [NANDED_COORDS.longitude, NANDED_COORDS.latitude],
                targetPosition: [UMRI_COORDS.longitude, UMRI_COORDS.latitude],
            }
        ],
        getSourcePosition: d => d.sourcePosition,
        getTargetPosition: d => d.targetPosition,
        getColor: [255, 0, 0], // Blue color for the line
        getWidth: 2, // Line width
        dashJustified: false, // Dashes aligned to the endpoints
        dashSize: 8, // Size of each dash
        gapSize: 4, // Size of the gap between dashes
        opacity: 0.8, // Line opacity
        pickable: true, // Enable picking for the line
    });

    // Layers array
    const layers = [
        new IconLayer({
            id: 'icon-layer',
            data: markers,
            iconAtlas: ICON_ATLAS_URL,
            iconMapping: ICON_MAPPING,
            getIcon: () => 'icon',
            sizeScale: 1,
            getPosition: d => d.position,
            getSize: d => d.size,
            getColor: [0, 0, 255], // Color of the icon
            pickable: true,
        }),
        lineLayer // Add the line layer to the layers array
    ];

    return (
        <div style={{ width: "80vw", height: "80vh", margin: "auto", position: "relative" }}>
            <DeckGL
                viewState={viewState}
                onViewStateChange={({ viewState }) => setViewState(viewState)}
                controller={true}
                layers={layers} // Pass layers to DeckGL
            >
                <StaticMap
                    mapLib={maplibregl}
                    mapStyle="https://api.maptiler.com/maps/basic/style.json?key=0TqM8uPVjQwjx0RuN6h2"
                    transformRequest={(url, resourceType) => {
                        if (!url.includes('?')) {
                            url = url + '?api_key=0TqM8uPVjQwjx0RuN6h2';
                        } else {
                            url = url + '&api_key=0TqM8uPVjQwjx0RuN6h2';
                        }
                        return { url, resourceType };
                    }}
                />
            </DeckGL>
        </div>
    );
};

export default App;
