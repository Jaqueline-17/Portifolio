import Navbar from "../Componentes/Navbar"
import "./Home.css"

export default function Home() {
    return (
        <div>
            <Navbar />
            <div id="paralax">
                <div className="apresentacao">Olá, sou Jaqueline Lessa Dev Júnior Fullstack, <br />
                    conheça minhas principias skills e projetos!</div>

            </div>

            <div className="container">
                <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                        <img src="..." alt="..."/>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        This is some content from a media component. You can replace this with any content and adjust it as needed.
                    </div>
                </div>
            </div>

        </div>
    );
}