export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-ink px-6 py-8 text-paper md:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-paper/45 md:flex-row md:items-center md:justify-between">
        <p className="font-mono uppercase tracking-[0.22em]">Adhika Fadhil</p>
        <p>© {year} · Portofolio</p>
      </div>
    </footer>
  )
}
