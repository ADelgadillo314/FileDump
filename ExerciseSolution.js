 function contactInfo(){
      var info = "";
      info += "Geographic Information Systems<br>";
      info += "Jackson Hole, WY<br>";
      info += "Phone: ###-###-####<br>";
      
      var theDiv = document.getElementById("infoDiv");
      theDiv.innerHTML = info; 
    }

    function eventsInfo(){
        var info = "";
        info += "<center>";
        info += "<table border='2'>";
        info += "<tr><th>Event</th><th>When</th><th>Details</th></tr>";
        info += "<tr><td>Mangy Elk Saloon Live Music</td><td>Sep 22, 2018 7:30pm-10:30pm</td><td>Live music from local artists.</td></tr>";
        info += "<tr><td>Obvservatories</td><td>July 7, 2018 9:00am-9:00pm</td><td>Exhibit of sculpture, and video.</td></tr>";
        info += "<tr><td>MTN Bike Ride</td><td>Aug 15, 2018 6:00pm</td><td>Come join friends and ride some local trails.</td></tr>";
        info += "<tr><td>Historical Society</td><td>Aug 15, 2018 5:00pm</td><td>Come listen to the storytellers.</td></tr>";
        info += "</table>";
        info += "</center>";

        var theDiv = document.getElementById("infoDiv");
        theDiv.innerHTML = info;
    }

    