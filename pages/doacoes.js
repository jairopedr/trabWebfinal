import Head from 'next/head';

function Doacao() {
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

            <main className="container">
                <div className="p-1 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-1">
                        <h1 className="display-5 fw-bold">Por que doar? </h1>
                        <div className="text-center">
                            <img src="/animais.png" className="rounded" alt="..." width="150" height="150" /><br></br>
                        </div>
                        <p className="lead12">Por meio de sua doação você pode contribuir com o bem estar dos animais e evitar que possam passar por necessidades e ajudar também para salvar a vida deles em situações mais críticas.
                        Vamos agir com empatia? Você pode estar doando tanto dinheiro ou mesmo a ração para cachorros e gatos.</p>
                        <p className="lead">Qualquer dúvida é só entrar em contato conosco!</p><br></br>
                        <h1 className="display-5 fw-bold">Formas de doação </h1>
                        
                        <div class="container">
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                
                                    <div className="iconemail">
                                    <img src="/conta.jpg" className="conta" alt="ícone do Banco do Brasil" width="75" height="75" />
                                        <br></br><p className="lead">Banco do Brasil<br></br><b>Agência: </b>1334-X<br></br><b>Conta: </b>14679-X<b><br></br> ONG O GIRASSOL </b></p>
                                    </div>
                               
                                
                                    <div className="iconeinstagram">
                                    <img src="/pix.png" className="pix" alt="ícone de Pix" width="85" height="95" />
                                        <br></br><p className="lead">salvamentosriopas@yahoo.com</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>
        </>
    )
}

export default Doacao;