import React , {Component} from 'react';

class MiComponente extends React.Component{

    render(){

            let receta = {
                nombre: 'Pizza',
                ingredientes: ['Tomate', 'Queso', 'Jamón','Pan'],
                calorias: 400
            };

        return (
            <React.Fragment>
                <h1>{'Receta: ' +receta.nombre}</h1>
                <h2>{'calorias: ' +receta.calorias}</h2>
                <ol>
                {
                    receta.ingredientes.map((ingrediente, i) =>{
                        console.log (ingrediente);
                        return (
                            <li key={i}>
                                {ingrediente}
                                </li>
                        );
                    })
                }
                </ol>
                <hr />
            </React.Fragment>
            
        );
    }

}

export default MiComponente;