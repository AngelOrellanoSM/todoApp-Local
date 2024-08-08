import { createContext, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({children}) => {

    const fechaPrueba = new Date();
    const fechaPrueba2 = new Date(fechaPrueba.getTime() + 1 * 24 * 60 * 60 * 1000);
    const fechaPrueba3 = new Date(fechaPrueba.getTime() + 2 * 24 * 60 * 60 * 1000);
    const fechaPrueba4 = new Date(fechaPrueba.getTime() + 3 * 24 * 60 * 60 * 1000);
    const fechaPrueba5 = new Date(fechaPrueba.getTime() + 4 * 24 * 60 * 60 * 1000);
    const fechaPrueba6 = new Date(fechaPrueba.getTime() + 5 * 24 * 60 * 60 * 1000);
    const fechaPrueba7 = new Date(fechaPrueba.getTime() + 6 * 24 * 60 * 60 * 1000);
    const fechaPrueba8 = new Date(fechaPrueba.getTime() + 7 * 24 * 60 * 60 * 1000);
    const fechaPrueba9 = new Date(fechaPrueba.getTime() + 8 * 24 * 60 * 60 * 1000);
    const fechaPrueba10 = new Date(fechaPrueba.getTime() + 9 * 24 * 60 * 60 * 1000);
    const fechaPrueba11 = new Date(fechaPrueba.getTime() + 10 * 24 * 60 * 60 * 1000);
    const fechaPrueba12 = new Date(fechaPrueba.getTime() + 11 * 24 * 60 * 60 * 1000);
    const fechaPrueba13 = new Date(fechaPrueba.getTime() + 12 * 24 * 60 * 60 * 1000);
    const fechaPrueba14 = new Date(fechaPrueba.getTime() + 13 * 24 * 60 * 60 * 1000);
    const fechaPrueba15 = new Date(fechaPrueba.getTime() + 14 * 24 * 60 * 60 * 1000);
    const fechaPrueba16 = new Date(fechaPrueba.getTime() + 15 * 24 * 60 * 60 * 1000);
    const fechaPrueba17 = new Date(fechaPrueba.getTime() + 16 * 24 * 60 * 60 * 1000);
    const fechaPrueba18 = new Date(fechaPrueba.getTime() + 17 * 24 * 60 * 60 * 1000);
    const fechaPrueba19 = new Date(fechaPrueba.getTime() + 18 * 24 * 60 * 60 * 1000);
    const fechaPrueba20 = new Date(fechaPrueba.getTime() + 19 * 24 * 60 * 60 * 1000);

    const [tasks] = useState([
        {
            titulo: "Tarea 1",
            descripcion: "Descripción de la Tarea 1",
            etiqueta: "Trabajo",
            importancia: "Importante",
            fecha: fechaPrueba,
            completado: 1,
            subTasks: []
        },
        {
            titulo: "Tarea 2",
            descripcion: "Descripción de la Tarea 2",
            etiqueta: "Hogar",
            importancia: "Urgente",
            fecha: fechaPrueba2,
            completado: 0,
            subTasks: [
                {
                    titulo: "Subtarea 2.1",
                    descripcion: "Descripción de la Subtarea 2.1",
                    completado: 1
                },
                {
                    titulo: "Subtarea 2.2",
                    descripcion: "Descripción de la Subtarea 2.2",
                    completado: 0
                },
                {
                    titulo: "Subtarea 2.3",
                    descripcion: "Descripción de la Subtarea 2.3",
                    completado: 1
                }
            ]
        },
        {
            titulo: "Tarea 3",
            descripcion: "Descripción de la Tarea 3",
            etiqueta: "Estudio",
            importancia: "Complementario",
            fecha: fechaPrueba3,
            completado: 1,
            subTasks: []
        },
        {
            titulo: "Tarea 4",
            descripcion: "Descripción de la Tarea 4",
            etiqueta: "Ejercicio",
            importancia: "Urgente",
            fecha: fechaPrueba4,
            completado: 0,
            subTasks: [
                {
                    titulo: "Subtarea 4.1",
                    descripcion: "Descripción de la Subtarea 4.1",
                    completado: 0
                },
                {
                    titulo: "Subtarea 4.2",
                    descripcion: "Descripción de la Subtarea 4.2",
                    completado: 1
                },
                {
                    titulo: "Subtarea 4.3",
                    descripcion: "Descripción de la Subtarea 4.3",
                    completado: 0
                }
            ]
        },
        {
            titulo: "Tarea 5",
            descripcion: "Descripción de la Tarea 5",
            etiqueta: "Reunión",
            importancia: "Importante",
            fecha: fechaPrueba5,
            completado: 1,
            subTasks: []
        },
        {
            titulo: "Tarea 6",
            descripcion: "Descripción de la Tarea 6",
            etiqueta: "Finanzas",
            importancia: "Urgente",
            fecha: fechaPrueba6,
            completado: 0,
            subTasks: [
                {
                    titulo: "Subtarea 6.1",
                    descripcion: "Descripción de la Subtarea 6.1",
                    completado: 1
                },
                {
                    titulo: "Subtarea 6.2",
                    descripcion: "Descripción de la Subtarea 6.2",
                    completado: 0
                }
            ]
        },
        {
            titulo: "Tarea 7",
            descripcion: "Descripción de la Tarea 7",
            etiqueta: "Proyecto",
            importancia: "Importante",
            fecha: fechaPrueba7,
            completado: 1,
            subTasks: []
        },
        {
            titulo: "Tarea 8",
            descripcion: "Descripción de la Tarea 8",
            etiqueta: "Mantenimiento",
            importancia: "Complementario",
            fecha: fechaPrueba8,
            completado: 0,
            subTasks: [
                {
                    titulo: "Subtarea 8.1",
                    descripcion: "Descripción de la Subtarea 8.1",
                    completado: 1
                },
                {
                    titulo: "Subtarea 8.2",
                    descripcion: "Descripción de la Subtarea 8.2",
                    completado: 1
                },
                {
                    titulo: "Subtarea 8.3",
                    descripcion: "Descripción de la Subtarea 8.3",
                    completado: 0
                }
            ]
        },
        {
            titulo: "Tarea 9",
            descripcion: "Descripción de la Tarea 9",
            etiqueta: "Cuidado Personal",
            importancia: "Urgente",
            fecha: fechaPrueba9,
            completado: 1,
            subTasks: []
        },
        {
            titulo: "Tarea 10",
            descripcion: "Descripción de la Tarea 10",
            etiqueta: "Trabajo",
            importancia: "Importante",
            fecha: fechaPrueba10,
            completado: 0,
            subTasks: [
                {
                    titulo: "Subtarea 10.1",
                    descripcion: "Descripción de la Subtarea 10.1",
                    completado: 1
                },
                {
                    titulo: "Subtarea 10.2",
                    descripcion: "Descripción de la Subtarea 10.2",
                    completado: 0
                }
            ]
        },
        {
            titulo: "Tarea 11",
            descripcion: "Descripción de la Tarea 11",
            etiqueta: "Hogar",
            importancia: "Complementario",
            fecha: fechaPrueba11,
            completado: 1,
            subTasks: []
        },
        {
            titulo: "Tarea 12",
            descripcion: "Descripción de la Tarea 12",
            etiqueta: "Estudio",
            importancia: "Importante",
            fecha: fechaPrueba12,
            completado: 0,
            subTasks: [
                {
                    titulo: "Subtarea 12.1",
                    descripcion: "Descripción de la Subtarea 12.1",
                    completado: 1
                },
                {
                    titulo: "Subtarea 12.2",
                    descripcion: "Descripción de la Subtarea 12.2",
                    completado: 0
                },
                {
                    titulo: "Subtarea 12.3",
                    descripcion: "Descripción de la Subtarea 12.3",
                    completado: 1
                }
            ]
        },
        {
            titulo: "Tarea 13",
            descripcion: "Descripción de la Tarea 13",
            etiqueta: "Ejercicio",
            importancia: "Urgente",
            fecha: fechaPrueba13,
            completado: 1,
            subTasks: []
        },
        {
            titulo: "Tarea 14",
            descripcion: "Descripción de la Tarea 14",
            etiqueta: "Reunión",
            importancia: "Complementario",
            fecha: fechaPrueba14,
            completado: 0,
            subTasks: [
                {
                    titulo: "Subtarea 14.1",
                    descripcion: "Descripción de la Subtarea 14.1",
                    completado: 1
                },
                {
                    titulo: "Subtarea 14.2",
                    descripcion: "Descripción de la Subtarea 14.2",
                    completado: 0
                }
            ]
        },
        {
            titulo: "Tarea 15",
            descripcion: "Descripción de la Tarea 15",
            etiqueta: "Finanzas",
            importancia: "Importante",
            fecha: fechaPrueba15,
            completado: 1,
            subTasks: []
        },
        {
            titulo: "Tarea 16",
            descripcion: "Descripción de la Tarea 16",
            etiqueta: "Proyecto",
            importancia: "Urgente",
            fecha: fechaPrueba16,
            completado: 0,
            subTasks: [
                {
                    titulo: "Subtarea 16.1",
                    descripcion: "Descripción de la Subtarea 16.1",
                    completado: 1
                },
                {
                    titulo: "Subtarea 16.2",
                    descripcion: "Descripción de la Subtarea 16.2",
                    completado: 0
                },
                {
                    titulo: "Subtarea 16.3",
                    descripcion: "Descripción de la Subtarea 16.3",
                    completado: 1
                }
            ]
        },
        {
            titulo: "Tarea 17",
            descripcion: "Descripción de la Tarea 17",
            etiqueta: "Mantenimiento",
            importancia: "Complementario",
            fecha: fechaPrueba17,
            completado: 1,
            subTasks: []
        },
        {
            titulo: "Tarea 18",
            descripcion: "Descripción de la Tarea 18",
            etiqueta: "Cuidado Personal",
            importancia: "Importante",
            fecha: fechaPrueba18,
            completado: 0,
            subTasks: [
                {
                    titulo: "Subtarea 18.1",
                    descripcion: "Descripción de la Subtarea 18.1",
                    completado: 1
                },
                {
                    titulo: "Subtarea 18.2",
                    descripcion: "Descripción de la Subtarea 18.2",
                    completado: 0
                }
            ]
        },
        {
            titulo: "Tarea 19",
            descripcion: "Descripción de la Tarea 19",
            etiqueta: "Trabajo",
            importancia: "Urgente",
            fecha: fechaPrueba19,
            completado: 1,
            subTasks: []
        },
        {
            titulo: "Tarea 20",
            descripcion: "Descripción de la Tarea 20",
            etiqueta: "Hogar",
            importancia: "Importante",
            fecha: fechaPrueba20,
            completado: 0,
            subTasks: [
                {
                    titulo: "Subtarea 20.1",
                    descripcion: "Descripción de la Subtarea 20.1",
                    completado: 1
                },
                {
                    titulo: "Subtarea 20.2",
                    descripcion: "Descripción de la Subtarea 20.2",
                    completado: 0
                }
            ]
        }
    ]);

    const [taskDerivado, setTaskDerivado] = useState(tasks);

    const filtrarTask = (propiedad, filtro) =>{

        if(filtro === "all"){
            setTaskDerivado(tasks);
        }else{
            const taskTemporal = tasks.filter((task) => task[propiedad] === filtro);
            setTaskDerivado(taskTemporal);
        }

    }

    return (
        <TaskContext.Provider value={{tasks, filtrarTask, taskDerivado}}>
            {children}
        </TaskContext.Provider>
    )
}

export {TaskContext, TaskProvider}