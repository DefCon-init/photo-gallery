import React, { useState } from 'react';

import { useAuth0 } from '../../utils/AuthContext';

import { PostForm } from './styles';
// import api from '../../services/api';

interface NewPost {
  email: string;
  image: string | Blob;
}

const New = () => {
  const { user } = useAuth0();
  const [post, setPost] = useState<NewPost>({
    image: '',
    email: `${user.email}`
  });

  // const getBufferFromBytes = (imageBytes: any): Buffer => {
  //   console.log(imageBytes)
  //   let imageBuffer = new Buffer(imageBytes.length)
  //   for(let b=0; b< imageBytes.length; b++) {
  //     imageBuffer[b] = imageBytes[b]
  //   }
  //   return imageBuffer
  // }

  // const getBytesFromFile = (file: File) => {
  //   return new Promise((resolve, reject) => {
  //   const fileReader = new FileReader();
  //   let imageData;
  //   fileReader.readAsDataURL(file);
  //   fileReader.onload = function () {
  //     imageData = fileReader.result;
  //     resolve(imageData)
  //   }
  //   })
  // }

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const data = new FormData();

    // data.append('image', post.image);
    // data.append('author', post.author);
    // data.append('place', post.place);
    // data.append('description', post.description);
    // data.append('hashtags', post.hashtags);

    // await api.post('posts', data);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    console.log(e.target, e.target.files, e.target.files![0]);
    setPost({ ...post, image: e.target.files![0] });
  };

  return (
    <PostForm onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Post</button>
    </PostForm>
  );
};

export default New;
