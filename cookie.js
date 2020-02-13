class Cookie{
    static get(key){
        let cookie = document.cookie.split("; ")
        for(let i in cookie){
            let k = cookie[i].split("=")[0]
            if(k == key){
                return cookie[i].split("=")[1]
            }
        }
        return null
    }

    static set(key, value){
        document.cookie = `${key}=${value}`
    }

    static delete(key){
        document.cookie = `${key}=DELETE;max-age=0`
    }
}