let cacheData='appCache'
console.log("Active")

this.addEventListener('install',event=>{

    event.waitUntil(
        caches.open(cacheData).then(cache=>{
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/bundle.js',
                '/static/js/0.chunk.js',
                '/manifest.json',
                '/favicon.ico',
                '/index.html',
                '/logo192.png',
                '/addTask',
                '/completedTask',
                '/'
                
            ])
        })
    )
})

this.addEventListener('fetch',event=>{
    if(!navigator.onLine){
        event.respondWith(
        caches.match(event.request).then(res=>{
            if(res)
            return res
            // fetch(event.request.clone())

        }).catch(err=>console.log(err))
    )
    }
})