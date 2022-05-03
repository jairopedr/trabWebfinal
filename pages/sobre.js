import Head from 'next/head';
//import Menu from '../components/Menu';
import Footer from '../components/Footer';
//import { Container, Row, Card, Button } from 'react-bootstrap'

function Sobre() {
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
                    <h4 className="display-4"> Sobre o Abrigo </h4>  
                </div>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div className="ratio ratio-16x9"><br></br><br></br>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/_lVHXSJHDHM?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col">
                        <div className="iconeinstagram">
                            <p className="lead1">
                                Olá!!!<br></br><br></br>
                                Somos a <b>S.O.S Animais Abandonados</b>, uma entidade não governamental, sem fins lucrativos.
                                Cuidamos e promovemos adoção responsável a quem esteja disposto a dar muito amor e carinho!<br></br>
                                Temos a missão de transformar a realidade de animais desamparados em Rio Pardo de Minas – MG.
                                Defendemos que os animais merecem respeito, amor, cuiade e dignidade, repudiamos toda e qualquer forma de violência ou crueldade.
                                Para aumentar nossa abrangência, estamos sempre em busca de pessoas e empresas que queiram fazer a diferença no mundo e que simpatizem com a causa animal.
                                Acreditamos que unindo forças com voluntários e parceiros, construiremos um grande movimento do bem, capaz de transformar esse planeta num lugar melhor e
                                mais justo para que todas as formas de vida possam viver em harmonia.
                            </p>
                        </div>
                    </div> 
                </div>
               
                
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="custom.js"></script>
            </main>
        </>
    )
}

export default Sobre;