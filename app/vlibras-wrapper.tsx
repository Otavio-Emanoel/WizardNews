"use client"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

// Import dinâmico para evitar qualquer interferência em SSR
const VLibras = dynamic(() => import("vlibras-nextjs"), { ssr: false })

/**
 * Wrapper responsável por montar o componente VLibras de forma resiliente.
 * O snippet fornecido na documentação só renderiza em produção; aqui deixamos
 * configurável para também rodar em desenvolvimento se necessário via flag.
 */
export default function VLibrasWrapper() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Permitir testar em desenvolvimento colocando NEXT_PUBLIC_ENABLE_VLIBRAS=1
    const allowDev = process.env.NEXT_PUBLIC_ENABLE_VLIBRAS === '1'
    if (process.env.NODE_ENV === 'production' || allowDev) {
      // Aguarda um pequeno tempo para garantir hidratação antes de inicializar
      const t = setTimeout(() => setEnabled(true), 50)
      return () => clearTimeout(t)
    }
  }, [])

  if (!enabled) return null

  return <VLibras forceOnload />
}