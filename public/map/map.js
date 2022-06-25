// API key
const API_KEY = "pk.eyJ1Ijoid3JhdGhhcmQiLCJhIjoiY2w0cDFuZ2hxMDNsMDNobWZwczg0azgzaSJ9.HcBKsg32SAsKhVrw7jbZFA";

const init = async () => {
    const response = await fetch('/api/employees');
    const data = await response.json();
    const employeeData = data.map(employee => {
        return {
            fullName: `${employee.first_name} ${employee.last_name}`,
            coordinates: [parseFloat(`${employee.city.latitude}`), parseFloat(`${employee.city.longitude}`)]
        }
    })
    // console.log(data);
    // console.log(employeeData);
    createMap(employeeData);
}

// MapBox Map Layers
const streetMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
});
  
const darkMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
});

const satelliteMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "satellite-v9",
    accessToken: API_KEY
});

const outdoorsMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "outdoors-v11",
    accessToken: API_KEY
});
  
const baseMaps = {
    "Street Map": streetMap,
    "Dark Map": darkMap,
    "Satellite Map": satelliteMap,
    'Outdoors Map': outdoorsMap
};

const createMap = async (data) => {
    const map = L.map('map', {
        center: [19.4333, -99.1333],
        zoom: 7,
        layers: streetMap
    });

    const layerControl = L.control.layers(baseMaps).addTo(map);

    data.forEach(employee => {
        const marker = L.marker(employee.coordinates).addTo(map);
        marker.bindPopup(`
            <img class="profile-picture" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face"></img>
            <b>${employee.fullName}</b><br>
            Available<br>
            <input type="button" value="Schedule Appointment"/>
        `, {autoClose: false})
        .closePopup()
    });  
};

init();