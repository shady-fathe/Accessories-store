let se1 = document.querySelector(".se-1");
let chat = document.querySelector(".chat-popup");
let btnchat = document.querySelector(".btn-chat");
let btnclose = document.querySelector(".close-btn");
let love = document.querySelectorAll(".love");
let btnCartClose = document.querySelector(".cart-btn-close");
let btnCartopen = document.querySelector(".Cart");
let divCart = document.querySelector(".cart-min-d");

//       let backgroundimages = ["photos/WH-CH720N_Product_intro_Wiht_05_M.webp","photos/WH-CH720N_Product_intro_Pink_05_M.webp"]
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

// header function
function toggleMenu() {
  document.querySelector(".nav").classList.toggle("active");
}

///////////// cart
// 1. close && open
//open
btnCartopen.onclick = function () {
  divCart.style.opacity = "1";
  divCart.style.pointerEvents = "auto";
};
//close

btnCartClose.onclick = function () {
  divCart.style.opacity = "0";
  divCart.style.pointerEvents = "none";
};
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
let btnArrow = document.querySelectorAll(".se-3-slider-btn");
let slidcircle = document.querySelectorAll(".slid-circle");
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

document.addEventListener("DOMContentLoaded", () => {
  const chatPopup = document.querySelector(".chat-popup");
  const chatMessages = document.querySelector(".chat-messages");
  const chatInput = document.querySelector(".chat-input");
  const chatInputParagraphs = document.querySelectorAll(".chat-input p");

  // دالة لتمرير المحادثة لأسفل تلقائياً
  const scrollToBottom = () => {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  // 1. دالة لحفظ الرسائل في localStorage
  const saveMessageToStorage = (sender, text) => {
    // جلب الرسائل القديمة أو إنشاء مصفوفة فارغة إذا لم تكن موجودة
    const savedMessages =
      JSON.parse(localStorage.getItem("chat_history")) || [];
    // إضافة الرسالة الجديدة
    savedMessages.push({ sender, text });
    // حفظ المصفوفة المحدثة
    localStorage.setItem("chat_history", JSON.stringify(savedMessages));
  };

  // 2. دالة لعرض الرسائل من الـ localStorage عند تحميل الصفحة
  const loadMessagesFromStorage = () => {
    const savedMessages =
      JSON.parse(localStorage.getItem("chat_history")) || [];
    savedMessages.forEach((msg) => {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add(msg.sender === "user" ? "chat-user" : "chat-AI");
      messageDiv.innerHTML = `<p>${msg.text}</p>`;
      chatMessages.appendChild(messageDiv);
    });
    scrollToBottom(); // تمرير لأسفل بعد عرض الرسائل القديمة
  };

  // تحميل الرسائل المحفوظة فوراً عند فتح الصفحة
  loadMessagesFromStorage();

  // 3. التعامل مع الضغط على الاقتراحات السريعة
  chatInputParagraphs.forEach((paragraph) => {
    paragraph.addEventListener("click", () => {
      const text = paragraph.textContent;

      // إنشاء ورسم رسالة المستخدم
      const userMessageDiv = document.createElement("div");
      userMessageDiv.classList.add("chat-user");
      userMessageDiv.innerHTML = `<p>${text}</p>`;
      chatMessages.appendChild(userMessageDiv);

      // حفظ رسالة المستخدم في الـ localStorage
      saveMessageToStorage("user", text);
      scrollToBottom();

      // رد تلقائي من البوت بعد ثانية
      setTimeout(() => {
        const aiText = `You asked about: "${text}". How can I assist you further with this?`;

        const aiMessageDiv = document.createElement("div");
        aiMessageDiv.classList.add("chat-AI");
        aiMessageDiv.innerHTML = `<p>${aiText}</p>`;
        chatMessages.appendChild(aiMessageDiv);
        // حفظ رد البوت في الـ localStorage
        saveMessageToStorage("ai", aiText);
        scrollToBottom();
      }, 1000);
    });
  });

  // 4. تفعيل التمرير الأفقي بالاقتراحات السريعة بواسطة بكرة الماوس (Mouse Wheel)
  chatInput.addEventListener("wheel", (event) => {
    event.preventDefault(); // منع الصفحة من التحرك لأسفل/أعلى عند التمرير هنا
    chatInput.scrollLeft += event.deltaY; // تحويل التمرير الرأسي إلى أفقي
  });
});
