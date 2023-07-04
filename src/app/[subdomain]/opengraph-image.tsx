import { ImageResponse } from 'next/server'

export const runtime = 'edge'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { subdomain: string } }) { 
  return new ImageResponse(
    <div
      style={{
        backgroundColor: '#E1F4F7',
        backgroundSize: '150px 150px',
        color: '#005477',
        height: '100%',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
      }}
    >
      {params.subdomain}
    </div>,
    { ...size }
  )
}