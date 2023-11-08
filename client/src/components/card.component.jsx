export default function Card(props) {
    return (
        <div class={ props.class } style={{ boxShadow: "0px 30px 40px -20px blue",  backgroundColor: '#f9fbe7'}}>
            <h2>{ props.title }</h2>
            <p>{ props.body }</p>
            <img src={ props.img } alt=""/>       
        </div>
    );
}