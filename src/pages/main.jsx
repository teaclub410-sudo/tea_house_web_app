import Home from './home';
import About from './about';
import Contact from './contact';
import Menu from './menu';

function Main(props){
    return(
        <>

        
            {/* HOME */}
            {props.tab === "home" && (
                <Home title={props.title} setTab={props.setTab}></Home>
            )}

            {/* ABOUT */}
            {props.tab === "about" && (
                <About></About>
            )}

            {/* CONTACT */}
            {props.tab === "contact" && (
                <Contact phone={props.phone} email={props.email} instagram={props.instagram} threads={props.threads} whatsapp={props.whatsapp} ></Contact>
            )}
            
            {/* MENU */}
            {props.tab === "menu" && (
                <Menu></Menu>
            )}
        </>
    );
}

export default Main;