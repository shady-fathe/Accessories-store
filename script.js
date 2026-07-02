let se1 = document.querySelector(".se-1");
let chat = document.querySelector(".chat-popup");
let btnchat = document.querySelector(".btn-chat");
let btnclose = document.querySelector(".close-btn");
let love = document.querySelectorAll(".love");

//       let backgroundimages = ["WH-CH720N_Product_intro_Wiht_05_M.webp","WH-CH720N_Product_intro_Pink_05_M.webp"]
//       let countimges = 0
//       // function to change background in section 1
//       function changbackground(){
//       se1.style.backgroundImage = `url(${backgroundimages[countimges]})`
//       countimges++;
//       if(countimges == 2){
//       countimges = 0
//       }
//         setTimeout(() => {
//       changbackground()
//       }, 2000);
//       }
//  changbackground()

// function to show and hide chat
btnchat.onclick = function () {
  btnchat.style.opacity = 0;
  btnchat.style.pointerEvents = "none";
  chat.style.opacity = 1;
  chat.style.pointerEvents = "auto";
};
btnclose.onclick = function () {
  btnchat.style.opacity = 1;
  btnchat.style.pointerEvents = "auto";
  chat.style.opacity = 0;
  chat.style.pointerEvents = "none";
};

// function to add love
love.forEach(function (item) {
  item.onclick = function () {
    if (item.style.color === "red") {
      item.style.color = "white";
    } else {
      item.style.color = "red";
    }
  };
});


// Arrow right && left
let btnArrow = document.querySelectorAll('.se-3-slider-btn');
let slidcircle = document.querySelectorAll('.slid-circle');
let slidercount = 0;
// خلي أول دائرة حمراء عند بداية الصفحة
slidcircle[slidercount].style.background = "white";

// زر اليمين
btnArrow[1].onclick = function () {

    // رجع لون الدائرة الحالية
    slidcircle[slidercount].style.background = "#7f7f7f";

    // روح للي بعدها
    slidercount++;

    // لو وصلنا لآخر دائرة ارجع لأول واحدة
    if (slidercount >= slidcircle.length) {
        slidercount = 0;
    }

    // لون الدائرة الجديدة
    slidcircle[slidercount].style.background = "white";
};

// زر الشمال
btnArrow[0].onclick = function () {

    // رجع لون الدائرة الحالية
    slidcircle[slidercount].style.background = "#7f7f7f";

    // ارجع للي قبلها
    slidercount--;

    // لو بقينا قبل أول دائرة روح لآخر واحدة
    if (slidercount < 0) {
        slidercount = slidcircle.length - 1;
    }

    // لون الدائرة الجديدة
    slidcircle[slidercount].style.background = "white";
};





  