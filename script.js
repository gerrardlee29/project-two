



    var map;
    function initMap(){
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.881265, lng: -104.769180},
        zoom: 14,
      });


      addMarker({ lat: 38.877190, lng: -104.789808});
      addMarker({ lat: 38.886107, lng: -104.775372});
      addMarker({ lat: 38.893839, lng: -104.770232});
      addMarker({ lat: 38.883307, lng: -104.754176});
      addMarker({ lat: 38.869096, lng: -104.764380});
      addMarker({ lat: 38.878603, lng: -104.769403});
      addMarker({ lat: 38.871091, lng: -104.783582});
      addMarker({ lat: 38.880245, lng: -104.744736});

      function addMarker(coords){
         const marker = new google.maps.Marker({
          position: coords,
          title:"Dog Park!",
          map:map,
          animation: google.maps.Animation.DROP,
        });

        const infowindow = new google.maps.InfoWindow({
          content: "Dog Park is Here!",
        });

        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
          });
        });

      }
    }
