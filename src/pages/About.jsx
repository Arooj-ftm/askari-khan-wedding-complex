import { Link } from 'react-router-dom'
import { Landmark, Crown, HeartHandshake, Sparkles, Flower2, Car } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Img from '../components/Img'
import { stats } from '../data/siteData'

const highlights = [
    { icon: Landmark, title: 'Two Grand Halls', text: 'Hall 1 seats up to 600 guests and Hall 2 up to 350, each elegantly designed.' },
    { icon: Flower2, title: 'Stunning Stage Decor', text: 'Floral stages and runways, from classic to royal, styled for your theme.' },
    { icon: Car, title: 'Ample Parking', text: 'Space for up to 1000 cars, so your guests arrive without any stress.' },
]

const values = [
    { icon: Crown, title: 'Royal Experience', text: 'Every guest is welcomed with warmth and treated like royalty.' },
    { icon: HeartHandshake, title: 'Personal Attention', text: 'Our team works closely with you to bring your vision to life.' },
    { icon: Sparkles, title: 'Attention to Detail', text: 'From décor to dining, no detail is left to chance.' },
]

export default function About() {
    return (
        <>
            <PageHeader
                title="About Us"
                subtitle="A venue where tradition meets modern luxury, made for the most important day of your life."
            />

            <section className="section">
                <div className="container two-col">
                    <Img src="/images/about.png" alt="Askari Khan Wedding Complex hall" height={440} position="center" />                    <div>
                        <span className="eyebrow-left">Our Story</span>
                        <h2 className="big-title">Crafting Celebrations in Rawalpindi</h2>
                        <hr className="divider left" />
                        <p className="lead">
                            Askari Khan Wedding Complex was created with one goal: to give every
                            family a wedding venue worthy of their dreams. From intimate
                            ceremonies to grand celebrations, we make every event
                            unforgettable.
                        </p>
                        <p className="lead">
                            Our dedicated team handles everything from catering and décor to
                            lighting and guest service, so you can simply enjoy your special
                            day with your loved ones.
                        </p>
                        <Link to="/contact" className="btn">Book a Visit</Link>
                    </div>
                </div>
            </section>

            <section className="stats">
                <div className="container stats-grid">
                    {stats.map((s) => (
                        <div key={s.label}>
                            <b>{s.value}</b>
                            <span>{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">The Venue</span>
                        <h2>What Makes Us Special</h2>
                        <hr className="divider" />
                    </div>
                    <div className="grid">
                        {highlights.map((h) => (
                            <div className="card center-card" key={h.title}>
                                <div className="icon-wrap"><h.icon size={28} strokeWidth={1.5} /></div>
                                <h3>{h.title}</h3>
                                <p>{h.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section alt">
                <div className="container">
                    <div className="section-head">
                        <span className="eyebrow">Our Promise</span>
                        <h2>The Askari Khan Standard</h2>
                        <hr className="divider" />
                    </div>
                    <div className="grid">
                        {values.map((v) => (
                            <div className="card center-card" key={v.title}>
                                <div className="icon-wrap"><v.icon size={28} strokeWidth={1.5} /></div>
                                <h3>{v.title}</h3>
                                <p>{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}