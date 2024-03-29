import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class MovieService{

    movies = [
        {"id":1,"name":"AntMan and the Wasp: Qunatumania","year":2023,"img":"../../../assets/movies/1.jpg","img2":"../../../assets/movies/1-2.jpg",
            "category":["Fantasy","Action","Adventure"],"time":"2h 5m","rate":6.1,"releaseDate":"February 17,2023",
            "KeyWords": ["Ant Man","Marvel","AntMan and the Wasp","Qunatumania","AntMan and the Wasp: Qunatumania","2023"]},

        {"id":2,"name":"Guardians of the Galaxy Vol. 3","year":2023,"img":"../../../assets/movies/2.jpeg","img2":"../../../assets/movies/2-2.jpg",
            "category":["Popular","fantasy"],"time":"2h 29m","rate":7.9,"releaseDate":"May 5,2023",
            "KeyWords": ["Guardians","Marvel","Guardians of the Galaxy","Qunatumania","Guardians of the Galaxy Vol. 3","2023"]},

        {"id":3,"name":"Oppenheimer","year":2023,"img":"../../../assets/movies/3.jpg","img2":"../../../assets/movies/3-2.jpg",
            "category":["Popular","Drama","History","Biography","Adventure"],"time":"3h","rate":8.4,"releaseDate":"July 21,2023",
            "KeyWords": ["Oppenheimer","2023"]},

        {"id":4,"name":"Aquaman and the Lost Kingdom","year":2023,"img":"../../../assets/movies/4.jpg","img2":"../../../assets/movies/4-2.jpg",
            "category":["Fantasy","Action","Adventure"],"time":"2h 4m","rate":5.6,"releaseDate":"December 22,2023",
            "KeyWords": ["Aquaman","Aquaman 2","DC","Qunatumania","Aquaman and the Lost Kingdom","2023"]},
            
        {"id":5,"name":"The Flash","year":2023,"img":"../../../assets/movies/5.jpg","img2":"../../../assets/movies/5-2.jpg",
            "category":["Fantasy","Action","Adventure"],"time":"2h 24m","rate":6.7,"releaseDate":"Juny 16,2023",
            "KeyWords": ["Flash","Flash 2023","DC","The Flash","2023"]},

        {"id":6,"name":"Uncharted ","year":2022,"img":"../../../assets/movies/6.jpg","img2":"../../../assets/movies/6-2.jpg",
            "category":["Action","Adventure"],"time":"1h 56m","rate":6.3,"releaseDate":"February 18,2022",
            "KeyWords": ["Uncharted","2022"]},

        {"id":7,"name":"Doctor Strange in the Multiverse of Madness","year":2022,"img":"../../../assets/movies/7.jpg","img2":"../../../assets/movies/7-2.jpg",
            "category":["Popular","Action","Adventure","Fantasy","Horror"],"time":"2h 6m","rate":6.9,"releaseDate":"May 6,2022",
            "KeyWords": ["Doctor Strange","Doctor Strange 2","Doctor Strange in the Multiverse of Madness","Marvel","2022"]},
    
        {"id":8,"name":"Kung Fu Panda 4","year":2024,"img":"../../../assets/movies/8.jpg","img2":"../../../assets/movies/8-2.jpg",
            "category":["Action","Adventure","Animation","Comedy","Upcomming"],"time":"1h 34m","rate":0.0,"releaseDate":"March 8,2024",
            "KeyWords": ["Kung Fu Panda","Kung Fu","Cartoon","Kung Fu Panda 4","Upcomming","2024"]},

        {"id":9,"name":"Transformers: Rise of the Beasts","year":2023,"img":"../../../assets/movies/9.jpg","img2":"../../../assets/movies/9-2.jpg",
        "category":["Popular","Action","Adventure","Sci-Fi"],"time":"2h 7m","rate":6.0,"releaseDate":"June 9,2023",
        "KeyWords": ["Transformers","Transformers 6","Cartoon","Transformers Rise of the Beasts","2023"]},

        {"id":10,"name":"Spider-Man: No Way Home","year":2021,"img":"../../../assets/movies/10.jpg","img2":"../../../assets/movies/10-2.jpg",
        "category":["Popular","Action","Adventure","Fantasy"],"time":"2h 28m","rate":8.2,"releaseDate":"December 17,2021",
        "KeyWords": ["Spider-Man","Spider-Man No Way Home","Cartoon","Spider-Man: No Way Home","2021","Marvel"]},

        {"id":11,"name":"The Garfield Movie","year":2024,"img":"../../../assets/movies/11.jpg","img2":"../../../assets/movies/11-2.jpg",
            "category":["Animation","Upcomming","Comedy","Adventure"],"time":"2h 5m","rate":0.0,"releaseDate":"May 1,2024",
            "KeyWords": ["Garfield","The Garfield","The Garfield Movie","2024","upcomming","Comming Soon"]},

        {"id":12,"name":"Sonic the Hedgehog","year":2020,"img":"../../../assets/movies/12.jpg","img2":"../../../assets/movies/12-2.jpg",
        "category":["Action","Comedy","Adventure"],"time":"1h 39m","rate":6.5,"releaseDate":"February 12,2020",
        "KeyWords": ["Sonic","Sonic 1","Sonic the Hedgehog","2020"]},

        {"id":13,"name":"Sonic the Hedgehog 2","year":2022,"img":"../../../assets/movies/13.jpg","img2":"../../../assets/movies/13-2.jpg",
        "category":["Popular","Action","Comedy","Adventure"],"time":"2h 2m","rate":6.5,"releaseDate":"April 1,2022",
        "KeyWords": ["Sonic","Sonic 2","Sonic the Hedgehog","Sonic  the Hedgehog 2","2022"]},

        {"id":14,"name":"Venom: Let There Be Carnge","year":2021,"img":"../../../assets/movies/14.jpg","img2":"../../../assets/movies/14-2.jpg",
        "category":["Action","Sci-fi","Triller"],"time":"2h 37m","rate":5.9,"releaseDate":"October 1,2021",
        "KeyWords": ["Venom","Venom 2","Venom: Let There Be Carnge","Marvel","2021"]},

        {"id":15,"name":"The Batman","year":2022,"img":"../../../assets/movies/15.jpg","img2":"../../../assets/movies/15-2.jpg",
        "category":["Action","Crime","Drama"],"time":"2h 56m","rate":7.8,"releaseDate":"March 4,2022",
        "KeyWords": ["Batman","Batman 2022","The Batman","DC","2022"]},

        {"id":16,"name":"Morbius","year":2022,"img":"../../../assets/movies/16.jpg","img2":"../../../assets/movies/16-2.jpg",
        "category":["Action","Adventure","Horror"],"time":"1h 44m","rate":5.2,"releaseDate":"March 10,2022",
        "KeyWords": ["Morbius","Marvel","2022"]},

        {"id":17,"name":"Tenet","year":2020,"img":"../../../assets/movies/17.jpg","img2":"../../../assets/movies/17-2.jpg",
        "category":["Action","Sci-fi","Triller"],"time":"2h 30m","rate":7.3,"releaseDate":"August 26,2020",
        "KeyWords": ["Tenet","2020"]},

        {"id":18,"name":"The Matrix Resurrections","year":2021,"img":"../../../assets/movies/18.jpg","img2":"../../../assets/movies/18-2.jpg",
        "category":["Action","Sci-fi"],"time":"2h 28m","rate":5.7,"releaseDate":"December 22,2021",
        "KeyWords": ["Matrix","The Matrix","Matrix 2021","The Matrix Resurrections","2021"]},

        {"id":19,"name":"Spider-Man: Across the Spider-Verse","year":2023,"img":"../../../assets/movies/19.jpg","img2":"../../../assets/movies/19-2.jpg",
        "category":["Popular","Action","Adventure","Animation","Family"],"time":"2h 20m","rate":8.6,"releaseDate":"June 2,2023",
        "KeyWords": ["Spider Man","Spider Man Across the Spider Verse","Spider-Man: Across the Spider-Verses","2023"]},

        {"id":20,"name":"Jumanji: The Next Level","year":2019,"img":"../../../assets/movies/20.jpg","img2":"../../../assets/movies/20-2.jpg",
        "category":["Action","Adventure","Comedy"],"time":"2h 3m","rate":6.7,"releaseDate":"December 13,2019",
        "KeyWords": ["Jumanji","Jumanji 2","Jumanji: The Next Level","2019"]},

        {"id":21,"name":"Mortal Kombat","year":2021,"img":"../../../assets/movies/21.jpg","img2":"../../../assets/movies/21-2.jpg",
        "category":["Action","Adventure","Fantasy"],"time":"1h 50m","rate":6.0,"releaseDate":"April 23,2021",
        "KeyWords": ["Mortal","Mortal Kombat","2021"]},

        {"id":22,"name":"Despicable Me 4","year":2024,"img":"../../../assets/movies/22.jpg","img2":"../../../assets/movies/22-2.jpg",
        "category":["Comedy","Adventure","Animation","Upcomming"],"time":"1h 50m","rate":0.0,"releaseDate":"July 3,2024",
        "KeyWords": ["Minions","Despicable Me 4","2024","Upcomming"]},

        {"id":23,"name":"Inside Out 2","year":2024,"img":"../../../assets/movies/23.jpg","img2":"../../../assets/movies/23-2.jpg",
        "category":["Comedy","Adventure","Animation","Upcomming"],"time":"1h 40m","rate":0.0,"releaseDate":"Juny 14,2024",
        "KeyWords": ["Inside Out","Inside Out 2","2024","Upcomming"]},

        {"id":24,"name":"Deadpool & Wolverine","year":2024,"img":"../../../assets/movies/24.jpg","img2":"../../../assets/movies/24-2.jpg",
        "category":["Comedy","Action","Sci-Fi","Upcomming"],"time":"2h 20m","rate":0.0,"releaseDate":"July 26,2024",
        "KeyWords": ["Deadpool","Wolverine","Deadpool 3","X Man","Deadpool & Wolverine","2024","Upcomming"]},

        {"id":25,"name":"Sonic the Hedgehog 3","year":2024,"img":"../../../assets/movies/25.jpg","img2":"../../../assets/movies/25-2.jpg",
        "category":["Comedy","Action","Adventure","Upcomming"],"time":"2h 10m","rate":0.0,"releaseDate":"December 18,2024",
        "KeyWords": ["Sonic","Sonic 3","Sonic the Hedgehog","Sonic the Hedgehog 3","2024","Upcomming"]},

        {"id":26,"name":"Hotel Transylvania: Transformania","year":2022,"img":"../../../assets/movies/26.jpg","img2":"../../../assets/movies/26-2.jpg",
        "category":["Comedy","Animation","Adventure","Family"],"time":"1h 27m","rate":6.0,"releaseDate":"January 13,2022",
        "KeyWords": ["Hotel Transylvania","Hotel Transylvania 4","Hotel Transylvania Transformania","Hotel Transylvania: Transformania","2022"]},

        {"id":27,"name":"Puss in Boots: The Last Wish","year":2022,"img":"../../../assets/movies/27.jpg","img2":"../../../assets/movies/27-2.jpg",
        "category":["Comedy","Animation","Action","Family"],"time":"1h 42m","rate":7.8,"releaseDate":"December 21,2022",
        "KeyWords": ["Puss in Boots","Puss in Boots: The Last Wish","2022"]},
        

    ];

    getMovies(){
        return this.movies;
    }

}