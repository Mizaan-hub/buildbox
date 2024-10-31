import StartupCard, { StartupCardType } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  // params query
  const query = (await searchParams).query;

  const { data: posts } = await sanityFetch({ query : STARTUPS_QUERY })

  console.log(JSON.stringify(posts, null, 2))

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
      <SanityLive />
    </>
  );
}
