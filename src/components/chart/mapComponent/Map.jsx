import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'

export default function Map() {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/apisit/thailand.json/master/thailandwithdensity.json");
        const data = await response.json();
        setGeojsonData(data);
      } catch (error) {
        console.error('Error fetching geojson data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!geojsonData) return;

    const map = L.map('mapid').setView([13, 101.5], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const info = L.control();

    info.onAdd = function () {
      this._div = L.DomUtil.create('div', 'info');
      this.update();
      return this._div;
    };

    info.update = function (props) {
      this._div.innerHTML = '<h4>Supporter Density</h4>' +
        (props ? `<b>${props.name}</b><br />${props.p} people / km<sup>2</sup>` : 'Hover over a province');
    };

    info.addTo(map);

    function getColor(d) {
      return d > 1000 ? '#800026' :
        d > 500 ? '#BD0026' :
        d > 200 ? '#E31A1C' :
        d > 100 ? '#FC4E2A' :
        d > 50 ? '#FD8D3C' :
        d > 20 ? '#FEB24C' :
        d > 10 ? '#FED976' :
        '#FFEDA0';
    }
    // ### YELLOW ###
    // function getColor(d) {
    //   return d > 1000 ? '#78350F' :
    //     d > 500 ? '#92400E' :
    //     d > 200 ? '#B45309' :
    //     d > 100 ? '#F59E0B' :
    //     d > 50 ? '#FBBF24' :
    //     d > 20 ? '#FDE68A' :
    //     d > 10 ? '#FEF3C7' :
    //     '#FFFBEB';
    // }
    // ### CYAN ###
    // function getColor(d) {
    //   return d > 1000 ? '#164E63' : 
    //     d > 500 ? '#155E75' : 
    //     d > 200 ? '#0E7490' : 
    //     d > 100 ? '#06B6D4' : 
    //     d > 50 ? '#22D3EE' : 
    //     d > 20 ? '#A5F3FC' : 
    //     d > 10 ? '#CFFAFE' : 
    //     '#ECFEFF'; 
    // }
    

    function style(feature) {
      return {
        fillColor: getColor(feature.properties.p),
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      };
    }

    function highlightFeature(e) {
      const layer = e.target;

      layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }

      info.update(layer.feature.properties);
    }

    function resetHighlight(e) {
      geojson.resetStyle(e.target);
      info.update();
    }

    function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
      });
    }

    const geojson = L.geoJson(geojsonData, {
      style: style,
      onEachFeature: onEachFeature
    }).addTo(map);

    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'info legend');
      const grades = [0, 10, 20, 50, 100, 200, 500, 1000];
      const labels = [];
      let from, to;

      for (let i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
          `<i style="background:${getColor(from + 1)}"></i> ${from}${to ? '&ndash;' + to : '+'}`);
      }

      div.innerHTML = labels.join('<br>');
      return div;
    };

    legend.addTo(map);

    return () => {
      map.remove();
    };
  }, [geojsonData]);

  return <div id="mapid" className='h-[70vh] w-[50vw]' />;
};