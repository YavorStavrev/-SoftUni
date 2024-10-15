function requestValidator(obj) {
    const validMethot = ["GET", "POST", "DELETE", "CONNECT"];
    const uriPattern = /^[\w.]+$/g;
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const specialChar = ["<", ">", "\\", "&", "'",'"'];
    if (!validMethot.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!obj.uri || obj.uri === "*" || !obj.uri.match(uriPattern)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersion.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if(!obj.hasOwnProperty('message')){
        throw new Error('Invalid request header: Invalid Message');
    }

    for(let el of obj.message){
        if(specialChar.includes(el)){
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    return obj;
}
requestValidator({ method: 'POST', uri: 'home.bash', message: 'rm -rf /*' });