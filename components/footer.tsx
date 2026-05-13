export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Nikhil Solanki. All rights reserved.</p>
        <p>
          {/* Built with{" "} */}
          <a 
            href="https://nextjs.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline underline-offset-4"
          >
            {/* Next.js */}
          </a>
        </p>
      </div>
    </footer>
  )
}
