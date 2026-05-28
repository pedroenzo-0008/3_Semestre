import './mycomponent.css';
const mycomponent =(props)=>{
    return(
        <div className="container">
         {props.children}
        </div>
    );
}

export default mycomponent;