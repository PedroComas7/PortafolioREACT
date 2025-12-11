export function Works(){
    return(
        <section className="seccion works" id="works">

            <h2 className="h2">Trabajos</h2>
            <p>Aqui te presento mis trabajos realizados a lo largo de mi carrera</p>

            <div className="grid">
                <article className="article">
                    <a className="a" href="#" title="Trabajo1">
                        <figure className="figure">
                            <img src="/img/chica.jpg" alt="Imagen" className="img" loading="lazy"/>
                        </figure>
                        <h4 className="h4">Trabajo 1</h4>
                    </a>
                </article>
                <article className="article">
                    <a className="a" href="#" title="Trabajo1">
                        <figure className="figure">
                            <img src="/img/chico.jpg" alt="Imagen" className="img" loading="lazy"/>
                        </figure>
                        <h4 className="h4">Trabajo 2</h4>
                    </a>
                </article>
            </div>
        </section>
    )
}    