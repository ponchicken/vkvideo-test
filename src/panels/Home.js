import React from 'react'

import { Panel, PanelHeader, Header, Button, Group, Div } from '@vkontakte/vkui'
import { Player } from '../Player/Player'

const Home = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader>Example</PanelHeader>

    <Group header={<Header mode="secondary">Navigation Example</Header>}>
      <Div>
        <Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
          Show me the Persik, please
        </Button>
      </Div>

      <Div>
        <Player
          videoId={3935068241857}
          src="https://media.lovina.vkpartner.ru/s0/story/8bb0d9011990a72f3ee0963e015878a6ccceee0200/large.mp4"
          // src="https://vd344.mycdn.me/?expires=1662117356009&srcIp=85.209.1.9&pr=63&srcAg=CHROME_MAC&ms=185.226.53.60&type=3&sig=VmPqJnV867A&ct=0&urls=185.226.52.44&clientType=32&id=2763115989697"
        />
      </Div>
    </Group>
  </Panel>
)

export default Home
