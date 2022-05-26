import { PlayerView } from "../components/views";

export async function getStaticProps() {
  const res = await fetch(`https://cloudflare-test-ajl.pages.dev/api/videos/`, {
    headers: { accept: "application/json" },
  });
  const data = await res.json();

  return {
    props: {data}
  }
}

function Home({data}) {
  return (
    <div>
      <PlayerView videos={data}/>
    </div>
  );
}

export default Home;