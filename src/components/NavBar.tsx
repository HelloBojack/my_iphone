
const NavBar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-[1rem]">
        <img src="/assets/images/apple.svg" alt="apple" height={48} width={18} />
        <div className="font-bold">
          Apple
        </div>
        <div className="flex items-center justify-center">
          <img src="/assets/images/bag.svg" alt="bag" height={48} width={18} className="mr-[1rem]"/>
          <img src="/assets/images/search.svg" alt="search" height={48} width={18} />
        </div>
      </nav>
    </header>
  )
}

export default NavBar