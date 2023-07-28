//CLIENT SIDE

const socket = io();
const msg = document.querySelector(".message"); 
const inbox = document.querySelector(".inbox"); 
const receiver = document.querySelector(".receiver").value;
const owner = document.querySelector(".owner").value;

//sending messages
//receiver
document.querySelector(".btn").addEventListener("click", ()=>{
appendMessage();
 socket.emit("message", {message: msg.value, receiver: receiver, sender:owner});
 msg.value="";
})
socket.on("receiver", data =>{
  alert("message arrive");
  receiveMessage(data);
})

const receiveMessage = (data) =>{
  const receiveMsg = document.createElement("div");
  receiveMsg.id = "other-message";
  receiveMsg.innerHTML = `<p>${data.message}</p>`;
  inbox.append(receiveMsg);
  window.scrollTo(0, inbox.scrollHeight-100);
}

const appendMessage = () =>{
  const appendMsg = document.createElement("div");
  appendMsg.id = "my-message";
  appendMsg.innerHTML = `<p>${msg.value}</p>`;
  inbox.append(appendMsg);
  window.scrollTo(0, inbox.scrollHeight-100);
}
function back(){
  window.location = "/messages";
}