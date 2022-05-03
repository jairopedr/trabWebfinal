import Head from 'next/head';
import Footer from '../components/Footer';

//import Menu from '../components/Menu';

//import img from '../assets/my-image.png'

function Adocao() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre ..." />
                <meta name="author" content="Jairo, Luana e Mateus - SalvamentoRiopas" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
                <title>SalvamentoRiopas</title>
            </Head>
            <main className="container p-5">
                <div className="jumbotron jumbotron-fluid">
                    <h3 className="display-4">Por que adotar?</h3>
                    <p className="lead">Adotar um animal é uma grande responsabilidade, e não é só porque você precisará cuidar dele em casa. A adoção é capaz de salvar a vida de um bichinho que poderia estar nas ruas, abandonado, morrendo de fome e possivelmente sofrendo de maus tratos.</p>
                </div> 
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="/images-animais/gatinha1.jpg" className="card-img-top" alt="imagem de uma gata" width="20" height="300"/>
                            <div className="card-body">
                                <h5 className="card-title"> <b>Nome:</b> Ceci </h5>
                                <h5 className="card-title"><b>DISPONÍVEL PARA ADOÇÃO!</b></h5>
                                <a className="btn btn-primary btn-lg" href="http://localhost:3001/contato" role="button">Entre em Contato</a>
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images-animais/filhote9.webp" className="card-img-top" alt="imagem de uma gata" width="20" height="300"/>
                            <div className="card-body">
                                <h5 className="card-title"> <b>Nome:</b> Jack</h5>
                                <h5 className="card-title"><b>DISPONÍVEL PARA ADOÇÃO!</b></h5>
                                <a className="btn btn-primary btn-lg" href="http://localhost:3001/contato" role="button">Entre em Contato</a>
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images-animais/macho(1).jpg" className="card-img-top" alt="Imagem de um cachorro preto" width="20" height="300"/>
                            <div className="card-body">
                                <h5 className="card-title"> <b>Nome:</b> Layla</h5>
                                <h5 className="card-title"><b>DISPONÍVEL PARA ADOÇÃO!</b></h5>
                                <a className="btn btn-primary btn-lg" href="http://localhost:3001/contato" role="button">Entre em Contato</a>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images-animais/filhote.webp" className="card-img-top" alt="filhote de cachorro" width="20" height="300"/>
                            <div className="card-body">
                                <h5 className="card-title"> <b>Nome:</b> Nick</h5>
                                <h5 className="card-title"><b>DISPONÍVEL PARA ADOÇÃO!</b></h5>
                                <a className="btn btn-primary btn-lg" href="http://localhost:3001/contato" role="button">Entre em Contato</a>
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images-animais/filhote4.webp" className="card-img-top" alt="filhote de cachorro" width="20" height="300"/>
                            <div className="card-body">
                                <h5 className="card-title"> <b>Nome:</b> Tadeu</h5>
                                <h5 className="card-title"><b>DISPONÍVEL PARA ADOÇÃO!</b></h5>
                                <a className="btn btn-primary btn-lg" href="http://localhost:3001/contato" role="button">Entre em Contato</a>
                                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images-animais/filhote5.webp" className="card-img-top" alt="..." width="20" height="300"/>
                            <div className="card-body">
                                <h5 className="card-title"> <b>Nome:</b> Oliver</h5>
                                <h5 className="card-title"><b>DISPONÍVEL PARA ADOÇÃO!</b></h5>
                                <a className="btn btn-primary btn-lg" href="http://localhost:3001/contato" role="button">Entre em Contato</a>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images-animais/filhote6.webp" className="card-img-top" alt="..." width="20" height="300"/>
                            <div className="card-body">
                                <h5 className="card-title"> <b>Nome:</b> Simon</h5>
                                <h5 className="card-title"><b>DISPONÍVEL PARA ADOÇÃO!</b></h5>
                                <a className="btn btn-primary btn-lg" href="http://localhost:3001/contato" role="button">Entre em Contato</a>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images-animais/filhote7.webp" className="card-img-top" alt="..." width="20" height="300"/>
                            <div className="card-body">
                                <h5 className="card-title"> <b>Nome:</b> Max</h5>
                                <h5 className="card-title"><b>DISPONÍVEL PARA ADOÇÃO!</b></h5>
                                <a className="btn btn-primary btn-lg" href="http://localhost:3001/contato" role="button">Entre em Contato</a>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images-animais/filhote8.webp" className="card-img-top" alt="..." width="20" height="300"/>
                            <div className="card-body">
                                <h5 className="card-title"> <b>Nome:</b> Bob</h5>
                                <h5 className="card-title"><b>DISPONÍVEL PARA ADOÇÃO!</b></h5>
                                <a className="btn btn-primary btn-lg" href="http://localhost:3001/contato" role="button">Entre em Contato</a>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images-animais/gatinha2.jpg" className="card-img-top" alt="..." width="20" height="300"/>
                            <div className="card-body">
                                <h5 className="card-title"> <b>Nome:</b> Layla</h5>
                                <h5 className="card-title"><b>DISPONÍVEL PARA ADOÇÃO!</b></h5>
                                <a className="btn btn-primary btn-lg" href="http://localhost:3001/contato" role="button">Entre em Contato</a>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
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

export default Adocao;