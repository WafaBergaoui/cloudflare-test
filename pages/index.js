import { PlayerView } from "../components/views";

export default function Home() {
  //console.log(data);
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
