const socket = io("http://localhost:4005");
const box = document.querySelector(".messages");
const msg = document.querySelector(".msg");
const chatRoom = document.querySelector(".chat-room");
const btn = document.getElementById("btn");
const date = new Date();

//submit event
window.addEventListener("submit",(e)=>{
  e.preventDefault();
  if(msg.value != "" && msg.value !== "  "){
  socket.emit("client-response", {name:"Jasper", message: msg.value });
  userNode({name:"Jasper", message:msg.value});
  msg.value="";
  chatRoom.scrollTo(0, chatRoom.scrollHeight);
  };
} );

// sinend ng ibang user
socket.on("client-receive", data=>{
  newNode(data);
})
//for room emit


const newNode = (data)=>{
  const node = document.createElement("div");
  node.id="msg-arrive";
  node.innerHTML = `<p>${data.message}</p>`;
  box.append(node);
}
const userNode = (data)=>{
  const node = document.createElement("div");
  node.id="msg-arrive";
  node.innerHTML = `<p style="margin-left:auto;">${data.message}</p>`;
  box.append(node);
}