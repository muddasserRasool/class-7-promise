function firstcode() {
    console.log("hello")

    let checkpromsie = new Promise(function (resolve, reject) {

        setTimeout(() => {
            console.log("promise done")
            resolve("data")
        }, 1000);



    })

    checkpromsie.then(function () {
        console.log("promise resolved")
    })
}

//firstcode();

function secondcode(){

const anyFunction =()=>{
    return Math.floor(Math.random()*10)%2 ===0? true:false;
}

const resolveFunction =()=> console.log('success')
const rejectFunction =()=> console.log('Failure')


const result =new Promise((resolve, reject) =>{
    setTimeout(() => {
        anyFunction() ? resolve(): reject();
    }, 2000);
})

result.then (resolveFunction).catch(rejectFunction);

}

secondcode()