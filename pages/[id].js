import { Video } from "../components/views";
import { useRouter } from "next/router";

function Player() {
  const router = useRouter();

  return (
    <div>
      <Video videoID={router.query.id} />
    </div>
  );
}

export default Player;
