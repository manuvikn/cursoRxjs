
const ma = async () => {
    
    const url = 'https://api.github.com/users?per_page=5';
    
    const arr: Array<string> = await fetch(url)
                        .then(data => data.json())
                        .then(actionPromise);
    
    function actionPromise(arr: Array<any>): Array<string> {
        return arr.filter(i => i.id > 1 && i.id < 4).map(i => 'login: ' + i.login);
    }


    arr.forEach(console.log);
    
};

ma();
