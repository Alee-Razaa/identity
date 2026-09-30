'use client'

import { useRef, type PointerEvent, type ReactNode } from 'react'

// Pointer-driven 3D tilt. Writes CSS variables only, never React state.
export default function Tilt({
  children,
  className = '',
  max = 9,
}: {
  children: ReactNode
  className?: string
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const frame = useRef(0)

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || e.pointerType !== 'mouse') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--ry', `${((px - 0.5) * 2 * max).toFixed(2)}deg`)
      el.style.setProperty('--rx', `${((0.5 - py) * 2 * max).toFixed(2)}deg`)
      el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
      el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
      el.dataset.active = 'true'
    })
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    cancelAnimationFrame(frame.current)
    for (const v of ['--rx', '--ry', '--mx', '--my']) el.style.removeProperty(v)
    delete el.dataset.active
  }

  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="tilt__inner">{children}</div>
    </div>
  )
}
