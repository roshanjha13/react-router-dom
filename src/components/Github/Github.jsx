import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <ul className="float-right mr-40">
        <li className="p-3 rounded-lg  text-lime-400">
          Github followers: {data.followers}
        </li>
        <li className="p-3 rounded-lg text-lime-400">
          Location:{data.location}
        </li>
        <li className="p-3 rounded-lg text-lime-400">Name:{data.name}</li>
        <li className="p-3 rounded-lg text-lime-400">
          Twitter:{data.twitter_username}
        </li>
      </ul>
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/roshanjha31");
  return response.json();
};
