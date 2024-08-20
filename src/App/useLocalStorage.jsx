import { useState } from "react";

const useLocalStorage = (name, valorInicial) => {
    const localStorageItem  = localStorage.getItem(name);

    let itemFormateado;

    if(localStorageItem){
        itemFormateado = JSON.parse(localStorageItem);
        if(itemFormateado){
            itemFormateado = itemFormateado.map((item) => {
                if(item.fecha){
                    item.fecha = new Date(item.fecha);
                }
                return item;
            })
        }
    }else{
        localStorage.setItem(name, JSON.stringify(valorInicial));
        itemFormateado = valorInicial;
    }

    
    const [item, setItem] = useState(itemFormateado);

    const saveItems = (newItem) => {
        localStorage.setItem(name, JSON.stringify(newItem));
        setItem(newItem);
    }

    return [item, saveItems];
}

export {useLocalStorage}