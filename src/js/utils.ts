import '../css/utils.css';

export const saludar = (nombre: string) => {
    const h1 = document.createElement('h1');
    h1.innerHTML = `${nombre}`;

    document.body.append(h1);
};

export const welcome: Function = (nombre: string) => {
    return `Te doy la bienvenida al proyecto con Webpack ${nombre}`;
};