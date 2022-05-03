import Footer from './Footer'
import Head from 'next/head'

export default function Layout ({children}) {
    return (
        <>
        <Head>
        <div className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href= "/"><img src="/logo.png" alt="logo" width="70px"/></a>
                </div>
                <ul className="menu">
                    <li><a href="/" className="menu-btn">Home</a></li>
                    <li><a href="/adocao" className="menu-btn">Adoção</a></li>
                    <li><a href="/voluntario" className="menu-btn">Voluntários</a></li>
                    <li><a href="/doacoes" className="menu-btn">Doações</a></li>
                    <li><a href="/sobre" className="menu-btn">Sobre</a></li>
                </ul>
                <div className="menu-btn">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
        </Head>
        
        <main>{children}</main>
        <Footer />
        </>
    )
}
