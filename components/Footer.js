import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'
//import styles from '../../styles/Footer.module.css'

export default function Footer(){
    return (
        <footer className="rodape">
            <div class="container-fluid py-1 ">
                <div class="row ">
                    <div class="col">
                        <a href="https://pt-br.facebook.com/people/Salvamentos-RioPas/100026420237286/" className="nav-link p-1 text-white "><i className="fa-brands fa-facebook "></i> Salvamentos RioPas</a>&nbsp;
                    </div>         
                    <div class="col">
                        <a href="https://www.youtube.com/channel/UCcR_PByPLxaXeRwfdzXBbEg" className="nav-link p-1 text-white"><i className="fa-brands fa-youtube"></i> Projeto Salvamentos Riopas</a>&nbsp;
                    </div>
                    <div class="col">
                        <a href="https://www.instagram.com/salvamentosriopas/" className="nav-link p-1 text-white"><i className="fa-brands fa-instagram"></i> salvamentosriopas</a>&nbsp;    
                    </div>
                    <div className="col">
                        <div className="logo">
                            <a href= "/"><img src="/logo.png" alt="logo" width="70px"/></a>
                        </div>
                    </div>
                </div>
                <div className="text-center ">
                    <span className="text-black">SOSRiopas</span> &copy; 2022
                </div>
            </div>
      </footer>  
    )
}


