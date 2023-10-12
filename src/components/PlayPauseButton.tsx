// songcamp/cc0lab - source of the cc0lab website <https://cc0lab.songcamp.band>
//
// Written in 2023 by <Kevin Neaton> <kevin@neaton.xyz>
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.

import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

export interface PlayPauseButtonProps {
  onClick: () => void;
  isPlaying: boolean;
  className?: string;
}

export function PlayPauseButton({onClick, isPlaying, className, ...props}: PlayPauseButtonProps) {
  const Icon = isPlaying ? PauseIcon : PlayIcon
  return (
    <button
      className={clsx("bg-white aspect-square rounded-full p-4", className)}
      onClick={onClick}
    >
      <Icon className="h-[30px] w-[30px]"/>
    </button>
  )
}