import { useState, useEffect } from "react";

const useGetRandomUsers = (post , user) => {
    const [allPosts, setAllPosts] = useState([])
    useEffect(() => {
        if (post.length !== 0 && user.length !== 0) {
          user.forEach((userItem) => {
            post.forEach((postItem) => {
              if (userItem.id === postItem.userId) {
                setAllPosts((post) => [
                  ...post,
                  {
                    postid: postItem.id,
                    name: userItem.name,
                    post: postItem.body,
                    title: postItem.title,
                  },
                ]);
              }
            });
          });
        }
      }, [post, user]);
      return [allPosts, setAllPosts]
};

export default useGetRandomUsers;