(function(){


    document.getElementById("screen").innerHTML = navigator.onLine;
    console.log("passou");
     var h = document.getElementById("helo");        
        fetch("http://localhost:8080/users/", {
            method: 'get'
        }).then(function(response){
            return response.json();
        }).then(function(data){
            var resp = data;
            console.log(resp);
            var tbody = document.getElementsByTagName("tbody");                    
            for(var i = 0; i < resp.length; i++){
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");                                                
                var td1TN = document.createTextNode(resp[i].id);
                td1.appendChild(td1TN);
                tr.appendChild(td1);

                var td2 = document.createElement("td");                                                
                var td2TN = document.createTextNode(resp[i].name);
                td2.appendChild(td2TN);
                tr.appendChild(td2);

                var td3 = document.createElement("td");                                                
                var td3TN = document.createTextNode(resp[i].email);
                td3.appendChild(td3TN);
                tr.appendChild(td3);

                tbody[0].appendChild(tr);
                
            }
            
            for(var i = 0; i < resp.length; i++){                
                h.innerHTML += resp[i].id + " " + resp[i].email + " " + resp[i].name + " <br/>";
            }
        })
        .catch(function(err){
            h.innerHTML = err;
            console.log(response);
        });
})();
