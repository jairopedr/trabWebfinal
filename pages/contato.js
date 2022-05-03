import Head from 'next/head';
//import Footer from '../components/Footer';



function Contato() {
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
                        <h4 className="display-4">Meios de entrar em contato conosco:</h4>
                        <h6 className="display-6">Se desejar tirar alguma dúvida estaremos de prontidão em atendê-lo(a) por meio de um dos canais abaixo!</h6>
                    </div>
                </div>
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
                        

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="custom.js"></script>
            </main>
        </>
    );
}

export default Contato;