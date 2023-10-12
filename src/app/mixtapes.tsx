// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2023 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Token } from '@/lib/reservoir';
import { PlayPauseButton } from '@/components/PlayPauseButton';
import { ExternalLinkIcon, GlobeIcon } from '@radix-ui/react-icons';
import { tokenExplorerHref, tokenExternalHref } from '@/lib/tokens';
import clsx from 'clsx';
import { P9Frame } from '@/components/P9Frame';

type LinkPillProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  className?: string;
};

function LinkPill({href, className, ...props}: LinkPillProps) {
  return (
    <a
      href={href} 
      className={clsx("py-1 px-2 flex gap-1 text-xs items-center bg-white rounded-full", className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  )
}

export function Mixtapes({tokens}: {tokens: Token[]}) {
  const [playing, setPlaying] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (playing !== null && tokens[playing].media) {
        audioRef.current.src = tokens[playing].media as string;
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [tokens, playing]);

  return (
    <div className="grid gap-[10px] landscape:grid-flow-col place-content-center h-full">
      {tokens.map((token, index) => token && (
        <P9Frame key={index} className="z-10 p-[10px] aspect-square h-full min-h-0 max-h-full w-full max-w-[320px] sm:max-w-[500px]">
          <div key={index} className="relative w-fit group">
            <Image
              src={token.imageLarge || ''}
              alt={token.name || 'Cover art'}
              width={1000}
              height={1000}
            />
            <div className="absolute inset-0 [@media(hover:hover)]:opacity-0 transition-opacity [@media(hover:hover)]:group-hover:opacity-100">
              <PlayPauseButton
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                isPlaying={playing === index}
                onClick={() => setPlaying(playing === index ? null : index)}
              />
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 flex gap-2 sm:gap-4 justify-between items-center flex-wrap">
                <div className="py-1 px-2 text-xs items-center bg-white rounded-full">
                  {token.kind === 'erc1155' ? token.name : token.collection?.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  <LinkPill href={tokenExplorerHref(token)}>
                    Explore&nbsp;<GlobeIcon />
                  </LinkPill>
                  <LinkPill href={tokenExternalHref(token)}>
                    Mint&nbsp;<ExternalLinkIcon />
                  </LinkPill>
                </div>
              </div>
            </div>
          </div>
        </P9Frame>
      ))}
      <audio ref={audioRef} onPause={() => setPlaying(null)} style={{display: 'none'}} />
    </div>
  );
}