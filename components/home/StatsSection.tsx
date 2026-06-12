'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 5000, suffix: '+', label: 'Rides Completed', icon: '🚗' },
  { value: 8, suffix: '+', label: 'Cities Covered', icon: '🏙️' },
  { value: 4.9, suffix: '★', label: 'Average Rating', icon: '⭐', decimal: true },
  { value: 24, suffix: '/7', label: 'Customer Support', icon: '🎧' },
]

function Counter({ value, suffix, decimal }: { value: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, decimal])

  return (
    <div ref={ref} className="font-outfit font-bold text-4xl sm:text-5xl gradient-gold">
      {decimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="absolute inset-0 rounded-3xl" style={{
            background: 'linear-gradient(135deg, rgba(91,33,182,0.05) 0%, transparent 50%, rgba(245,158,11,0.05) 100%)'
          }} />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <Counter value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
                <p className="text-slate-600 text-sm mt-1 font-inter">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
