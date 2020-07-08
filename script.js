



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
                                document.getElementById("link").insertAdjacentHTML("beforeend", `<a href="${attrValue}" class="webLinks" id="webLinks" onclick="moveIndex()">${attrName} ||| </a>`)
                            }
                        }
                    let arrImg = [];
                    for (var x=0; x < city.photos.length; x++){
                        arrImg.push(city.photos[x]);
                    }
                    
                    for (var z = 0; z < city.photos.length; z++){
                        var href = city.photos[z];
                        
                        document.getElementById("photo__gallery").insertAdjacentHTML("beforeend", `
                        <a href="#openPicture" id="picture" onclick="sendHref('${href}', '${arrImg}')">
                            <img class="profilPhoto" src="./${href}" alt="${city.cityName}_${z}" id="profilPhoto">
                        </a>
                        `);
                      
                        
                            
                        }
                    
                    
                    }
                    
                })
            })
        
}

const closeUrlInfo = document.querySelector('.city__close');
closeUrlInfo.addEventListener('click', moveBack);






function sendHref(img, arr){
    var pic = img;
    var finArr = arr;
    var finArr = arr.split(",");
    for (var i = 0; i < finArr.length; i++){
        
        if(img === finArr[i]){
            document.getElementById('openPicture').innerHTML = 
                        `<a href="#cities__info" class="city__close--white" id="city__close--white">&times;</a>
                        <div class="img__content" id="img__content">
                            <img src="./${pic}" id="${pic}" alt="img main" class="img__full">

                        </div>
                         <div class="prev" id="prev" onclick="prev('${i}', '${finArr}')">&larr;</div>
                         <div class="next" id="next" onclick="next('${i}', '${finArr}')">&rarr;</div>
                        `;
            
    }
        
    }
    
    const closeUrlFullImg = document.querySelector('.city__close--white');
    closeUrlFullImg.addEventListener('click', moveBack);
}



function next(arrI, arr){
        var i = arrI;
        var finArrAg = arr;
        var finArr = arr.split(",");
        i++;
        var remVar = finArr[i-1];
        if(i < finArr.length){
            
        document.getElementById(remVar).remove();
        document.getElementById('next').remove();
        document.getElementById('prev').remove();
        document.getElementById('city__close--white').remove();
            document.getElementById('openPicture').innerHTML = 
                        `<a href="#cities__info" class="city__close--white" id="city__close--white">&times;</a>
                        <div class="img__content" id="img__content">
                            <img src="${finArr[i]}" id="${finArr[i]}" alt="img main" class="img__full">
                        </div>
                         <div class="prev" id="prev" onclick="prev('${i}', '${finArr}')">&larr;</div>
                         <div class="next" id="next" onclick="next('${i}', '${finArr}')">&rarr;</div>
                        `;
        }else{
            i--;
            document.getElementById(remVar).remove();
            document.getElementById('next').remove();
            document.getElementById('prev').remove();
            document.getElementById('city__close--white').remove();
            document.getElementById('openPicture').innerHTML = 
                        `<a href="#cities__info" class="city__close--white" id="city__close--white">&times;</a>
                        <div class="img__content" id="img__content">
                            <img src="${finArr[i]}" id="${finArr[i]}" alt="img main" class="img__full">
                        </div>
                         <div class="prev" id="prev" onclick="prev('${i}', '${finArr}')">&larr;</div>
                         <div class="next" id="next" onclick="next('${i}', '${finArr}')">&rarr;</div>
                        `;
        }
    const closeUrlFullImg = document.querySelector('.city__close--white');
    closeUrlFullImg.addEventListener('click', moveIndex);
    
    }

    
    






function prev(arrI, arr){
    var i = arrI;
    var finArrAg = arr;
    var finArr = arr.split(",");
    i--;
    var remVar = finArr[i+1];
    if(i >= 0){
        document.getElementById(remVar).remove();
        document.getElementById('next').remove();
        document.getElementById('prev').remove();
        document.getElementById('city__close--white').remove();
        document.getElementById('openPicture').innerHTML = 
                        `<a href="#cities__info" class="city__close--white" id="city__close--white">&times;</a>
                        <div class="img__content" id="img__content">
                            <img src="${finArr[i]}" id="${finArr[i]}" alt="img main" class="img__full">
                        </div>
                         <div class="prev" id="prev" onclick="prev('${i}', '${finArr}')">&larr;</div>
                         <div class="next" id="next" onclick="next('${i}', '${finArr}')">&rarr;</div>
                        `;
    }else{
        i++;
            document.getElementById(remVar).remove();
            document.getElementById('next').remove();
            document.getElementById('prev').remove();
            document.getElementById('city__close--white').remove();
            document.getElementById('openPicture').innerHTML = 
                        `<a href="#cities__info" class="city__close--white" id="city__close--white">&times;</a>
                        <div class="img__content" id="img__content">
                            <img src="${finArr[i]}" id="${finArr[i]}" alt="img main" class="img__full">
                        </div>
                         <div class="prev" id="prev" onclick="prev('${i}', '${finArr}')">&larr;</div>
                         <div class="next" id="next" onclick="next('${i}', '${finArr}')">&rarr;</div>
                        `;
    }
    
    const closeUrlFullImg = document.querySelector('.city__close--white');
    closeUrlFullImg.addEventListener('click', moveIndex);
}




function moveBack() {
        window.history.go(-1);
    }

function moveIndex() {
    window.history.pushState(null, null, 'index.html');
}



    
    
    
    
    
    
    
    
    