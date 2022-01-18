
const m = async () => {
    
    const url = 'https://api.github.com/users?per_page=5';
    
    const arr: Array<string> | void = await fetch(url)
                        .then(manejaErrores)
                        .then(data => data.json())
                        .then(actionPromise)
                        .catch(error => console.warn('Error:', error));
    
    function actionPromise(arr: Array<any>): Array<string> {
        return arr.filter(i => i.id > 1 && i.id < 4).map(i => 'login: ' + i.login);
    }


    if (arr) arr.forEach(console.log);
    
};

const manejaErrores = ( response: Response ): Response => {

    if (!response.ok) {
        throw new Error( response.statusText );
    }

    return response;

};

m();
