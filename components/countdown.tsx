'use client'

import { useEffect, useState } from 'react'

const TARGET = new Date('2027-06-10T09:00:00')

function diff() {
  const ms = Math.max(0, TARGET.getTime() - Date.now())
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  }
}

export function Countdown() {
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null)

  useEffect(() => {
    setT(diff())
    const id = setInterval(() => setT(diff()), 1000)
    return () => clearInterval(id)
  }, [])

  const units: { label: string; value: number }[] = t
    ? [
        { label: 'Days', value: t.days },
        { label: 'Hours', value: t.hours },
        { label: 'Minutes', value: t.minutes },
        { label: 'Seconds', value: t.seconds },
      ]
    : [
        { label: 'Days', value: 0 },
        { label: 'Hours', value: 0 },
        { label: 'Minutes', value: 0 },
        { label: 'Seconds', value: 0 },
      ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
      {units.map((u) => (
        <div
          key={u.label}
          className="flex min-w-[72px] flex-col items-center rounded-2xl border border-border bg-card/50 px-4 py-3 backdrop-blur sm:min-w-[88px]"
        >
          <span className="font-display text-3xl text-champagne tabular-nums sm:text-4xl">
            {String(u.value).padStart(2, '0')}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.24em] text-gold/80">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  )
}
