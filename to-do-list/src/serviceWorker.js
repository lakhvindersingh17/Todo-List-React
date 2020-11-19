const path=require('path')

let swUrl=path.join(process.env.PUBLIC_URL+'/serviceWorker.js')

export let register=()=>{
  navigator.serviceWorker.register(swUrl)
  .then(res=>console.log(res)).catch(err=>console.log(err))
}