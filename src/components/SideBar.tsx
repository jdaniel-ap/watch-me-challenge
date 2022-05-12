import { Button } from './Button';

import '../styles/sidebar.scss';

interface SidebarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  selectedGenreId: number;
}

export function SideBar(props: SidebarProps) {
  const { setValue, genres, selectedGenreId } = props;
  function handleClickButton(id: number) {
    setValue(id);
  }
  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
