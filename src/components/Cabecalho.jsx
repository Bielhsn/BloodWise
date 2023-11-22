import Link from "next/link"
import Image from "next/image"
import React from 'react'

export default function Cabecalho() {
  return (
    <div className="cabecalho">
      <header>
        <nav>
          <p><Link href="/">Início</Link></p>
          <p><Link href="/paginas/compromisso">Compromisso</Link></p>
          <Image
                src="/img/Logo.png"
                alt='logo'
                width={200}
                height={150}
              />
          <p><Link href="/paginas/formulario">Formulário</Link></p>
          <p><Link href="/paginas/equipe">Equipe</Link></p>
        </nav>
      </header>
    </div>
  );
}