// let h=document.getElementById("heading");
// console.log(h);

// //Get elementClass
// let items=document.getElementsByClassName("text");
// console.log(items[0].innerHTML);
// console.log(items);

// //query selector
// let item=document.querySelector(".text"); //first match 
// let item2=document.querySelectorAll(".text"); //all matches


//Div between innerHTML and InnerText

// let box=document.getElementById("Box");
// console.log(box.innerText);
// console.log(box.innerHTML);

// // using css by java script

// let boxes=document.getElementById("Box");
// boxes.style.backgroundColor="yellow";

// //element creation by java script
// let newP=document.createElement("p");
// newP.innerText="I am created by js";

// document.body.appendChild(newP);

//Event listeners in java script

// let btns=document.getElementById("btn");
// let msg=document.getElementById("msg");

// btns.addEventListener("click",show);
// function show(){
//     msg.innerHTML="I am clicked";
// }
// btns.addEventListener("click",function(event){
//     console.log(event);
//     console.log(event.type);    //"click"
//     console.log(event.target);  //button
// });

//keystroeks 

// document.addEventListener("keydown",function(e){
//     console.log(e.key);
// });

//event bubbling

// parrent.addEventListener("click",()=>{
//     console.log("parrent clicked");
// },true);

// child.addEventListener("click",()=>{
//  console.log("child clicked ");
// },true);

// note:Event ka propagation sequence me chalna ho toh true use krenge usko bubbling kahte hai agar nhi lgaya toh propagatin kahte hai which means child node will be executed first 


// stop propagation

// child.addEventListener("click",function(e){
// console.log()
// })

//create your own promise 

// let success=true;
// let mypromise= new Promise((resolve,reject)=>{
//     if(success){
//         resolve("SUCCESS")
//     }
//     else{
//         reject("FAILURE")
//     }
// })

// //handling promises 


// mypromise.then(result=>{
//     console.log("result",result);
// })
// .catch(error=>{
//     console.log("error",error)
// })
// .finally(()=>{
//     console.log("completed");
// })





