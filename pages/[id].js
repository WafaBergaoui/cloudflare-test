import { Video } from "../components/views";

// export async function getStaticPaths() {
//   const res = await fetch(
//     `https://cloudflare-test-ajl.pages.dev/api/videos?q=batman`,
//     {
//       headers: { accept: "application/json" },
//     }
//   );
//   const data = await res.json();

//   const paths = data.map((video) => ({
//     id: video,
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const request = await fetch(
//     `https://cloudflare-test-ajl.pages.dev/api/videos/${id}`
//   );
//   const videoID = await request.json();

//   return {
//     props: {
//       videoID,
//     },
//   };
// }

function Home({ videoID }) {
  //console.log("data", videoID);
  return (
    <div>
      <Video />
    </div>
  );
}

export default Home;
