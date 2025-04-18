import React from "react";
import PropTypes from "prop-types";

export function Button({ variant = "default", size = "default", children, className = "", ...props }) {
    const getVariantClasses = () => {
        switch (variant) {
            case "secondary":
                return "bg-white text-black hover:bg-gray-100";
            case "outline":
                return "border border-white/10 bg-white/5 hover:bg-white/10 text-white";
            default:
                return "bg-black text-white hover:bg-gray-900";
        }
    };

    const getSizeClasses = () => {
        switch (size) {
            case "sm":
                return "px-3 py-1.5 text-sm";
            case "lg":
                return "px-6 py-3 text-lg";
            default:
                return "px-4 py-2";
        }
    };

    return (
        <button
            className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 ${getVariantClasses()} ${getSizeClasses()} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

// ✅ Optional: Define PropTypes for validation
Button.propTypes = {
    variant: PropTypes.oneOf(["default", "secondary", "outline"]),
    size: PropTypes.oneOf(["default", "sm", "lg"]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
