function Contact(){
    return(<div className="container">
        <h1>Contact</h1>
        <button onClick={()=>navigate("info")}>Information</button>
        <button onClick={()=> navigate("Form")}>Form</button>
    </div>)
}

export default Contact