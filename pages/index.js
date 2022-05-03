import Head from 'next/head';
import Footer from '../components/Footer';
//import Menu from '../components/Menu';
// var myCarousel = document.querySelector('#myCarousel');

function Home( { data } ) {
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
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                <title>SalvamentoRiopas</title>
            </Head>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images-animais/dog.jpg" className="d-block w-100" alt="..." width="500px" height="600px"/>
                    </div> 
                    <div className="carousel-item">
                        <img src="/images-animais/compartilha.jpg" className="d-block w-100" alt="..." width="500px" height="600px"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/images-animais/image3.jpg" className="d-block w-100" alt="..." width="500px" height="600px"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <main className="container p-3">
                <div className="jumbotron">
                    <h1 className="display3">Projeto Salvamento Riopas🐕</h1>
                    <br></br>
                    <p className="lead">Este é o espaço virtual do Projeto Salvamento Riopas, pelo qual você poderá conhecer um pouco sobre ele e sobre  o trabalho que realizamos com os animais de rua de Rio Pardo de Minas. Por aqui, nosso objetivo é conectar as pessoas que possuem compaixão com esses indefesos, e tentar 
                    repassar a importância e o amor que devemos ter com eles. Aqui você irá conhecer alguns dos vários animais que estão disponiveis para adoção, conhecer alguma das nossas tarefas e como você pode estar ajudando, seja com doações, se voluntariando e até mesmo adotando um desses amiguinhos tão dóceis!</p>
                    <hr className="my-4"/>
                </div>  
                <h3> Conheça um pouco do nosso dia a dia no abrigo!</h3> 
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className='col'>
                        <div class="ratio ratio-4x3">
                            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100026420237286%2Fvideos%2F766043634286304%2F&show_text=false&width=261&t=0" width="261" height="476" className="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>   
                        </div>
                    </div>
                    <div className='col'>
                        <div class="ratio ratio-4x3">
                            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100026420237286%2Fvideos%2F793496851540982%2F&show_text=false&width=261&t=0" width="261" height="476" ClassName="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="ratio ratio-4x3">
                            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100026420237286%2Fvideos%2F999190387567378%2F&show_text=false&width=261&t=0" width="261" height="476" className="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                        </div>
                    </div>
                </div>
                <hr className="my-4"/>
                <h3> Dicas importantes que ajudam os nossos amiguinhos!😻</h3> 
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className='col'>
                        <img src="/images-animais/Dica1.jpg" className="card-img-top" alt="imagem" width="60" height="300"/>
                        <button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <b>🐶 Dica 1</b>
                        </button>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title" id="exampleModalLabel">Alimente-os!🦴</h3>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Na frente de sua casa ou prédio, deixe um potinho de água e ração para os animais que vivem na região</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <img src="/images-animais/Dica2.jpg" className="card-img-top" alt="imagem de uma gata" width="60" height="300"/>
                        <button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <b>🐶 Dica 2</b>
                        </button> 
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title" id="exampleModalLabel">Alimente-os!🦴</h3>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                <div className="modal-body">
                                    <p>Leve consigo uma sacola dentro de sua bolsa ou mochila com ração, pois se acaso no seu dia a dia você se encontrar com um bichinho de rua você poderá oferecer comida ou água ele, aliviando sua fome. Recomendamos que sempre carregue e utilize uma ração para gatos para que assim, tanto os gatinhos quanto os cachorrinhos poderão comer sem problemas.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col'>
                        <img src="/images-animais/Dica3.jpg" className="card-img-top" alt="imagem de uma gata" width="60" height="300"/>
                        <button type="button" className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            <b>🐶 Dica 3</b>
                        </button>
                    
                        <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title" id="exampleModalLabel">Se informe!⚠️</h3>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                <div className="modal-body">
                                    <p>Ao avistar um bichinho na rua, que aparenta ter dono, converse com as pessoas próximas e procure se informar se aquele animal está por ali há muito tempo, ou se eles saberiam dizer de onde ele veio, se teria alguém da região procurando por algum bichinho. E ainda que tudo isso não bastar , tire fotos e compartilhe colocando a localização, pois caso ele relamente tenha dono o mesmo pode acabar visualizando a sua postagem e ir ao encontro do animal.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4"/>
                <h3> Não compre. Adote!🐕🐈</h3>         
                    {/* <a href="/adocao" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Entrar em contato</a> */}
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className='col'>
                        <div className='text-2'>
                            <div class="ratio ratio-4x3">
                                <iframe src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2F100026420237286%2Fvideos%2F798324841058183%2F&show_text=false&width=560&t=0" width="560" height="315" className="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='text-2 '>
                            <div class="ratio ratio-4x3">
                                <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100026420237286%2Fvideos%2F793496891540978%2F&show_text=false&width=261&t=0" width="261" height="476" className="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                            </div>
                        </div> 
                    </div>
                </div>
                

                <hr className="my-4"/>
                <div className="container-fluid py-1">
                        <h5 className="text-center ">🐕❤🐈S.O.S ANIMAIS! "Quatro patas, você também é responsável!"</h5>
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

export default Home;
