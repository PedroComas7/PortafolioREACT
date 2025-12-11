export function Contact(){
    return(
        <section className="seccion contact" id="contact">
            <div className="content">

                <h1 className="logo">Contacto</h1>
        
                <div className="contact-wrapper animated bounceInUp">
                    <div className="contact-form">
                        <h3>Contacto</h3>
                        <form href="contact">
                            <p>
                                <label>Nombre</label>
                                <input type="text" name="fullname"/>
                            </p>
                            <p>
                                <label>Apellido</label>
                                <input type="text" name="apellido"/>
                            </p>
                            <p>
                                <label>Email</label>
                                <input type="email" name="email"/>
                            </p>
                            <p>
                                <label>Numero</label>
                                <input type="tel" name="phone"/>
                            </p>
                            <p className="block">
                                <label>Mensaje</label> 
                                <textarea name="message"></textarea>
                            </p>
                            <p className="block">
                                <button>
                                    Enviar
                                </button>
                            </p>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h4>Mas información</h4>
                        <ul>
                            <li><i className="fas fa-map-marker-alt"></i> Pere Antoni</li>
                            <li><i className="fas fa-envelope-open-text"></i> pedro.comas7@gmail.com</li>
                        </ul>
                        <p>Atraves del correo electronico puedes contactar conmigo en caso de tener alguna duda o para pedir información, recordar que tambien puedes hacerlo a traves del formulario que tiene al lado.</p>
                    </div>
                </div>
        
            </div>
        </section>
    )
}