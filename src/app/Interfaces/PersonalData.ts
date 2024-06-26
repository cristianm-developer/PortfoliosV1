export interface PersonalDataWrapper{
    Name:string;
    Title:string;
    TitleInfo:string;
    Job:String;
    AboutMe:string;
    MainTechs:IconTag[];
    KeyPhrase: string;
    ContactInfo: ContactInfo;
}

export interface IconTag{
    Name: string;
    Icon: string;
    Origin: number;
}

export interface ContactInfo{
    Whatsapp: string;
    Linkedin: string;
    Email: string;
    ContactPhrase: string;
}