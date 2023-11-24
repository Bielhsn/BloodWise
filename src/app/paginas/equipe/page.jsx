import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './equipe.scss'

export default function Equipe() {
  return (
    <div className='equipe'>
        <h1 className='time'>Time</h1>
        <div className='gabrielhf'>
        <Image
              src="/img/GabrielHFJ.png"
              alt='Gabriel Henrique Figueiredo'
              id='margin_equipe'
              width={220}
              height={220}
              />
        <p className='ghf_name'>Gabriel Henrique Figueiredo</p>
        <p className='ghf_rm'>RM - 99463</p>
        </div>
        <div className='gabrielhs'>
        <Image
              src="/img/henrique.png"
              alt='Gabriel Henrique Souza'
              id='margin_equipe'
              width={220}
              height={220}
              />
        <p className='ghs_name'>Gabriel Henrique Souza</p>
        <p className='ghs_rm'>RM - 98633</p>
        </div>
        <div className='gustavo'>
        <Image
              src="/img/GustavoB.png"
              alt='Gustavo'
              id='margin_equipe'
              width={220}
              height={220}
              />
        <p className='gbb_name'>Gustavo Bernardo Basilio</p>
        <p className='gbb_rm'>RM - 93770</p>
        </div>

        <div className='guilherme'>
        <Image
              src="/img/Gui.png"
              alt='Guilherme'
              id='margin_equipe'
              width={220}
              height={220}
              />
        <p className='gdg_name'>Guilherme Dias Gomes</p>
        <p className='gdg_rm'>RM - 99577</p>
        </div>

        <div className='rafael'>
        <Image
              src="/img/Lino1.png"
              alt='Rafael'
              id='margin_equipe'
              width={220}
              height={220}
              />
        <p className='rls_name'>Rafael Lino Seabra</p>
        <p className='rls_rm'>RM - 551577</p>
        </div>
    </div>
  )
}