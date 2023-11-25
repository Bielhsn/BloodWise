import Image from 'next/image'
import React from 'react'
import './compromisso.scss'

export default function Compromisso() {
  return (
    <div className='compromisso'>
       <Image
              src="/img/DoubleBlood.png"
              alt='Fluxo de Energia'
              id='doubleblood'
              width={600}
              height={600}
              />
        <h1 className='missao'>Missão</h1>
        <p className='sub_missao'>A doação de sangue pode ajudar a reduzir o risco de doenças do coração 
          ao reduzir o nível de ferro no sangue, o que pode reduzir o risco de ataques 
          cardíacos em homens e mulheres.</p>
          <div>
            <h1 className='valores'>Valores</h1>
            <div>
            <Image
              src="/img/doando.png"
              alt='Doando Sangue'
              id='margin_img_doando'
              width={320}
              height={250}
              />
                <div className='ajuda'><h2>Ajuda a prevenir doenças <br></br> do coração</h2>
                <p>A doação de sangue pode ajudar a reduzir o <br></br> risco de doenças do coração 
            ao reduzir o nível <br></br> de ferro no sangue, o que pode reduzir o risco de <br></br> ataques 
            cardíacos em homens e mulheres.</p>
                </div>
              </div>
              <div>
              <Image
              src="/img/hemoglobina.png"
              alt='Fluxo de Energia'
              id='margin_img_sangue'
              width={320}
              height={250}
              />
                <div className='fluxo'><h2>Melhora o fluxo de energia.</h2>
                <p>Após a doação, o corpo estimula a produção <br></br> de novas células sanguíneas, 
                  o que pode <br></br> aumentar a energia e melhorar a circulação <br></br> sanguínea.</p>
                </div>
              </div>
              <div>
              <Image
              src="/img/solidariedade.png"
              alt='Fluxo de Energia'
              id='margin_img_solidariedade'
              width={320}
              height={250}
              />
                <div className='solidariedade'><h2>O ato de solidariedade reflete <br></br> no bem-estar físico e mental</h2>
                <p>Você sabia que uma bolsa de sangue pode <br></br> salvar a vida de até quatro pessoas? <br></br> Após a coleta, 
                  o sangue é fracionado em <br></br> componentes sanguíneos, tais como concentrado <br></br>de hemácias, concentrado de plaquetas e plasma.
                  <br></br>Por se tratar de um ato solidário, a prática da doação <br></br>de sangue também auxilia no bem-estar emocional <br></br>do doador, 
                  trazendo satisfação em fazer o bem à sociedade.</p>
                </div>
              </div>
            </div>
        
        <h1 className='visao'>Visão</h1>
        <p className='sub_visao'>Temos como meta conseguir alcançar o máximo de pessoas que queiram ajudar aqueles que precisam.</p>
    </div>
  )
}