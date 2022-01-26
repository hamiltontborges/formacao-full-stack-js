import style from './Content.module.css'


const Content = () => {
    return (
        <div className={style.content}>
            <h2>Título</h2>
            <p>
            Maecenas at augue molestie, placerat libero nec, sollicitudin nisl. Aliquam blandit sed ante quis luctus. Vivamus eget diam nec justo ullamcorper tincidunt. Aliquam at euismod odio, non ornare enim. Sed enim velit, porta in justo sed, tincidunt mattis eros. Nunc nec consequat ligula. Nullam at turpis a enim fermentum semper.
            </p>
            <button className={style.btn}>Outro botão teste</button>
        </div>
    )
}

export default Content
