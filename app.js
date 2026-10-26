const ADMIN_PASSWORD = "d0ratech0411pengu1n";

let faq = JSON.parse(localStorage.getItem("faq")) || [
{
keywords:["学費","授業料"],
answer:"学費の詳細は募集要項をご確認ください。"
}
];

function saveStorage(){
localStorage.setItem("faq",JSON.stringify(faq));
}

function addMessage(text,type){

const chat=document.getElementById("chat");

const div=document.createElement("div");

div.className="message "+type;

div.innerHTML=text;

chat.appendChild(div);

chat.scrollTop=chat.scrollHeight;
}

function sendMessage(){

const input=document.getElementById("question");

const text=input.value.trim();

if(text==="") return;

addMessage(text,"user");

input.value="";

let result=
"申し訳ありません。FAQに登録されていません。";

for(const item of faq){

for(const keyword of item.keywords){

if(text.includes(keyword)){

result=item.answer;

break;

}

}

}

setTimeout(()=>{

addMessage(result,"ai");

},200);

}

function showLogin(){
document.getElementById("loginModal").style.display="block";
}

function closeLogin(){
document.getElementById("loginModal").style.display="none";
}

function login(){

const pw=
document.getElementById("password").value;

if(pw===ADMIN_PASSWORD){

closeLogin();

document.getElementById("adminModal").style.display="block";

loadFaq();

}else{

alert("パスワードが違います");

}

}

function loadFaq(){

const list=
document.getElementById("faqList");

list.innerHTML="";

faq.forEach((item,index)=>{

list.innerHTML+=`
<div class="faq-item">

<b>${item.keywords.join(", ")}</b>

<br><br>

${item.answer}

</div>
`;
});
}
