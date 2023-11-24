import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './compromisso.scss'

export default function Compromisso() {
  return (
    <div className='compromisso'>
        <h1 className='missao'>Missão</h1>
        <p className='sub_missao'>A doação de sangue pode ajudar a reduzir o risco de doenças do coração 
          ao reduzir o nível de ferro no sangue, o que pode reduzir o risco de ataques 
          cardíacos em homens e mulheres.</p>
          <div>
            <h1 className='valores'>Valores</h1>
            <div class="card">
                <div class="bg"><h2>Ajuda a prevenir doenças do coração</h2>
                <p>A doação de sangue pode ajudar a reduzir o risco de doenças do coração 
            ao reduzir o nível de ferro no sangue, o que pode reduzir o risco de ataques 
            cardíacos em homens e mulheres.</p>
                </div>
                <div class="blob"></div>
              </div>
              <div class="card_2">
                <div class="bg_2"><h2>Melhora o fluxo de energia.</h2>
                <p>Após a doação, o corpo estimula a produção de novas células sanguíneas, 
                  o que pode aumentar a energia e melhorar a circulação sanguínea.</p>
                </div>
                <div class="blob_2"></div>
              </div>
              <div class="card_3">
                <div class="bg_3"><h2>Desconto na mensalidade do cartão de crédito.</h2>
                <p>Algumas operadoras de cartão de crédito oferecem descontos na mensalidade 
                  para quem realiza doações regulares de sangue.</p>
                </div>
                <div class="blob_3"></div>
              </div>
            </div>
        
        <h1 className='visao'>Visão</h1>
        <p className='sub_visao'>A doação de sangue pode ajudar a reduzir o risco de doenças do coração 
          ao reduzir o nível de ferro no sangue, o que pode reduzir o risco de ataques 
          cardíacos em homens e mulheres.</p>
    </div>
  )
}