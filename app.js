// promises
// promise is a javascript object
// promise in javascript returns something in the future
// It has three stages
// 1.pending
// 2.fullfilled 
// 3.rejected


let concert = false;
let attendConcert = new Promise(function(resolve, reject) { // This function is known as executer and to the executer two function as a parameter is passed first one is resolve and the second one is reject
    setTimeout(() => {
        if(concert){
            resolve("BOB ATTENDED THE CONCERT");
        }else{
            reject("BOB FAILED TO ATTEND THE CONCERT");
        }
    }, 2000);
});
// console.log(attendConcert);
// setTimeout(() => {
//     console.log(attendConcert);
// }, 3000);

attendConcert.then((data)=>console.log(data)); // then method waits till the fullfillment of the promise and in case of rejection it also prints the reject message

attendConcert.catch((error)=>console.log(error)); // catch method catches any error which happens durig the pending stage of the promise and if the promise goes to the rejected stage then also it will produce an error , iff the promise is fullfilled then only no error occurs

// we can also look at catch as it catches every reason which didn't let promise to go to the fullfilment stage