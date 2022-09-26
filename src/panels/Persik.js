import React from 'react'

import { Group, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'

import persik from '../img/persik.png'
import './Persik.css'
import { Player } from '../Player/Player'

const Persik = props => {
  return (
    <Panel id={props.id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
      >
        Persik
      </PanelHeader>

      <Group>
        <Player
          src="https://media.lovina.vkpartner.ru/s0/story/46df808a444ecaedae5a79198af11fe71682800200/large.mp4"
          // src="https://vd344.mycdn.me/?expires=1662117356009&srcIp=85.209.1.9&pr=63&srcAg=CHROME_MAC&ms=185.226.53.60&type=3&sig=VmPqJnV867A&ct=0&urls=185.226.52.44&clientType=32&id=2763115989697"
        />
      </Group>

      <img className="Persik" src={persik} alt="Persik The Cat"/>
    </Panel>
  )
}

export default Persik
