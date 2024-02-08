import CardWithForm from "@/components/Post/post";

type Posts = {
  author: string;
  description: string;
  image: string;
  imageAlt: string;
  date: Date;
};

const posts: Posts[] = [
  {
    author: "John Doe",
    description: "This is a post",
    image: "/chien.png",
    imageAlt: "Post 1",
    date: new Date(),
  },
  {
    author: "Jane Doe",
    description: "This is another post",
    image: "/chien.png",
    imageAlt: "Post 2",
    date: new Date(),
  },
  {
    author: "John Doe",
    description: "This is a another another post",
    image: "/chien.png",
    imageAlt: "Post 3",
    date: new Date(),
  },
];

export default function Landing() {
  return (
    <div className="gap-4 flex flex-col justify-center items-center">
      {posts.map((post, index) => (
        <CardWithForm
          key={index}
          author={post.author}
          description={post.description}
          image={post.image}
          imageAlt={post.imageAlt}
          date={post.date}
        />
      ))}
    </div>
  );
}
