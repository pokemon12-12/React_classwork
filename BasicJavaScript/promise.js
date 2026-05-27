let success=true;
    let myPromise=new Promise((resolve,reject)=>{
        if(success){
            resolve("printing from the resolve block")
        }else{
            reject("printing from reject block")
        }
    })

    //handling promises
    myPromise.then(result=>{
        console.log("result",result);
    })
    .catch(error=>{
        console.log("error",error)
    })
    .finally(()=>{
        console.log("completed");
    })
    
    //example
    // let products;
    fetch("https://dummyjson.com/products")
    .then((response)=>{
        console.log("raw response",response);
        return response.json;
    })   //return another promise
    .then(data=>{
        console.log(data.products);
        // products=data.products;

        // console.log(products[0].images[0]);
    })
    .catch(error=>{
        console.log("Error:",error)
    });
    //  document.getElementById(productImage).src=products[0].images[0];
    