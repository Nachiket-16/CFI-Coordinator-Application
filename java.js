fetch('asid.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            var list = []
            for (var i = 0; i < data.length; i++){
                 list[i] = data[i].Company;
            }
            var sortedlist = list.sort();
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + sortedlist[i] + '  ' + 'Id: ' + data[i].id  ;
                mainContainer.appendChild(div);
            }
        }