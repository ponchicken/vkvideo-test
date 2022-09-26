import React, { useState } from 'react'
import { View, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'

import Home from './panels/Home'
import Persik from './panels/Persik'

const App = () => {
  const [scheme] = useState('space_gray')
  const [activePanel, setActivePanel] = useState('home')

  const go = e => {
    setActivePanel(e.currentTarget.dataset.to)
  }

  return (
    <ConfigProvider scheme={scheme}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <View activePanel={activePanel}>
                <Home id='home' go={go} />
                <Persik id='persik' go={go} />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}

export default App
