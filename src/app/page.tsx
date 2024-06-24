import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import HightLight from '../components/HightLight'

export default function Home() {
  return (
    <main className="bg-black w-full h-full">
      <NavBar />
      <Hero />
      <HightLight />
    </main>
  );
}
