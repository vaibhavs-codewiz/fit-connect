const ScrollingText = () => {
    return (
        <div
            className="w-full bg-[#d6fd51] py-2 overflow-hidden whitespace-nowrap"
            style={{
                display: "flex",
                gap: "50px", // Ensures spacing between repeated text
            }}
        >
            <div
                style={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    animation: "scroll 10s linear infinite",
                }}
            >
                Drawing up an individual training program ... | Personalized fitness routines | Achieve your goals with expert guidance | Track your progress and stay motivated!
            </div>

            <style>
                {`
          @keyframes scroll {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
            </style>
        </div>
    )
}

export default ScrollingText