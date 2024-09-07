import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGl1bGlhbm5lIiwiYSI6ImNsenU0anI4djJxcHUyaXBsYXA0aHdhMGkifQ._s6lY9ygCFtpuA9_fKjj1Q';

function Map(props) {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // ID do contêiner onde o mapa será renderizado
            style: 'mapbox://styles/mapbox/streets-v12', // Estilo do mapa
            center: [-46.6388, -23.5489], // Coordenadas de São Paulo (longitude, latitude)
            zoom: 11, // Nível de zoom inicial
        });

        if (props.pickupCoordinates) {
            addToMap(map, props.pickupCoordinates)
        } // adiciona um ponteiro no mapa no local de partida

        if (props.dropoffCoordinates) {
            addToMap(map, props.dropoffCoordinates)
        } // adiciona um ponteiro no mapa no destino

        if (props.pickupCoordinates && props.dropoffCoordinates) {
            map.fitBounds([
                props.dropoffCoordinates,
                props.pickupCoordinates
            ], {
                padding: 60 // Espaçamento entre os marcadores e a borda do mapa
            });
        }
    }, [props.pickupCoordinates, props.dropoffCoordinates]); 
    
    const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
    }
    // adiciona um ponteiro no mapa

    return (
        <Wrapper id="map">
        </Wrapper>
    );
}

export default Map;

const Wrapper = tw.div`
    flex-1 h-1/2 relative
`

