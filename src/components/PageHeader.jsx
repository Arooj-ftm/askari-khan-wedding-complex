export default function PageHeader({ title, subtitle }) {
    return (
        <section className="page-header">
            <div className="container fade-up">
                <span className="hero-tag">Askari Khan Wedding Complex</span>
                <h1>{title}</h1>
                <div className="hero-orn">✦ &nbsp; ✦ &nbsp; ✦</div>
                {subtitle && <p>{subtitle}</p>}
            </div>
        </section>
    )
}