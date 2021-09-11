
let concert = false;
let attendConcert = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if(concert){
            resolve("BOB ATTENDED THE CONCERT");
        }else{
            reject("BOB FAILED TO ATTEND THE CONCERT");
        }
    }, 2000);
});

// async await is a better way of getting the resolve or the rejected stages of the promises as here error handling becomes easy than using then catch methods

// async function afunc(){
//     try{
//         let result = await attendConcert;
//         console.log(result);
//     }catch(e){
//         console.log(e);
//     }
// }

const afunc = async()=>{
    try{
        let result = await attendConcert;
        console.log(result);
    }catch(e){
        console.log(e);
    }
}
afunc();