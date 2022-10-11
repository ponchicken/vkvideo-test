import React, { useEffect, useRef } from 'react'
import { Player as VKPlayer } from '@vkontakte/videoplayer-core'
import './Player.css'

/** https://st.mycdn.me/static/vkontakte-videoplayer/latest/doc/index.html */
export function Player (props) {
  const { src } = props

  const wasInitedRef = useRef(false)

  const player = useRef(
    new VKPlayer({
      disableChromecast: true
    })
  ).current
  const containerRef = useRef(null)

  useEffect(() => {
    const containerEl = containerRef.current
    if (player && containerEl && src && !wasInitedRef.current) {
      wasInitedRef.current = true
      console.log('INIT Player', src)
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
      } catch (error) {
        console.error('player.initPlayer error', error)
      }
    }
  }, [src, wasInitedRef])

  return (
    <div className="VideoPlayer" ref={containerRef}>
      player
    </div>
  )
}
