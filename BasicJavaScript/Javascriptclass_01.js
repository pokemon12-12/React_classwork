// let a1=[1,2,3];
// //copy method
// let b=a1;
// b.push(55);
// console.log(a1);



//spread operator method 
// let c=[...a1];
// c.push(90);
// console.log(a1);


// //clone method / deep copy method 
// let d=structuredClone(a1);
// d.push(99);
// console.log(a1);

// function greet(name,sayBye){
//     console.log("hello"+name);
//     sayBye();
// }
// function sayBye(){
//     console.log("Bye!");

// }
//  greet("Aniket", sayBye);


//parameters sikhaya gya hai

// function greet(name,sayBye){
//     console.log("Hello"+name);
//     sayBye();
//     console.log("Call returning back to greet")
// }

// greet("Ankit",()=>{
//     console.log("say Bye ")
// });

//for Each loop sikhaya gya hai 

// let students=["Aniket","Rahul","Neha"];
// students.forEach((name,index)=>{
//     console.log(index+ "->"+ name);
// });
// students.forEach((i,j,k)=>{
//     console.log("array log",i,j,k);
// })

//Map function ka use krna shikhaya gya 
// let prices=[100,200,300];

// let gstPrices=prices.map((value)=>{
//     return value+value*0.18;
// })
// console.log(gstPrices);

// let radius=[1,2,3];
// let circumference=radius.map((value)=>{
//     return 2*3.14*value;
// })
// console.log(circumference);


//reduce method ka use shikya gya

// let users=[{name:"A",age: 17,height:170},
//            {name:"B",age:18,height:180},
//            {name:"C",age:70,height:200} 
//         ]

// let adults= users.filter((value)=>{
// return value.age>=18;
// })
// console.log(adults);

//Reduce function 

// let cart=[
//     {item:"Book",price:200,loss:50},
//     {item:"Pen",price:50,loss:90},
//     {item:"Bag",price:1000,loss:50}
// ];
// let initialloss=10;
// let total =cart.reduce((sum,obj)=>{
//     return sum+obj.price;
// },0)
// console.log("total",total);

// let loss=cart.reduce((loss,obj)=>{
//     return loss+obj.loss;
// },initialloss);
// console.log(loss);

