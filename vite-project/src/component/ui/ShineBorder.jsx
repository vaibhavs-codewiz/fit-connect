"use client";

import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export function ShineBorder({ children, className = "", borderClassName = "", duration = 2000 }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            container.style.setProperty("--mouse-x", `${x * 100}%`);
            container.style.setProperty("--mouse-y", `${y * 100}%`);
        };

        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className={`group relative ${className}`}
            style={{ "--shine-duration": `${duration}ms` }}
        >
            <div className={`absolute inset-0 rounded-xl ${borderClassName}`}>
                <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                        background: `radial-gradient(
              600px circle at var(--mouse-x) var(--mouse-y),
              rgba(255, 255, 255, 0.1),
              transparent 40%
            )`,
                    }}
                />
            </div>
            {children}
        </div>
    );
}

// ✅ Optional: Define PropTypes for validation
ShineBorder.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    borderClassName: PropTypes.string,
    duration: PropTypes.number,
};
