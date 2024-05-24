export interface PersonalDataWrapper{
    Nome:string;
    Title:string;
    Job:String;
    AboutMe:string;
    MainTechs:IconTag[];
    KeyPhrase: string;
}

export interface IconTag{
    Name: string;
    Icon: string;
    Origin: number;
}