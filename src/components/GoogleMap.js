import { useRef, useState, useEffect } from 'react';

export default function GoogleMap({ center, zoom }) {
  const ref = useRef(null);
  const [map, setMap] = useState();
  console.log("mapp", map);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map, center, zoom]);

  return <div ref={ref} id="map" style={{height: "50vh", width: "50vh"}}/>;
}
