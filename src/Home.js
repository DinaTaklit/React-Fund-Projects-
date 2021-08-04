import {Link} from 'react-router-dom'
import projects from './data'

export default function Home() {
    return (
        <section className='section'>
        <h2 className='section-title'>
            React Fund Projects
        </h2>
        <div className='projects-center'>
            {/* list of projects*/}
            {projects.map( (project, index) => {
                const {image, title, link } = project
                return (
                    <Link to={link}>
                        <article className='project' key={index}>
                            <div className='img-container'>
                                <img src={image} alt={title} />
                            </div>
                            <div className='project-footer'>
                                <h4>{title}</h4>
                            </div>
                        </article>
                    </Link>
                )
            })}
        </div>
      </section>

    )
}
