const owner = document.querySelector(".owner").value;
const socket = io();
const inbox = document.querySelector(".messages");
socket.on("message", ()=>{
  alert("this is message");
});
socket.on("receiver", data=>{
  socket.emit("receiveMessage", data);
  alert("new message arrive");
  newMessage(data);
for(let i = 0; i < inbox.children.length; i++){
  inbox.children[i].onclick = ()=> window.location = `/messages/${inbox.children[i].children[0].innerText}`;
}
});
let prevSender = "";
const newMessage = (data)=>{
  const cm = document.createElement("div");
  cm.id ="message";
  cm.innerHTML= `<h1>${data.sender}</h1>
                 <p>${data.message}</p>`;
  inbox.append(cm);
}

