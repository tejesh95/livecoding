var livecoding = function() {

    var options = function() {

    };

    function template(schedules) {
        console.log(schedules);
        console.log(typeof(schedules));
        console.log(schedules['count']);

        livecodingDiv.id = "livecoding";

        schedules.results.forEach(function(el, index, array) {
            livecodingDiv.innerHTML = '<p>' + el.livestream + ' : ' + el.title + '---' + el.start_time + '</p>';

        });

        document.getElementsByTagName('body')[0].appendChild(livecodingDiv);
    }

    function fetch_my_schedules() {
        // fetch access token of particular user
        // user name is fetched from input text box
        var url = "http://localhost:5000/livecoding/api/scheduledbroadcast/?limit=5&offset=5";
        var xhttp;
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        var username = "tejesh95";
        xhttp.open("GET", url, true);

        xhttp.send();


        xhttp.onreadystatechange = function() {
            console.log(xhttp.readyState, xhttp.status);
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                template(JSON.parse(xhttp.responseText));
            }
        };
    }

    function publicRender() {
        livecodingDiv = document.createElement('div');

        fetch_my_schedules();

    }


    return {
        render: publicRender
    };
}();