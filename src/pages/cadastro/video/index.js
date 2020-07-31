import React from 'react';
import PageDefault from '../../../componentes/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return(
        <PageDefault>
            <h1>
            Pagina de cadastro do video
            </h1>
            
            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </PageDefault>
    )
}
export default CadastroVideo;