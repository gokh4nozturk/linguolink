import { ImageResponse } from '@vercel/og';
import React from 'react';

export const runtime = 'edge';

const loadGoogleFont = async (font: string, text: string, weights: string) => {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weights}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error('failed to load font data');
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Linguolink';
  const description =
    searchParams.get('description') || 'The best place to manage translations for your projects';

  const text = `${title} - ${description}`;

  try {
    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '64px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily:
            'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            width: '100%',
          }}
        >
          <img
            src="https://storage.linguol.ink/brand/logo.svg"
            alt="logo"
            height={240}
            width={240}
          />

          {/* Content section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
            <div
              style={{
                fontSize: '52px',
                fontWeight: '700',
                lineHeight: '1.2',
                maxWidth: '760px',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '24px',
                fontWeight: '400',
                maxWidth: '760px',
              }}
            >
              {description}
            </div>
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        emoji: 'fluent',
        debug: false,
        fonts: [
          {
            name: 'Inter',
            data: await loadGoogleFont('Inter', text, '400'),
            weight: 400,
          },
          {
            name: 'Inter',
            data: await loadGoogleFont('Inter', text, '500'),
            weight: 500,
          },
          {
            name: 'Inter',
            data: await loadGoogleFont('Inter', text, '600'),
            weight: 600,
          },
          {
            name: 'Inter',
            data: await loadGoogleFont('Inter', text, '700'),
            weight: 700,
          },
        ],
      }
    );
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : String(e)}`);
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
}
