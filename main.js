 // let celsius = document.getElementById('celsius');


let myAge = document.getElementById('humanyears'); //my age ;
let displayDogYears = document.getElementById('dogyears');





myAge.oninput = () => {
 
    let output = parseFloat(myAge.value);
    var earlyYears = 2; 

    earlyYears *= 10.5;

    var laterYears = output -2;
    laterYears *= 4;
    var myAgeInDogYears = earlyYears + laterYears;


    displayDogYears.value = parseFloat(myAgeInDogYears);
    
}



