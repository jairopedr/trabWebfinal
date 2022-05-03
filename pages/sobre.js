import Head from 'next/head';
//import Menu from '../components/Menu';
import Footer from '../components/Footer';
//import { Container, Row, Card, Button } from 'react-bootstrap'

function Sobre({ data }) {
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
                <div className="jumbotron jumbotron-fluid text-center">
                    <h4 className="text"> Sobre o Abrigo </h4>  
                </div>
                <div class="row row-cols-1 row-cols-md-2 g-4 p-1">
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
                <hr className="my-4"/>
                <div id="tips"></div>
                <div className="container">
                        <h4 className="display-4">Meios de entrar em contato conosco:</h4>
                        <h6 className="display-6">Se desejar tirar alguma dúvida estaremos de prontidão em atendê-lo(a) por meio de um dos canais abaixo!</h6>
                    <div class="row row-cols-1 row-cols-md-3 g-4 m-1">
                        <div class="col ">
                            <div className="iconetelefone">
                                <img src="/telefone.webp" className="email" alt="..." width="90" height="90" />
                                <p className="lead">(38)998615038</p>
                                <p className="lead">(38)991367884</p>
                                <p className="lead">(38)991506021</p>
                            </div>
                        </div>
                        <div class="col">
                            <div className="iconeinstagram">
                                <img src="/instagram.png" className="email" alt="..." width="90" height="90" />
                                <p className="lead">@salvamentosriopas</p>
                            </div>
                        </div>
                        <div class="col">
                            <div className="iconemail">
                                <img src="/email.webp" className="email" alt="..." width="80" height="80" /><br></br>
                                <p>salvamentosriopas1@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="custom.js"></script>
            </main>
        </>
    )
}

//export async function getServerSideProps(){
//    const response = await fetch(`http://localhost:8080/`);
//    const data= await response.json();
//    // console.log(data);//conferir se há os dados
//
//    return { props: { data } };
//}


export default Sobre;
