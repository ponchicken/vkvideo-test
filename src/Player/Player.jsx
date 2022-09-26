import React, { useEffect, useRef } from 'react'
import { registerPlayerWebComponent } from '@vkontakte/videoplayer'
import './Player.css'

/** https://st.mycdn.me/static/vkontakte-videoplayer/latest/doc/index.html */
const registerPlayer = () => {
  if (!window.customElements.get('vk-video-player') && !window.customElements.get('google-cast-button')) {
    registerPlayerWebComponent()
  }
}

registerPlayer()

export function Player (props) {
  const { videoId, src, extraVideos } = props

  const playerRef = useRef(null)
  const wasInitedRef = useRef(false)

  useEffect(() => {
    const player = playerRef.current
    if (player && src && !wasInitedRef.current) {
      wasInitedRef.current = true
      console.log(player)
      console.log('INIT Player', src)
      try {
        player.initPlayer({
          videos: [
            {
              videoId,
              sources: {
                MPEG: {
                  '720p': src
                }
              },
              duration: 1000,
              thumbUrl: '',
              title: 'title',
              unitedVideoId: 0
            }
          ],

          autoplay: true,
          repeat: true,
          isMobile: true,
          callbacks: {
            onEnded () {
              console.log('ENDED')
            },
            onStarted () {
              console.log('STARTED')
            }
          }
        })
      } catch (error) {
        console.error('player.initPlayer error', error)
      }
    }
  }, [playerRef, src, wasInitedRef])

  useEffect(() => {
    const player = playerRef.current
    if (player && extraVideos?.length) {
      player.updateNextVideos(extraVideos)
    }
  }, [extraVideos])

  return (
    <div className="VideoPlayer">
      <vk-video-player ref={playerRef} />
    </div>
  )
}
