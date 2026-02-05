const music = new Audio('songs/7_Knaalan.mp3');
// music.play();


const songs = [

    {
        id: 1,
        songName: ' 7 knaalan <br><div class="subtitle">Happy Raikoti</div></h5>',
        poster: "song posters/_1_7 knaalan.jpg",
        src: "songs/7 knallan.mp3"
    },
    {
        id: 2,
        songName: ' Ainak <br><div class="subtitle">Gulab sindhu</div></h5>',
        poster: "song posters/_2_Ainak.jpg",
        src: "songs/Ainak.mp3"
    },
    {
        id: 3,
        songName: ' Baapu <br><div class="subtitle">Amrinder Gill</div></h5>',
        poster: "song posters/baapu.jpg",
        src: "songs/Bappu.mp3"
    },
    {
        id: 4,
        songName: ' Backbenchers <br><div class="subtitle">Rattan chahal</div></h5>',
        poster: "song posters/backbenchers.jpg",
        src: "songs/Backbenchers.mp3"
    }, 
    {
        id: 5,
        songName: ' Block<br><div class="subtitle">Dhanda Nyoliwala</div></h5>',
        poster: "song posters/block.jpg",
        src: "songs/Block.mp3"
    },
    {
        id: 6,
        songName: ' Bamana da Munda<br><div class="subtitle">Jatin Sharma</div></h5>',
        poster: "song posters/bhamna da munda.jpg",
        src: "songs/Baman_da_munda.mp3"
    },
    {
        id: 7,
        songName: ' Bille Bille Naina Waliye<br><div class="subtitle">Khan bhani</div></h5>',
        poster: "song posters/bille bille.jpg",
        src: "songs/Bille_Bille_Naina_Waliye.mp3"
    },
    {
        id: 8,
        songName: ' Blessing of brother<br><div class="subtitle">Gagan kokri</div></h5>',
        poster: "song posters/blessing of brother.jpg",
        src: "songs/Blessings_Of_Brother.mp3"
    },
    {
        id: 9,
        songName: ' college yadda da kafla<br><div class="subtitle">Aman Yanak</div></h5>',
        poster: "song posters/aman yanak college.jpg",
        src: "songs/College_Yaddan_Da_Kaffala.mp3"
    },
    {
        id: 10,
        songName: ' Regret<br><div class="subtitle">Dhanda Nyoliwala</div></h5>',
        poster: "song posters/regret.jpg",
        src: "songs/Dhanda Nyoliwala - Regret (Official Music Video) New Sad Song 2023.mp3"
    },
    {
        id: 11,
        songName: ' Dil ka kya kare sahib<br><div class="subtitle">Sunny deol</div></h5>',
        poster: "song posters/dil_ka_kya_kre.jpg",
        src: "songs/Dil Ka Kya Kare Saheb Jeet Sunny Deol, Tabu Kavita Krishnamurthy 90s Hits.mp3"
    },
    {
        id: 12,
        songName: ' Dollar<br><div class="subtitle">Sabi Bhinder</div></h5>',
        poster: "song posters/dollar.jpg",
        src: "songs/Dollar _ Sabi Bhinder (Full Video) _ The Kidd _ Jashan Nanarh _ Songs 2020 _ Jatt Life Studios.mp3"
    },
    {
        id: 13,
        songName: ' Feelings<br><div class="subtitle">Summit bhati</div></h5>',
        poster: "song posters/feeling.jpg",
        src: "songs/Feelings - Sumit Bhatti (Official Video) Koi Supna Ban Ke Aaja Juke Dock.mp3"
    },
    {
        id: 14,
        songName: ' Hui Ankh nmm<br><div class="subtitle">Old singer</div></h5>',
        poster: "song posters/hui ankh naam.jpg",
        src: "songs/Hui Aankh Nam Lyrical Video Saathi Anuradha Paudwal Aditya Pancholi, Varsha Usgaonkar.mp3"
    },
    {
        id: 15,
        songName: ' Insomnia<br><div class="subtitle">Sippy Gill</div></h5>',
        poster: "song posters/insomnia.jpg",
        src: "songs/Insomnia Sippy Gill Himanshi Khurana Latest Punjabi Song 2014 Speed Records.mp3"
    },
    {
        id: 16,
        songName: ' Ishq m tumhe hum<br><div class="subtitle">old singer</div></h5>',
        poster: "song posters/ishq m tumhe kya btain.jpg",
        src: "songs/Ishq Mein Tumhein Kya Batayein Video Song (Remix) Bewafa Sanam Sonu Nigam Feat. Kishan Kumar.mp3"
    },
    {
        id: 17,
        songName: ' Jaan-E-zigar Jaane Mnn<br><div class="subtitle">old singer</div></h5>',
        poster: "song posters/jaan E ziagr.jpg",
        src: "songs/Jaan-E-Zigar Jaaneman Lyrical Video Aashiqui Rahul Roy, Anu Agarwal.mp3"
    },
    {
        id: 18,
        songName: ' jo bhi kasme<br><div class="subtitle">old singer</div></h5>',
        poster: "song posters/jo bhi kasme.jpg",
        src: "songs/Jo Bhi Kasmein Full Video - Raaz Bipasha Basu Dino Morea Udit Narayan Alka Yagnik.mp3"
    },
    {
        id: 19,
        songName: ' kyoo meri rahen mujhse pooche<br><div class="subtitle">Arjit singh</div></h5>',
        poster: "song posters/kyo meri raahe.jpg",
        src: "songs/Kyun Meri Raahein Mujhse Pooche Ghar Kaha Hai Full Song with Lyrics Shafqat A Ali Akshay K.mp3"
    },
    {
        id: 20,
        songName: ' Chaand<br><div class="subtitle">Masoom Sharma</div></h5>',
        poster: "song posters/chaand.jpg",
        src: "songs/Latest Haryanvi Songs Haryanvi 2022 Chand Masoom Sharma Nidhi Sharma NEW HARYANVI SONG CHAND.mp3"
    },
    {
        id: 21,
        songName: ' Milte Milte Hasin Wadiyon M<br><div class="subtitle">Old singer</div></h5>',
        poster: "song posters/milte milte.jpg",
        src: "songs/Milte Milte Haseen Wadiyon Mein Lyrical Video Junoon Vipin Sachdevan,Anuradha PPooja B,Avinash.mp3"
    },
    {
        id: 22,
        songName: ' Sun fer<br><div class="subtitle">khan bhani</div></h5>',
        poster: "song posters/sun fer.jpg",
        src: "songs/New Punjabi Songs 2021 _ Sun Fer _ Khan Bhaini (Official Video)  Latest Punjabi Songs 2021.mp3"
    },
    {
        id: 23,
        songName: ' Kareeb<br><div class="subtitle">Shivjot</div></h5>',
        poster: "song posters/kareeb.jpg",
        src: "songs/New Punjabi Songs 2022 _ KAREEB (Official Video) Shivjot Ft Sudesh Kumari_ Latest Punjabi Songs 2022.mp3"
    },
    {
        id: 24,
        songName: ' rog<br><div class="subtitle">ladi singh</div></h5>',
        poster: "song posters/rog.jpg",
        src: "songs/New Punjabi Songs Rog Full Lyrical Song Ladi Singh Latest Punjabi Songs.mp3"
    },
    {
        id: 25,
        songName: ' Alan Waker- faded<br><div class="subtitle">Alan Waker</div></h5>',
        poster: "song posters/alan_waker.jpg",
        src: "songs/Alan Walker - Faded (Lyrics).mp3"
    },
    {
        id: 26,
        songName: ' o dil tod k hasti ho mera<br><div class="subtitle">krishan kumar</div></h5>',
        poster: "song posters/o dil tod k hasti h.jpg",
        src: "songs/O Dil Tod Ke Hansti Ho Mera Remix Video Song _ Bewafa Sanam _ Kishan Kumar _ Udit Narayan.mp3"
    },
    {
        id: 27,
        songName: ' Panjeban<br><div class="subtitle">Shivjot</div></h5>',
        poster: "song posters/panjabean.jpg",
        src: "songs/PANJEBAN  _ Shivjot & Gurlez Akhtar _ The Boss _ Punjabi Song.mp3"
    },
    {
        id: 28,
        songName: ' Patla Sa chora<br><div class="subtitle">masoom sharma</div></h5>',
        poster: "song posters/patla sa chora.jpg",
        src: "songs/Patla Sa Chhora _ Haryanvi Ragni _ Sasre Ibb Mne Nhi Jaana _ Masoom Sharma Hit Ragni.mp3"
    },
    {
        id: 29,
        songName: ' Broken Heart<br><div class="subtitle">Sippy gill</div></h5>',
        poster: "song posters/broken heart.jpg",
        src: "songs/BROKEN HEART (Official Video) SIPPY GILL Latest Punjabi Songs 2024 T-Series.mp3"
    }
]




Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})




// master play edit

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');

    }

});





const makeallplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) =>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeallBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}




let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id-1;
        music.src = songs[index].src;
        poster_master_play.src = songs[index].poster;
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        music.play();
        
        let songTitles = songs.filter((els)=>{
            return els.id == index+1;
        });
        
        songTitles.forEach(elss=>{
            let{songName} =elss;
            title.innerHTML= songName;
        })
        
        
        makeallBackground();
        Array.from(document.getElementsByClassName('songItem'))[index].style.background = "rgb(105, 105, 105, .1)"
        makeallplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
});




let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`; 
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`; 



    let progressbar = parseInt((music_curr / music_dur)*100)
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});


seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');


vol.addEventListener('change', ()=>{

    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    else if (vol.value > 0 && vol.value <= 50) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    else if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `calc(${vol_a}% - 5px)`;
    music.volume = vol_a / 100;
});



let back = document.getElementById('back');
let next = document.getElementById('next');


back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 0) {
        index = Array.from(document.getElementsByClassName('songItem')).length-1;
    }
    music.src = songs[index].src;
        poster_master_play.src = songs[index].poster;
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        music.play();
        
        let songTitles = songs.filter((els)=>{
            return els.id == index+1;
        });
        
        songTitles.forEach(elss=>{
            let{songName} =elss;
            title.innerHTML= songName;
        })
        
        
        makeallBackground();
        Array.from(document.getElementsByClassName('songItem'))[index].style.background = "rgb(105, 105, 105, .1)"
        makeallplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click', ()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length ) {
        index  =1;
    }

    music.src = songs[index].src;
        poster_master_play.src = songs[index].poster;
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        music.play();
        
        let songTitles = songs.filter((els)=>{
            return els.id == index+1;
        });
        
        songTitles.forEach(elss=>{
            let{songName} =elss;
            title.innerHTML= songName;
        })
        
        
        makeallBackground();
        Array.from(document.getElementsByClassName('songItem'))[index].style.background = "rgb(105, 105, 105, .1)"
        makeallplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})



// its for left-right scrolling of pop songs or pop artists



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');

let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft +=330;
})

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -=330;
})




let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');

let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft +=330;
})

pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -=330;
})










