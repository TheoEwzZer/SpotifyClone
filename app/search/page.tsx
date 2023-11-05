import getSongsByTitle from "@/actions/getSongByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import { Song } from "@/types";
import SearchContent from "./components/SearchContent";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

async function Search({
  searchParams,
}: SearchProps): Promise<React.ReactElement> {
  const songs: Song[] = await getSongsByTitle(searchParams.title);

  return (
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
}

export default Search;
