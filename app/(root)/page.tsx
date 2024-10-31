import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  // params query
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Mia Malkova",
        avatar: "/Mia_Malkova.jpg", //"/public/Mia_Malkova.jpg"
      },
      _id: 1,
      description: "Life of Adult Star",
      image:"/02.jpg", //"/public/02.jpg"
      category: "Beauty",
      title: "Fashion"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Start-Up, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Notices in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>
      {/* Hero Section Ends */}

      <section className="section_container">
        {/* Title */}
        {query ? (
          <>
            <p className="text-30-semibold">
              <span className="text-white">Search Results for </span>
              <span className="text-NavText">{query}</span>
            </p>
          </>
        ) : (
          <p className="text-30-semibold">
            <span className="text-white">Discover Start Ups</span>
          </p>
        )}
        {/* Title End */}

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ?(
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ):(
            <p className="no-results">No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
