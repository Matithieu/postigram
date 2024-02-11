import CardWithForm from "@/components/Post/post";
import { fetchPost } from "@/lib/actions/post-action/post-repository";
import type { DtoPost } from "@/lib/dto-post";

let posts: DtoPost[] = [];

export default async function Landing() {
  posts = await fetchPost();
  return (
    <div className="gap-4 flex flex-col justify-center items-center">
      {posts.map((post, index) => (
        <CardWithForm
          key={index}
          author={post.author}
          description={post.description}
          image={post.image}
          date={post.date}
        />
      ))}
    </div>
  );
}
