import React, { useEffect, useState } from 'react';
import Posts from '../components/Posts';

function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect( () => {
    // const hardCodedPosts = [
    //   {
    //       "id": 1,
    //       "title": "This is the title of the hardcoded post 1!",
    //       "body": "This is the first hardcoded post!\nThis is line 2 of the hardcoded post\nThis is the final line!"
    //   },
    //   {
    //       "id": 2,
    //       "title": "This is the title of the hardcoded post 2!",
    //       "body": "This is the second hardcoded post!\nThis is line 2 of the hardcoded post\nThis is the final line!"
    //   },
    //   {
    //       "id": 3,
    //       "title": "This is the title of the hardcoded post 3!",
    //       "body": "This is the third hardcoded post!\nThis is line 2 of the hardcoded post\nThis is the final line!"
    //   },
    // ]
    const updateData=(async ()=>{
      setAppState({ loading: true });
      const data= await fetch("https://jsonplaceholder.typicode.com/posts");
      const parsedData= await data.json();
      setAppState({ loading: false, posts: parsedData.slice(0,10)} );

    })
    updateData();
    }, [setAppState]);

  return (
      <Posts isLoading={appState.loading} posts={appState.posts}/>
  );

}
export default Home;
