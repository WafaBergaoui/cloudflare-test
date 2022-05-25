import { PlayerView } from "../components/views";

export default function Home({data}) {
  
  //data.map((video) => console.log(video.uid));

  return (
    <div>
      <PlayerView />
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`https://cloudflare-test-ajl.pages.dev/api/videos/`, {
//     headers: { accept: "application/json" },
//   });
//   const data = await res.json();
//   return { props: { data } };
// }
