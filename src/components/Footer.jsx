import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div>
                    <div className="footer-logo">Askari Khan</div>
                    <p className="footer-sub">WEDDING COMPLEX</p>
                    <p className="footer-text">
                        Where every wedding becomes a royal celebration. A magnificent
                        venue, exquisite cuisine and unmatched hospitality.
                    </p>
                </div>

                <div>
                    <h4>Quick Links</h4>
                    <Link to="/about">About Us</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/packages">Packages</Link>
                    <Link to="/gallery">Gallery</Link>
                </div>

                <div>
                    <h4>Contact</h4>
                    <div className="contact-row"><MapPin size={16} /> Syedan Road, Dhoke, Rawalpindi</div>
                    <div className="contact-row"><Phone size={16} /> +92 300 9857985</div>
                    <div className="contact-row"><Clock size={16} /> Daily (timings to be confirmed)</div>
                </div>
            </div>

            <div className="footer-bottom">
                © 2026 Askari Khan Wedding Complex. All rights reserved.
            </div>
        </footer>
    )
}