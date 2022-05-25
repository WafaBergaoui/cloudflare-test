import { Video } from "../components/video";

export async function getStaticProps({query}) {
    const {id} = query;
    console.log('ghjk', id);
  const res = await fetch(`https://cloudflare-test-ajl.pages.dev/api/videos/${id}`, {
    headers: { accept: "application/json" },
  });
  const data = await res.json();

  return {
    props: {data}
  }
}

function Home({data}) {
  console.log("data",data);
  return (
    <div>
      <Video videoID={data}/>
    </div>
  );
}

export default Home;