const musicContainer=document.getElementById('audio-container');
const playbtn= document.getElementById('play');
const prevbtn=document.getElementById('prev');
const nextbtn=document.getElementById('next');
const audio=document.getElementById('audio');
const progress=document.getElementById('progress');
const title=document.getElementById('title');
const cover=document.getElementById('cover');

const songs=['BAROOD_WARGI','Ek_Raat','musicp','NAAGNI','Pagal_Shayar','Tu_Aake_Dekhle',]

let songindex=0;


//load songs

loadsong(songs[songindex]);

function loadsong(song){
    title.innerText=song;
    audio.src=`music/${song}.mp3`;
    cover.src=`images/${song}.jpg`;

}


//play function 
        
function playsong(){
    musicContainer.classList.add('play');
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}


//pause song


function pausesong(){
    musicContainer.classList.remove('play');
    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}



//prev function 
function prevsong(){
songindex--;;
if(songindex<0){
    songindex=songs.length-1;
}
 loadsong(songs[songindex]);
 playsong();;

}

//next song
function nextsong(){
    songindex++;;
    if(songindex>songs.length-1){
        songindex=0;;
    }
     loadsong(songs[songindex]);
     playsong();;
    }



    //update progress bar

    function updateprogressbar(e){
        const{duration,currentTime}=e.srcElement
        const progressPercent =(currentTime/duration) *100;
        progress.style.width=`${progressPercent}%`;
    }

    //setprogress function
function setprogress(){
    const width=this.clientWidth
    const clicX=e.offsetX
    const duration=audio.duration


    audio.currentTime =(clickX/width)* duration;;
}

//eventlistener on playbtn

playbtn.addEventListener('click',()=>{
    const isPlaying=musicContainer.classList.contains('play');
    if(isPlaying){
        pausesong();;
    }else{
        playsong();
    }
});

//change song

prevbtn.addEventListener('click',prevsong);
nextbtn.addEventListener('click',nextsong);

//time,song update

audio.addEventListener('timeupdate',updateprogress);


//click on progress

progress-container.addEventListener('click',setprogress);

//song end

audio.addEventListener('ended',nextsong);



//play song of that image clicked

function playthis(a){
    let songindex=a;
    loadsong(songs[songindex])
    playsong();
}
