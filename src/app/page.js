"use client";

import { useState } from 'react';

export default function Title() { // redirect button to the info presentation
    const [isAnimating, setIsAnimating] = useState(false);
    const [endAnimating, setEndAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setEndAnimating(true)
            window.location.href = "/Info";
        }, 900);
    };

    return (
        <div className="flex sm:items-center justify-center min-h-screen">
            <img
                src="/logo_web.webp"
                className="invert cursor-pointer transition hover:scale-110"
                alt="Ve10tigium"
                onClick={handleClick}
                style={{
                    animation: isAnimating ? 'ping 1s ease-in-out' : 'none',
                    opacity: endAnimating ? '0' : 'initial'
                }}
            />
        </div>
    );
}
