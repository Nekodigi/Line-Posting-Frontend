import { useEffect, useState } from 'react';
import Post  from './post/post';

export default function Preview({id, router}) {

  const statusToNote = (post) => {
    let note = undefined;
    switch(post.status){
      case "approved":
        note = {
          message:"投稿が承認され、一覧からも確認できるようになりました。このメッセージをタップして新しいページに移動してください。※反映には時間がかかります。"
          ,type:"success",url:`/post/${post.id}`}
        break;
      case "waiting_approval":
        note = {message:"ただいま確認待ちです。事務局が承認するまで一覧には表示されません。", type:"warning"};
        break;
      case "denied":
        note = {message:"投稿内容に問題があったため、投稿が拒否されました。内容を見直して再投稿頂けるようお願い致します。", type:"danger"};
        break;
    }
    return note;
  }

  const [post, setPost] = useState(undefined);
  useEffect(() => {//how to get value without ssg
      // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
      const access_db = async () => {//how to use router param in useEffect https://zenn.dev/kiyokiyoabc/articles/d3a8464367094a
        if(router.isReady){
          const post = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/preview/${id}`)).json();//CORS
          setPost(post); // stateに反映する
        }
      };
      access_db();
  }, [id, router]);

  return (
    post ? <Post post={post} note={statusToNote(post)}/> : null
  );
}////post={post}