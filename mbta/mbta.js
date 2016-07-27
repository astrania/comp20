function init()
			{
				// South Station
				var landmark = new google.maps.LatLng(42.352271, -71.05524200000001);
			
				// Set up map
				var myOptions = {
					zoom: 15, // The larger the zoom number, the bigger the zoom
					center: landmark,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				
				// Create the map in the "map_canvas" <div>
				var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

				var redlineArray = [
                  	[/*'Alewife',*/ 42.395428, -71.142483],
                  	[/*'Davis',*/  42.39674, -71.121815],
                  	[/*'Porter Square',*/  42.3884, -71.11914899999999],
                  	[/*'Havard Sqaure',*/  42.373362, -71.118956],
                  	[/*'Central Square',*/  42.365486, -71.103802],
                  	[/*'Kendall/MIT',*/  42.36249079, -71.08617653],
                  	[/*'Charles/MGH',*/ 42.361166, -71.070628],
                  	[/*'Park Street',*/  42.35639457, -71.0624242],
                  	[/*'Downtown Crossing',*/  42.355518, -71.060225],
                  	[/*'South Station',*/ 42.352271, -71.05524200000001],
                  	[/*'Broadway',*/  42.342622, -71.056967],
                  	[/*'Andrew',*/ 42.330154, -71.057655],
                  	[/*'JFK/UMass',*/  42.320685, -71.052391],
                  	[/*'Savin Hill',*/  42.31129, -71.053331],
                  	[/*'Fields Corner',*/  42.300093, -71.061667],
                  	[/*'Shawmut',*/ 42.29312583, -71.06573796000001],
                  	[/*'Ashmont',*/  42.284652, -71.06448899999999],
                  	[/*'North Quincy',*/ 42.275275,  -71.029583],
                  	[/*'Wollaston',*/ 42.2665139, -71.0203369],
                  	[/*'Quincy Center',*/ 42.251809,  -71.005409],
                  	[/*'Quincy Adams',*/ 42.233391,  -71.007153],
                  	[/*'Braintree',*/ 42.2078543,  -71.0011385],
          		];

				for(var i = 0; i < redlineArray.length; i++){
					var stationPositionLat = redlineArray[i][0];
					var stationPositionLng = redlineArray[i][1];
					var stationPosition = new google.maps.LatLng(stationPositionLat, stationPositionLng);

					var image = 'mbta.png'; 
						
					// Create a marker
					var marker = new google.maps.Marker({
						position: stationPosition,
						icon: image
					});

					marker.setMap(map);
				}

				// Ashmont line (Alewife - Ashmont)
				var AshmontLine = [
                  	{/*'Alewife',*/ lat: 42.395428,lng: -71.142483},
                  	{/*'Davis',*/  lat:42.39674, lng:-71.121815},
                  	{/*'Porter Square',*/  lat:42.3884, lng:-71.11914899999999},
                  	{/*'Havard Sqaure',*/  lat:42.373362, lng:-71.118956},
                  	{/*'Central Square',*/  lat:42.365486, lng:-71.103802},
                  	{/*'Kendall/MIT',*/  lat:42.36249079, lng:-71.08617653},
                  	{/*'Charles/MGH',*/  lat:42.361166, lng:-71.070628},
                  	{/*'Park Street',*/  lat:42.35639457, lng:-71.0624242},
                  	{/*'Downtown Crossing',*/  lat:42.355518, lng:-71.060225},
                  	{/*'South Station',*/  lat:42.352271, lng:-71.05524200000001},
                  	{/*'Broadway',*/  lat:42.342622, lng:-71.056967},
                  	{/*'Andrew',*/  lat:42.330154, lng:-71.057655},
                  	{/*'JFK/UMass',*/  lat:42.320685, lng:-71.052391},
                  	{/*'Savin Hill',*/  lat:42.31129, lng:-71.053331},
                  	{/*'Fields Corner',*/  lat:42.300093,lng: -71.061667},
                  	{/*'Shawmut',*/  lat:42.29312583, lng:-71.06573796000001},
                  	{/*'Ashmont',*/  lat:42.284652, lng:-71.06448899999999},
          		];

        var Ashmont = new google.maps.Polyline({
            path: AshmontLine,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 10
        });

        Ashmont.setMap(map);

        //Braintree branch(JFK - Braintree)
        var BraintreeLine = [
            {/*'JFK/UMass',*/lat: 42.320685, lng: -71.052391},
            {/*'North Quincy',*/lat: 42.275275, lng: -71.029583},
            {/*'Wollaston',*/lat: 42.2665139, lng:-71.0203369},
            {/*'Quincy Center',*/lat: 42.251809, lng: -71.005409},
            {/*'Quincy Adams',*/lat: 42.233391, lng: -71.007153},
            {/*'Braintree',*/lat: 42.2078543, lng: -71.0011385},
        ];
            
        var Braintree = new google.maps.Polyline({
            path: BraintreeLine,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 10
        });

        Braintree.setMap(map);
			}