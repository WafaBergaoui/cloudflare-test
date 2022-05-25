import { getSignedStreamId } from "../../../utils/cfStream";

export async function onRequestGet(context) {
  const { request, env, params } = context;

  const { id } = params;
  if (id) {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/stream/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${env.CF_API_TOKEN_STREAM}`,
        },
      }
    );

    return new Response(id, {
      headers: {
        "content-type": "application/json",
      },
    });
  } else {
    const url = new URL(request.url);
    const res = await (
      await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${
          env.CF_ACCOUNT_ID
        }/stream?search=${url.searchParams.get("search") || ""}`,
        {
          headers: {
            Authorization: `Bearer ${env.CF_API_TOKEN_STREAM}`,
          },
        }
      )
    ).json();

    const filteredVideos = res.result;

    const videos = await Promise.all(
      filteredVideos.map(async (x) => {
        return {
          uid: x.uid,
          status: x.status,
          thumbnail: `https://videodelivery.net/${id}/thumbnails/thumbnail.jpg`,
          meta: {
            name: x.meta.name,
          },
          created: x.created,
          modified: x.modified,
          duration: x.duration,
        };
      })
    );
    return new Response(JSON.stringify(videos), {
      headers: { "content-type": "application/json" },
    });
  }
}
