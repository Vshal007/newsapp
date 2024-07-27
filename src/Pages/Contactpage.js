import { useState } from "react";
import DeckGL from "@deck.gl/react";
import StaticMap from "react-map-gl";
import maplibregl from "maplibre-gl";
import { IconLayer } from '@deck.gl/layers';

import "maplibre-gl/dist/maplibre-gl.css";

// Set Umri coordinates
const UMRI_COORDS = {
    longitude: 77.643,
    latitude: 19.036,
    zoom: 13,
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
            getColor: [0, 255, 0], // Color of the icon
            pickable: true,
        }),
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
