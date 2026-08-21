"use client";

import { useEffect, useState } from "react";

export default function Counter({ end, suffix = "", duration = 1500 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 30);

        const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 30);

        return () => clearInterval(timer);
    }, [end, duration]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}