"use client";
import { useQuery } from "@tanstack/react-query";
import AddPost from "./components/addPosts";
import axios from "axios";
import Post from "./components/post";
import { PostType } from "./types/posts";

//Fetch all posts
const allPosts = async () => {
  const response = await axios.get("/api/posts/getPost");
  return response.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery<PostType[]>({
    queryFn: allPosts,
    queryKey: ["posts"],
  });

  if (error) {
    return error;
  }
  if (isLoading) {
    return "Loading...";
  }

  return (
    <main>
      <AddPost />
      {data?.map((post) => (
        <Post
          comments={post.comments}
          key={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          id={post.id}
        />
      ))}
    </main>
  );
}
