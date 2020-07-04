



function sendID(id) {
        fetch("./mapaData.json")
        .then((resp) => resp.json())
        .then((data) => {
            data.forEach(function(city){
                if(id === city.cityName){
                    document.getElementById('cities__info').innerHTML = 
                        `<a href="#blabla" class="city__close">&times;</a>
                        <h1 class="cityName" id="cityName">${city.cityName}</h1>
                        <div class="photo__gallery" id="photo__gallery">
                        </div>
                        <p class="population"><span>Population:</span>${city.population}</p>
                        <p class="about">${city.about}</p>
                        <p class="links" id="link"><span>Links: </span></p>`;
                    
                    for (var i = 0; i < city.links.length; i++){
                        var obj = city.links[i];
                            for (var key in obj){
                                var attrName = key;
                                var attrValue = obj[key];
                                document.getElementById("link").insertAdjacentHTML("beforeend", `<a href="${attrValue}" class="webLinks" id="webLinks">${attrName} ||| </a>`)
                            }
                        }
                    for (var z = 0; z < city.photos.length; z++){
                        var href = city.photos[z];
                                document.getElementById("photo__gallery").insertAdjacentHTML("beforeend", `
                                <a href="#openPicture" id="picture" onclick="sendHref('${href}')">
                                    <img class="profilPhoto" src="./${href}" alt="${city.cityName}_${z} id="profilPhoto">
                                </a>
                                
                                `);
                                
                            
                        }
                    const closeUrlInfo = document.querySelector('.city__close');
                    closeUrlInfo.addEventListener('click', moveBack);
                    
                    }
                    
                })
            })
        
}

function sendHref(img){
    var pic = img;
    document.getElementById('openPicture').innerHTML = 
                        `<a href="#cities__info" class="city__close--white">&times;</a>
                        <div class="img__content">
                            <img src="./${pic}" alt="img main" class="img__full">
                        </div>
                        `;
    
    const closeUrlFullImg = document.querySelector('.city__close--white');
    closeUrlFullImg.addEventListener('click', moveBack);
}







function moveBack() {
        window.history.go(-1);
    }












