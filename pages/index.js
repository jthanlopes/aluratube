import user from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import { StyledTimeline } from '../src/components/TimeLine';
import Menu from "../src/components/Menu";

export default function HomePage() {
  return (
    <>
      <CSSReset />

      <div>
        <Menu />
        <Header />
        <TimeLine playlists={user.playlists} />
      </div>
    </>
  );
}

// function Menu() {
//   return <div>Menu</div>;
// }

const StylesHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
    margin-top: 50px;
  }
`;

function Header() {
  return (
    <StylesHeader>
      {/* <img src="#" alt="Banner"/> */}
      <section className="user-info">
        <img src={`https://github.com/${user.github}.png`} alt="Imagem perfil" />
        <div>
          <h2>{user.name}</h2>
          <p>{user.job}</p>
        </div>
      </section>
    </StylesHeader>
  );
}

function TimeLine(props) {
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];

        return (
          <section>
            <h2>{playlistName}</h2>

            <div>
              {videos.map((video) => {
                return (
                  <a url={video.url}>
                    <img src={video.thumb} alt="teste" />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
