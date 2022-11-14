import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Content, PostInfo, PostPageContainer } from "../styles/pages/Post"

import api from "../services/api"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogMarkdown from "../components/Markdown"

interface Post {
  title: string
  body: string
  url: string
  created_at: string
  username: string
  comments: string
}

export function PostPage() {
  const { postNumber } = useParams();
  const [post, setPost] = useState<Post>({} as Post);
  const data = "2022-11-14T02:36:09Z"

  async function fetchPost() {

    const issue = await api.get(
      `/repos/richarddeluca/Desafio-Ignite-Github-Blog/issues/${postNumber}`
    );

    const { comments, created_at, body, user, title, html_url } = issue.data;
    const postData = {
      title,
      comments,
      username: user.login,
      url: html_url,
      created_at,
      body,
    }
    setPost(postData);
  }

  useEffect(() => {
    fetchPost();

  }, []);

  return (
    <>
      <PostPageContainer>
        <PostInfo>
          <header>
            <a className="backLink" href="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>VOLTAR</span>
            </a>
            <a className="githubLink" href={post?.url}>
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>
          <h2>{post.title}</h2>
          <div className="info">
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <p>{post.username}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDay} />
              <p>{post.created_at && formatDistanceToNow(new Date(post.created_at), {
                locale: ptBR,
                addSuffix: true,
              }) || 'sem data'}
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              <p>{post.comments} comentários</p>
            </div>
          </div>
        </PostInfo>
        <Content>
          <BlogMarkdown>{post.body}</BlogMarkdown>
        </Content>
      </PostPageContainer>
    </>
  )
}