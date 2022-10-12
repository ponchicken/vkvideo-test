import React, { useEffect, useRef } from 'react'
import { Player as VKPlayer } from '@vkontakte/videoplayer-core'
import './Player.css'

/** https://st.mycdn.me/static/vkontakte-videoplayer/latest/doc/index.html */
export function Player (props) {
  const { src } = props

  const player = useRef(
    new VKPlayer({
      disableChromecast: true
    })
  ).current

  const containerRef = useRef(null)

  useEffect(() => {
    const containerEl = containerRef.current

    if (player && containerEl && src) {
      try {
        player.initVideo({
          container: containerEl,
          sources: {
            MPEG: {
              '1080p': src
            }
          },
          meta: {
            title: 'title',
            subtitle: 'subtitle',
            videoId: '0'
          }
        })

        player.play()

        console.log(player)
        player.getAllLogs().forEach(console.log)
        player.events.managedError$.subscribe(e => console.error('MANAGED ERROR', e))
        player.events.fatalError$.subscribe(e => console.error('FATAL ERROR', e))
        console.log('INIT Player', src)
      } catch (error) {
        console.error('player.initPlayer error', error)
      }
    }
  }, [src])

  return (
    <div className="VideoPlayer" ref={containerRef}>
      player
    </div>
  )
}
