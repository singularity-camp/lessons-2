interface IEpisode {
  title: string;
}

interface IProps {
  episodes: IEpisode[];
}

function List({ episodes }: IProps) {
  return (
    <ul>
      {episodes.map((episode) => (
        <li key={episode.title}>{episode.title}</li>
      ))}
    </ul>
  );
}

export default List;
