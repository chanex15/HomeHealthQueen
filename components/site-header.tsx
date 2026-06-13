'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      {/* Announcement bar */}
      <div className="relative z-50 bg-ink text-center text-[11px] uppercase tracking-[0.32em] text-gold/90 py-2">
        {SITE.edition} · {SITE.dates}
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-500',
          scrolled ? 'glass border-b border-border py-2' : 'bg-transparent py-4',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5">
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            <Image
              src="/logo.webp"
              alt="The One Woman Show 2026 crest"
              width={48}
              height={48}
              className="h-11 w-11 object-contain drop-shadow-[0_0_12px_rgba(212,175,90,0.35)]"
              priority
            />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-base text-champagne">
                The One Woman Show
              </span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-gold/80">
                Home Health Queen
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'group relative text-[13px] uppercase tracking-[0.14em] transition-colors',
                  pathname === l.href
                    ? 'text-gold'
                    : 'text-foreground/80 hover:text-gold',
                )}
              >
                {l.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300',
                    pathname === l.href ? 'w-full' : 'w-0 group-hover:w-full',
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/register"
              className="hidden rounded-full bg-primary px-6 py-2.5 text-[13px] font-medium uppercase tracking-[0.14em] text-primary-foreground transition-all hover:shadow-[0_0_24px_rgba(212,175,90,0.5)] sm:inline-block"
            >
              Register
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-gold lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 transition-all duration-500 lg:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <div
          className="absolute inset-0 bg-ink/80 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <nav
          className={cn(
            'absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-1 border-l border-border bg-card px-6 pt-28 pb-10 transition-transform duration-500',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
          aria-label="Mobile"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'border-b border-border/40 py-4 font-display text-2xl transition-colors',
                pathname === l.href ? 'text-gold' : 'text-foreground hover:text-gold',
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/register"
            className="mt-6 rounded-full bg-primary py-3.5 text-center text-sm font-medium uppercase tracking-[0.16em] text-primary-foreground"
          >
            Register Now
          </Link>
        </nav>
      </div>
    </>
  )
}
