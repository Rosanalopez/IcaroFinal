import { Link , useNavigate } from "react-router-dom";
import { auth } from "../../firebase";


export function Home(props){
    const navigate = useNavigate();
   
    function salir(){
    navigate("/Login");
    return auth.signOut();
    
    
    }


    return(<div>
                <div>
                    <div>
                
                        <h1><Link to="/login">Login</Link></h1>
            
                         <br />
            
                        <h1><Link to="/signup">Registrar</Link></h1>

                        <br />

                        <h1><Link to="/onAddProduct">Carts</Link></h1>
                        

           
                        
                    </div>
                </div>
                 <h2>{props.name?`Bienvenido - ${props.name}`:"Iniciar sesión"}</h2>
                 <button onClick={salir}>Salir</button>
            </div>
  );
};

