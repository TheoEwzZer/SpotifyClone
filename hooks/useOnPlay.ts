import { Song } from "@/types";

import usePlayer, { PlayerStore } from "./usePlayer";
import useAuthModal, { AuthModalStore } from "./useAuthModal";
import { useUser } from "./useUser";

function useOnPlay(songs: Song[]): (id: string) => void {
  const player: PlayerStore = usePlayer();
  const authModal: AuthModalStore = useAuthModal();
  const { user } = useUser();

  const onPlay: (id: string) => void = (id: string): void => {
    if (!user) {
      return authModal.onOpen();
    }

    player.setId(id);
    player.setIds(songs.map((song: Song): string => song.id));
  };

  return onPlay;
}

export default useOnPlay;
