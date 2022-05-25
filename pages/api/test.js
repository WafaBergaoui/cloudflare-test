// // GET requests to /filename would return "Hello, world!"
// export const onRequestGet = async (req, res) => {
//   let data = [];
//   await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       data = json;
//     });
//   return  res.json(data)
// };

// // POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
// export const onRequestPost = async ({ request }) => {
//   const { name } = await request.json();
//   return new Response(`Hello, ${name}!`);
// };
export default ( req , res) => {
  if (req.method == "GET") {
    return res.status(200).json({"message" :' Hello World !'})
  }
}