import { useQuery, useQueryClient } from "@tanstack/react-query";

type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

const getPosts = (): Promise<Post[]> => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((data) =>
    data.json()
  );
};

export default function ReactQueryPlayground() {
  const queryClient = useQueryClient();

  const { data, isPending, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);
  return (
    <div>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
