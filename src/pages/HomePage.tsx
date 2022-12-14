import { HomeContainer, Post, PostsContainer, Profile, PublicationsSection } from "../styles/pages/Home"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faUserGroup, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import api from "../services/api"
import { useEffect, useState } from "react"

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import ReactMarkdown from "react-markdown";
import { useForm } from "react-hook-form";

interface UserInfo {
  name: string
  followers: number
  username: string
  url: string
  imgUrl: string
  bio: string
}

interface Post {
  title: string;
  body: string;
  created_at: string;
  number: string;
}

export function HomePage() {

  const { register, handleSubmit } = useForm();

  const [user, setUser] = useState<UserInfo>()
  const [posts, setPosts] = useState<Post[]>([]);
  const [qtdPosts, setqtdPosts] = useState(0)

  async function fetchUser() {
    const response = await api.get("users/richarddeluca")
    const { name, followers, login, html_url, avatar_url, bio } = response.data
    const userData = {
      name,
      followers,
      username: login,
      url: html_url,
      imgUrl: avatar_url,
      bio,
    }
    setUser(userData)
  }

  async function fetchPosts(query = "") {
    try {
      const response = await api.get("/search/issues", {
        params: {
          q: `repo:richarddeluca/Desafio-Ignite-Github-Blog is:issue ${query}`,
        },
      });
      setPosts(response.data.items);
      setqtdPosts(response.data.total_count);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUser()
    fetchPosts()
  }, [])

  const handleSearch = async (data: any) => {
    try {
      fetchPosts(data.query)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeContainer>
      <Profile className="profile">
        <img className="avatar" src={user?.imgUrl} alt="" />
        <div>
          <h2>{user?.name || 'Meu nome'}</h2>
          <p className="bioText">{user?.bio || 'breve resumo sobre quem sou escrito por mim'}</p>
          <div className="info">
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <p>{user?.username}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <p>{user?.followers === null ? 'qtd de seguidores'
                : user?.followers === 1 ? '1 seguidor'
                  : user?.followers && user?.followers > 1 ? `${user?.followers} seguidores`
                    : 'nenhum seguidor' || 'qtd de seguidores'}
              </p>
            </div>
          </div>
          <a className="githubLink" href={user?.url}>
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </Profile>
      <PublicationsSection onSubmit={handleSubmit(handleSearch)}>
        <header>
          <h3>Publica????es</h3>
          <p className="numberOfPublications">{qtdPosts === 1 ? `${qtdPosts} publica????o` : `${qtdPosts} publica????es`}</p>
        </header>
        <input
          className="searchInput"
          type="text"
          placeholder="Buscar conte??do"
          {...register("query")}
        />
      </PublicationsSection>
      <PostsContainer>
        {posts && posts.map((post) => {
          return (
            <Post href={`/post/${post.number}`} key={post.number}>
              <header>
                <h4>{post.title}</h4>
                <p className="date">{formatDistanceToNow(new Date(post.created_at), {
                  locale: ptBR,
                  addSuffix: true,
                })}</p>
              </header>
              <ReactMarkdown>{
                post.body ? post.body.split(" ", 30).join(" ").concat("...") : 'Hi lorena'
              }</ReactMarkdown>
            </Post>
          )
        })}
      </PostsContainer>
    </HomeContainer>
  )
}



// buscar na user api github
// buscar na search api github
// routes :id para buscar as issues/posts
//gr??ficos