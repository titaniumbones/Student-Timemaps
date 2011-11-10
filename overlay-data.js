var medicalDataset= {
    title: "Events",
    id: "events",
    theme: "purple",
    type: "gss",
    options: {
        // note that your spreadsheet must be published for this to work
        // my spreadsheet data
        key: "0Aqhzp2yOOf0zdFN6Y0QwSnZ6Q2VCb1NtSk9TbERpT0E",

        // map spreadsheet column names to expected ids
        // paramMap: {
        //     start: "Start"
        // },
    }
};


var basicPlacemark=  {
    start : "2010-01-01",
    point : {
        lat : 43.67742,
        lon : -79.40810
    },
    title : "Marker Placemark",
    options : {
        description: "Just a plain old marker",
        theme: "purple"
    }
};

var basicPlacemark2=  {
    start : "2010-01-01",
    point : {
        lat : 43.636997,
        lon : -79.40810
    },
    title : "Marker Placemark",
    options : {
        description: "Just a plain old marker",
        theme: "purple"
    }
};



var polygonPlacemark =   {
    start : "2010-02-01",
    polygon : [
        {lat: 46.34692761055676, lon: 6.1083984375},
        {lat: 47.54687159892238, lon: 6.8115234375},
        {lat: 47.66538735632654, lon: 9.404296875},
        {lat: 47.18971246448421, lon: 9.4482421875},
        {lat: 46.9502622421856, lon: 10.37109375},
        {lat: 46.37725420510028, lon: 9.931640625},
        {lat: 45.89000815866184, lon: 7.0751953125},
        {lat: 46.34692761055676, lon: 6.1083984375}
    ],
    title : "Polygon Placemark",
    options : {
        description: "I'm shaped vaguely like Switzerland!",
        theme: "orange"
    }
};

var overlayPlacemark =  {
    start : "2010-04-01",
    overlay : {
        north: 43.68481,
        south: 43.637907,
        east: -79.364944,
        west: -79.40890,
        image: "../media/images/toronto_downtown_1913_rotated_smaller.gif"
    },
    title : "Overlay Placemark",
    options : {
        description: "Unfortunately, I cannot be hidden at this time, so you're stuck with me. Also I don't register click events. Basically, I am rudely in the way but unwilling to pay attention to you."
    }
};

var polylinePlacemark =  {
    start : "2010-03-01",
    polyline : [
        {lat: 48.86471476180277, lon: 2.28515625},
        {lat: 45.82879925192134, lon: 4.74609375},
        {lat: 45.49094569262732, lon: 9.140625},
        {lat: 41.934976500546604, lon: 12.392578125}
    ],
    title : "Polyline Placemark",
    options : {
        description: "I'm a series of straight lines! My info window is anchored at the middle point of the polyline.",
        theme: "red",
        // any additional theme settings can go here
        lineWeight: 5
    }
};

var multiPlacemarkItem =                         {
    start : "2010-05-01",
    placemarks: [
        {
            polyline: [
                {lat: 48.22467264956519, lon: 16.32568359375},
                {lat: 47.517200697839414, lon: 18.984375},
                {lat: 45.84410779560204, lon: 15.9521484375},
                {lat: 48.22467264956519, lon: 16.32568359375}
            ],
        },
        {
            point: {
                lat: 48.22467264956519, 
                lon: 16.32568359375
            }
        },
        {
            point: {
                lat: 47.517200697839414,
                lon: 18.984375
            }
        },
        {
            point: {
                lat: 45.84410779560204,
                lon: 15.9521484375
            }
        }
    ],
    title : "Multiple Placemark Item",
    options : {
        description: "&quot;I am large, I contain multitudes.&quot;&mdash;Walt Whitman<br>My info window is anchored based on the first loaded item.",
        theme: "blue"
    }
};
    
