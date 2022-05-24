import { PlayerView } from "../components/views";
import { useEffect } from "react";

export default function Home({ data }) {
  useEffect = () => console.log(data);
  return (
    <div>
      <PlayerView />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("/api/videos/", {
    headers: { accept: "application/json" },
  });
  const data = await res.json();

  return { props: { data } };
}
