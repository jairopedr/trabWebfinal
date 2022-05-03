import Head from 'next/head';
import Footer from '../components/Footer';
//import Menu from '../components/Menu';

import { Button } from 'reactstrap';


function Voluntario() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site para um abrigo de cachorros" />
                <meta name="author" content="Jairo, Luana e Mateus - SalvamentoRiopas" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
                <title>SalvamentoRiopas</title>
            </Head>
            <main className="container p-5">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h4 className="display-4">Por que se tornar um voluntário? </h4>
                        
                        <p className="txt">Venha fazer parte da nossa equipe e ajudar a salvar a vida desses animais. Ajude a fazer a diferença e inscreva-se
                            para voluntariado hoje! Acesse o link abaixo e responda ao questionário e em breve entraremos em contato com você!<br></br>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScPLT7Zx4UU5DCZ_k7jS7Jw4nuJtEmjNkkCBIn2Qe3tlCPm0w/viewform?embedded=true"><b> Click aqui!</b>🔗</a>
                            <br></br><br></br><b>OBSERVAÇÃO:</b> Menores de idade também podem ser voluntários. Basta que o responsável preencha e preencha o formulário. </p>
                    </div>
                </div>
            

                <div className="container">
                    <h3 className="display-4">Algumas das atividades a serem desenvolvidas: </h3>
                </div>

                <div class="row row-cols-1 row-cols-md-2 g-1" width= "2rem">
                    <div class="col">
                        <div class="card-body">
                            <img src="/admin.jpg" className="img-fluid" alt="..." /><br></br>
                            <div class="card-body">
                                <h5 class="card-title"><b>Ajuda em redes sociais</b></h5>
                                <p class="card-text">Fazer a administração das redes sociais do abrigo, buscando sempre postar as atualizações sobre os animais.</p>
                            </div> 
                        </div> 
                    </div>
                    <div class="col">
                        <div class="card-body">
                            <img src="/limpeza.png" className="img-fluid" alt="..." /><br></br>
                            <div class="card-body">
                                <h5 class="card-title"><b>Auxílio na limpeza</b></h5>
                                <p class="card-text">Ajudar na limpeza do abrigo, para garantir um lugar aconchegante para os animais.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                            <img src="/transporte.jpg" className="img-fluid" alt="..."/><br></br>
                            <div class="card-body">
                                <h5 class="card-title"><b>Transporte de animais</b></h5>
                                <p class="card-text">Muitas vezes necessitamos de levar alguns animais em situação mais grave para fazer tratamento nas cidades vizinhas.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                            <img src="/resgate.jpg" className="img-fluid" alt="..."/><br></br>
                            <div class="card-body">
                                <h5 class="card-title"><b>Resgate de animais</b></h5>
                                <p class="card-text">Auxiliar no resgate de animais abandonados ou machucados e levá-los até o abrigo.</p>
                            </div>
                        </div>
                    </div>
                </div><br></br>

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="custom.js"></script>
            </main>
        </>
    )
}

export default Voluntario;