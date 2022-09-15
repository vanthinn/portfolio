import "./styles.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


export default function Particle({ par }) {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={par}
        />
    );
}