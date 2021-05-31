import React, { useEffect } from "react"
import mapboxgl from "mapbox-gl"
import { useRef, useState } from "react";
import { FlexBoxStyledComponent } from "../../common-components/styled-components/UtiltyComps";

mapboxgl.accessToken ="pk.eyJ1IjoiYWRpYmFyMTQxIiwiYSI6ImNrcGNkYWhpdzFjdDIyb254bGJmZGtoYzUifQ.mnaOrf46mRiCUjfdiaGcnA"

const MapComponent = (props)=>{
   const mapContainer = useRef(null);
    const map = useRef(null);
    const lngState = useState(props.coardinates[0]);
    const latState = useState(props.coardinates[1]);
    const zoomState=  useState(15);


    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lngState[0], latState[0]],
        zoom: zoomState[0]
        });
    });

    return (<FlexBoxStyledComponent
         ref={mapContainer} height="400px" width="400px"
         style={{alignSelf:"center"}}/> )
}

export default MapComponent

