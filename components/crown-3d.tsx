'use client'

import dynamic from 'next/dynamic'

const CrownScene = dynamic(
  () => import('@/components/crown-scene').then((m) => m.CrownScene),
  {
    ssr: false,
    loading: () => <CrownFallback />,
  },
)

function CrownFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="animate-floaty">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.webp"
          alt=""
          className="h-44 w-44 object-contain drop-shadow-[0_0_40px_rgba(212,175,90,0.5)]"
        />
      </div>
    </div>
  )
}

export function Crown3D() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <CrownScene />
    </div>
  )
}
