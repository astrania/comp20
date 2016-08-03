# README - MBTA part 2

1. All the parts have been implemented successfully:
   Determine user's location, place a marker on the location.
   Upon clicking on the marker, display a info window showing the nearest
   station.
   Render a polyline connecting the user to the nearest station.
   Upon clicking on the red line station marker, display an info window of
   train schedule for that station.

   note: The train schedule takes on the following format:
   		 the next red line train to Alewife/Ashmont/Braintree will come in 
   		 X, Y, Z minutes.
   		 "X, Y, Z minutes" shows all trains coming to a particular 
   		 destination according to mbta live schedule. It is not sorted
   		 in any order.  
   		 Minutes can be positive or negative, with negative indicating the
   		 train has just passed that station. 
   		 For stations lying on the Ashmont branch(ie, stations between JFK
   		 and Ashmont), the schedule will not display info for trains 
   		 traveling to the Braintree branch(stations between JFK and 
   		 Braintree). The same idea applies to Braintree branch's stations 
   		 for the lack of info for trains traveling to Ashmont. 

2. Discuss or colloborate with no one in class. 
   
   References:
   Google map js api: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple 

   Haversine formula: http://stackoverflow.com/questions/14560999/using
   -the-haversine-formula-in-javascript
   
   Ajax example: https://github.com/tuftsdev/WebProgramming/blob/gh-pages
   /examples/ajax/redline.html

3. Spent approximately 1 day. 
