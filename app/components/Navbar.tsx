import { auth, signIn, signOut } from "@/auth"
import Image from "next/image"
import Link from "next/link"

const Navbar = async () => {

  // session to check if user is logged in
  const session = await auth();
  console.log(session)

  return (
    <header className="px-5 py-3 bg-Nav shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href='/'>
          <Image src="/NavLogo.png" alt="Build Box" width={144} height={30}></Image> {/*"/public/NavLogo.png"*/ }
        </Link>
        {/* Show things only when user is logged in */}
        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
            <Link href="/startup/create">
              <span className="text-NavText">Create</span>
            </Link>

            <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  {/* <LogOut className="size-6 sm:hidden text-red-500" /> */}
                </button>
              </form>

            <Link href={`/user/${session?.id}`}>
              <span>{session?.user?.name}</span>
            </Link>
            </>
          ):(
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
