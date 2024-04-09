let ProfilePic = document.getElementById("profile-pic");
let InputFile = document.getElementById("input-file");

InputFile.onchange = function(){
    let imagePath = URL.createObjectURL(InputFile.files[0]);
    ProfilePic.src = imagePath;

    // Save the image path to localStorage
    localStorage.setItem("uploadedImage", imagePath);
}



let inputLocation = document.getElementById("input-location");
let NextBtn = document.getElementById("NextBtn");
let PressReturn = document.getElementById("PressReturn");

addEventListener('input', function() {

if(inputLocation.value == ''){
    NextBtn.style.opacity = '0.4';
    PressReturn.style.opacity = 'none';
}else{
    NextBtn.style.opacity = '1';
    PressReturn.style.display = 'block';
}
});
NextBtn.style.opacity = '0.4';
PressReturn.style.display = 'none  ';
