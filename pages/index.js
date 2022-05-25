import { PlayerView } from "../components/views";

export default function Home({data}) {
  
  //data.map((video) => console.log(video.uid));

  console.log("data",data);
  return (
    <div>
      <PlayerView videos={data}/>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://cloudflare-test-ajl.pages.dev/api/videos/`, {
    headers: { accept: "application/json" },
  });
  const data = await res.json();
  return { props: { data } };
}
