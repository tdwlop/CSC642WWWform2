export function getInput(fn, ln, ti, ft, ih, po, st, ct, sa, zc, se, sp, sf, sw, sm, sv, mb, em, tos){
    var ferr = [];
    if (typeof (Storage) !== "undefined") {
    console.log(fn);
    if(fn.length <= 40){
        localStorage.fn = fn;
    }else{
        ferr.push("First Name must be 40 characters or less\n");
    }
    
    console.log(ln);
    if(fn.length <= 40){
        localStorage.ln = ln;
    }else{
        ferr.push("Last Name must be 40 characters or less\n");
    }
    
    console.log(ti);
    if(ti === ''){
        localStorage.ti = 'None';
    }else{
        localStorage.ti = ti;
    }
     
    
    if(ft === '' && ih ===''){
        localStorage.height = 'None Entered';
    }else{
        localStorage.height = `${ft}'${ih}"`;
    }
    console.log(ft);
    localStorage.ft = ft;

    console.log(ih);
    localStorage.ih = ih;

    console.log(po);
    if(po !== ''){
        if(po.match(/^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/)){
            localStorage.po = po;
        }else{
            ferr.push('You tried to enter a phone number but it did not pass\n');
        }
    }else{
        localStorage.po = 'None Entered';
    }

    console.log(st);
    localStorage.st = st;

    console.log(ct);
    localStorage.ct = ct;

    console.log(sa);
    if(sa.match(/^[A-Z][A-Z]$/)){
        localStorage.sa = sa;
    }else{
        ferr.push("state must be two uppercase letters");
    }
    

    console.log(zc);
    if(zc.match(/^\d{5}$/)){
        localStorage.zc =zc ;
    }else{
        ferr.push("zip codes must be up to five positive digits");
    }
    
    if(st && ct && sa && zc){
        console.log("in the if for making the big address");
        localStorage.youraddress = `${st},${ct},${sa},${zc}`;
        console.log(typeof(localStorage.youraddress))
        console.log(localStorage.youraddress);
        getLongLat(st);
    }

    console.log(se);
    se ? localStorage.se = "Yes" : localStorage.se = "No";
    //localStorage.se = se;
    console.log(sp);
    sp ? localStorage.sp = "Yes":localStorage.sp = "No";
    //localStorage.sp = sp;
    console.log(sf);
    sf ? localStorage.sf = "Yes" : localStorage.sf = "No";
    //localStorage.sf = sf;
    console.log(sw);
    sw ? localStorage.sw = "Yes" : localStorage.sw = "No";
    //localStorage.sw = sw;
    console.log(sm);
    sm ? localStorage.sm = "Yes":localStorage.sm = "No";
    //localStorage.sm = sm;
    console.log(sv);
    sv ? localStorage.sv = "Yes" : localStorage.sv = "No";
    //localStorage.sv = sv;
    if(mb === ''){
        localStorage.mb = 'less than $ 50';
    }else{
        localStorage.mb = mb;
    }
    

    console.log(em);
    if(em.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)){
        localStorage.em = em;
    }else{
        ferr.push('Your email is not valid, it must have an "@" and a "."');
    }
    

    console.log(tos);
    tos ? localStorage.tos = "Yes" : localStorage.tos = "No";
} else {
    alert("SORRY. THIS BROWSER DOES NOT HAVE WEB STORAGE SUPPORT. PLEASE USE ANOTHER BROWSER");
}

    if(ferr.length > 0){
       let op = document.getElementById('bigbig');
       let alertdiv = document.createElement('div');
       //alertdiv.className = "alert alert-warning alert-dismissible fade show" ;
       //alertdiv.ariaRoleDescription = 'alert';
       let alertmessage = ferr.join("</br>");
       alertdiv.innerHTML = `<div class="alert alert-warning alert-dismissible fade show col-auto" role="alert"><strong>There was an issue with the following: </strong> </br>${alertmessage}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> </div>`;
       
        op.append(alertdiv);
       //op.insertBefore(alertdiv,op.firstChild);
        return false;
    }else{
        return true;
    }
    //let x = FResults();

    //return FResults;
    //localStorage.tos = tos;
    //window.open('/FResults');
}
function getLongLat(st){
    var latlongarr;
    
    let starr = st.split(/[ ,]+/);
    console.log(starr);
    if(starr.length === 3){
        fetch(`https://dev.virtualearth.net/REST/v1/Locations/US/${localStorage.sa}/${localStorage.zc}/${localStorage.ct}/${starr[0]}%20${starr[1]}%20${starr[2]}?key=AjLO9XD7SI7kT5yhQ1tbmi2fGDB1tnz5OBD4Mx0f0oQPXy9Oz3reskGgLrmKS7Jm`)
    .then(res => res.json())
    .then(resjson => {latlongarr = resjson;
    localStorage.long = latlongarr.resourceSets[0].resources[0].point.coordinates[1];
    localStorage.lat = latlongarr.resourceSets[0].resources[0].point.coordinates[0];
    console.log(localStorage.long);
    console.log(resjson);})
    ;
    }
    console.log(latlongarr);
    
}

/*<BingMapsReact
                  bingMapsKey=""
                  height="300px"

                  mapOptions={{
                    navigationBarMode: "square",
                  }}

                  pushPins={[{"location":[localStorage.lat,localStorage.long], "option":{ color: 'red' }}]}

                  viewOptions={{
                    center: { latitude: localStorage.lat, longitude: localStorage.long},
                    mapTypeId: "canvasLight",
                    zoom: '10'
                  }}

                /> */


export function delInput(){
    localStorage.removeItem("fn");
    localStorage.removeItem("ln");
    localStorage.removeItem("ti");
    localStorage.removeItem("ft");
    localStorage.removeItem("ih");
    localStorage.removeItem("po");
    localStorage.removeItem("st");
    localStorage.removeItem("ct");
    localStorage.removeItem("sa");
    localStorage.removeItem("zc");
    localStorage.removeItem("se");
    localStorage.removeItem("sp");
    localStorage.removeItem("sf");
    localStorage.removeItem("sw");
    localStorage.removeItem("sm");
    localStorage.removeItem("sv");
    localStorage.removeItem("mb");
    localStorage.removeItem("em");
    localStorage.removeItem("tos");
}