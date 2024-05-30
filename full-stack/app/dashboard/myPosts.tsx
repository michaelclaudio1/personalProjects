"use client";

import { AuthPosts } from "@/app/types/authPosts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import EditPost from "./editPost";

const fetchAuthPosts = async () => {
  const response = await axios.get("/api/posts/authPosts");
  return response.data;
};

export default function MyPosts() {
  const { data, isLoading } = useQuery<AuthPosts>({
    queryFn: fetchAuthPosts,
    queryKey: ["auth-posts"],
  });

  if (isLoading) {
    return <h1>Posts are loading...</h1>;
  }
  return (
    <div>
      {data?.post?.map((post) => (
        <EditPost
          id={post.id}
          key={post.id}
          avatar={data.image}
          name={data.name}
          title={post.title}
          comments={post.comments}
        />
      ))}
    </div>
  );
}
