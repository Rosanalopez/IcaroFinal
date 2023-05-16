import { Link , useNavigate } from "react-router-dom";
import { auth } from "../../firebase";



export function Home(props){
    const navigate = useNavigate();
   
    function salir(){
    navigate("/Login");
    return auth.signOut();
    
    }

    return(<div className="nav">
                <div>
                    <div>
                        <nav>
                            <li><a href="#"></a>Inicio</li>
                            <li><a href="#ProductList">Productos</a></li>
                            <li><a href="#Login">Logueate</a></li>
                        </nav>
                            
                        
                    </div>
                </div>
                 <h2>{props.name?`Bienvenido - ${props.name}`:"Iniciar sesión"}</h2>
                 <button onClick={salir}>Salir</button>
            </div>
  );
};


