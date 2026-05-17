"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { ArrowUpRight, Sparkles, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResearchCardProps {
  title: string
  description: string
  date: string
  link: string
}

export function ResearchCard({ title, description, date, link }: ResearchCardProps) {
  const [summary, setSummary] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showSummary, setShowSummary] = useState(false)

  const handleSummarize = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (summary) {
      setShowSummary(true)
      return
    }

    setIsLoading(true)
    setShowSummary(true)
    setSummary("")

    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      })

      if (!response.ok) throw new Error("Failed to summarize")

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) throw new Error("No reader available")

      let fullText = ""
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        
        const chunk = decoder.decode(value, { stream: true })
        fullText += chunk
        setSummary(fullText)
      }
    } catch (error) {
      console.error("Error summarizing:", error)
      setSummary("Failed to generate summary. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }, [title, description, summary])

  const handleCloseSummary = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowSummary(false)
  }, [])

//   return (
//     <div className="group block">
//       <div className="flex items-start justify-between gap-4">
//         <div className="space-y-1.5 flex-1">
//           <div className="flex items-center gap-3">
//             <Link href={link} className="flex items-center gap-1 hover:text-accent transition-colors">
//               <h3 className="text-base font-medium">
//                 {title}
//               </h3>
//               <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
//             </Link>
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={handleSummarize}
//               disabled={isLoading}
//               className="h-7 px-2.5 text-xs text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
//             >
//               {isLoading ? (
//                 <Loader2 className="h-3.5 w-3.5 animate-spin" />
//               ) : (
//                 <>
//                   <Sparkles className="h-3.5 w-3.5 mr-1.5" />
//                   Summarize
//                 </>
//               )}
//             </Button>
//           </div>
//           <p className="text-muted-foreground text-sm leading-relaxed">
//             {description}
//           </p>
          
//           {showSummary && (
//             <div className="mt-3 p-3 rounded-lg bg-secondary/50 border border-border/50 animate-in fade-in slide-in-from-top-2 duration-300">
//               <div className="flex items-start justify-between gap-2">
//                 <div className="flex items-center gap-2 text-xs text-accent mb-2">
//                   <Sparkles className="h-3 w-3" />
//                   <span className="font-medium">AI Summary</span>
//                 </div>
//                 <button
//                   onClick={handleCloseSummary}
//                   className="text-muted-foreground hover:text-foreground transition-colors p-0.5"
//                 >
//                   <X className="h-3.5 w-3.5" />
//                 </button>
//               </div>
//               <p className="text-sm text-foreground/90 leading-relaxed">
//                 {summary || (
//                   <span className="text-muted-foreground italic">Generating summary...</span>
//                 )}
//               </p>
//             </div>
//           )}
//         </div>
//         <span className="text-sm text-muted-foreground shrink-0">
//           {date}
//         </span>
//       </div>
//     </div>
//   )
return (
  <div className="group block">
    <div className="flex items-start justify-between gap-4">
      <div className="space-y-1.5 flex-1 min-w-0">
        <div className="flex items-start justify-between gap-6">
          <Link
            href={link}
            className="flex items-center gap-1 hover:text-accent transition-colors min-w-0"
          >
            <h3 className="text-base font-medium">
              {title}
            </h3>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all shrink-0" />
          </Link>

          {/* <Button
            variant="ghost"
            size="sm"
            onClick={handleSummarize}
            disabled={isLoading}
            className="h-7 px-2.5 text-xs text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors shrink-0"
          >
            {isLoading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <>
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Summarize
              </>
            )}
          </Button> */}
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {showSummary && (
          <div className="mt-3 p-3 rounded-lg bg-secondary/50 border border-border/50 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-xs text-accent mb-2">
                <Sparkles className="h-3 w-3" />
                <span className="font-medium">AI Summary</span>
              </div>
              <button
                onClick={handleCloseSummary}
                className="text-muted-foreground hover:text-foreground transition-colors p-0.5"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {summary || (
                <span className="text-muted-foreground italic">
                  Generating summary...
                </span>
              )}
            </p>
          </div>
        )}
      </div>

      <span className="text-sm text-muted-foreground shrink-0">
        {date}
      </span>
    </div>
  </div>
)


}
