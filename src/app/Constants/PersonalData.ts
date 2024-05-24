import { IconsOrigin } from "../Components/icon/icon.component";
import { PersonalDataWrapper } from "../Interfaces/PersonalData";

export const PersonalDataObj: PersonalDataWrapper = {
    Nome: "Cristian Marín",
    Title: "Eng.Software - 2025 UNOPAR",
    Job: "Fullstack Developer",
    MainTechs: [
        {Name: "Angular", Icon: "fa-brands fa-angular" , Origin: IconsOrigin.FontAwesome},
        {Name: ".NetCore", Icon: "netcore.svg", Origin: IconsOrigin.Svg},
        {Name: "Sql", Icon: "fa-solid fa-database", Origin: IconsOrigin.FontAwesome}
    ],
    AboutMe: "Greetings! I am a technology enthusiast with an overflowing passion for challenges. My goal is to push the limits and make the impossible possible in the digital world.",
    KeyPhrase: "I enjoy unraveling complexity and turning it into simplicity, much like a skilled artist sculpting wonders with the language of coding."
}