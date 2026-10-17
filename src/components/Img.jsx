import { useState, useEffect } from 'react'

export default function Img({ src, alt = '', label = 'Photo Placeholder', height = 260, position = 'center' }) {
    const [failed, setFailed] = useState(false)

    useEffect(() => {
        setFailed(false)
    }, [src])

    if (src && !failed) {
        return (
            <img
                className="img"
                src={src}
                alt={alt}
                loading="lazy"
                style={{ height, objectPosition: position }}
                onError={() => setFailed(true)}
            />
        )
    }

    return (
        <div className="img ph" style={{ height, background: 'linear-gradient(135deg, var(--hero-1), var(--hero-2))' }}>
            <span>{label}</span>
        </div>
    )
}