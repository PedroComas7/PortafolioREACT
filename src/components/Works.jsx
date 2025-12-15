import { useState, useEffect } from 'react'

export function Works(){
    const [works, setWorks] = useState([])

    useEffect(() => {
        fetch('/src/data/works.json')
            .then(response => response.json())
            .then(data => setWorks(data))
            .catch(error => console.error('Error al cargar los trabajos:', error))
    }, [])

    return(
        <section className="seccion works" id="works">

            <h2 className="h2">Trabajos</h2>
            <p>Aqui te presento mis trabajos realizados a lo largo de mi carrera</p>

            <div className="grid">
                {works.map(work => (
                    <article className="article" key={work.id}>
                        <a className="a" href={work.link} title={work.title}>
                            <figure className="figure">
                                <img src={work.image} alt={work.alt} className="img" loading="lazy"/>
                            </figure>
                            <h4 className="h4">{work.title}</h4>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    )
}    