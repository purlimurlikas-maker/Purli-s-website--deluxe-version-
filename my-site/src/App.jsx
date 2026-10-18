import { useState } from "react";
import Hero from "./components/Hero";
import ThingsIMade from "./components/ThingsIMade.jsx";
import Favourites from "./components/Favourites";
import favouritefood from "./components/favouritefood";
import hobbies from "./components/hobbies";
import about from "./components/about";
import SoundButton from "./components/SoundButton";
import SoundToggle from "./SoundToggle";
import Tipsu from "./components/Tipsu"
import end from "./components/end"


const chapters = [Hero, about, hobbies, Favourites, favouritefood, Tipsu, ThingsIMade, end];

export default function App() {
  const [step, setStep] = useState(0);
  const [soundOn, setSoundOn] = useState(true);
  const finished = step === chapters.length - 1;

    return (
    <main>
      <SoundToggle />

      {chapters.slice(0, step + 1).map((Chapter, i) => (
        <Chapter key={i} />
      ))}

      {!finished && (
       <SoundButton onClick={() => setStep(step + 1)}>
        keep going →
       </SoundButton>
      )}
    </main>
  );
}