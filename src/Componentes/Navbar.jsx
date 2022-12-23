import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light flex-cloumn" id="nav">
            <div className="container-fluid">
                <a className="navbar-brand">Jaqueline Lessa</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Barra de Navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <li className="nav-link">Home</li>
                        </li>
                        <li className="nav-item">
                            <li className="nav-link">Projetos</li>
                        </li>
                        <li className="nav-item">
                            <li className="nav-link">Contato</li>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}