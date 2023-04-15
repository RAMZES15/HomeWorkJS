'use strict'

let playList = [

    {
        author: "LED ZEPPELIN",
        songName: "STAIRWAY TO HEAVEN",
        song: 'https://ts01.flac.pw/mp3/78556.mp3',
        img: 'https://i-tsmusic.com/vk-cache/160/c855220!v855220085!2575ac!4_PjkjfgX9o.webp',
    },

    {
        author: "QUEEN",
        songName: "BOHEMIAN RHAPSODY",
        song: 'https://ts01.flac.pw/mp3/30007.mp3',
        img: 'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/cd/8a/82/cd8a82fe-0767-3824-3d30-4e64ecc248de/source/160x160bb.webp',
    },

    {
        author: "LYNYRD SKYNYRD",
        songName: "FREE BIRD",
        song: 'https://now.morsmusic.org/load/1942363898/Lynyrd_Skynyrd_-_Free_Bird_(musmore.com).mp3',
        img: 'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/57/7c/6b/577c6b61-992d-736b-c4df-1821394ddd6f/06UMGIM04103.rgb.jpg/160x160bb.webp',
    },

    {
        author: "DEEP PURPLE",
        songName: "SMOKE ON THE WATER",
        song: 'https://ts01.flac.pw/mp3/322.mp3',
        img: 'https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/c0/2f/96/c02f9609-287a-2781-0ac5-9915d6b5fd9f/source/160x160bb.webp',
    },

    {
        author: "JIMI HENDRIX",
        songName: "ALL ALONG THE WATCHTOWER",
        song: 'https://now.morsmusic.org/load/320188725/The_Jimi_Hendrix_Experience_-_All_Along_the_Watchtower_(musmore.com).mp3',
        img: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ea/a8/bf/eaa8bf29-2909-905d-4748-a28c91df2208/source/260x260cc-85.jpg',
    },

    {
        author: "AC/DC",
        songName: "BACK IN BLACK",
        song: 'https://ts01.flac.pw/mp3/337.mp3',
        img: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/df/2e/3b/df2e3b04-8315-ac8c-290e-b11a2f8802ff/source/160x160bb.webp',
    },

    {
        author: "QUEEN",
        songName: "WE WILL ROCK YOU",
        song: 'https://ts01.flac.pw/mp3/24798.mp3',
        img: 'https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/f2/1e/36/f21e3619-2f83-1f59-59e7-991764a84176/source/160x160bb.webp',
    },

    {
        author: "METALLICA",
        songName: "ENTER SANDMAN",
        song: 'https://ts01.flac.pw/mp3/11790.mp3',
        img: 'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/f0/a2/22/f0a2222e-15f9-df46-e6e0-e8b0b53aad57/source/160x160bb.webp',
    }

];

if(playList.length >= parsePlayList()){
    savePlayList()
}

function savePlayList() {
    const JsonPlayList = JSON.stringify(playList);
    localStorage.setItem('playList', JsonPlayList);
}

function parsePlayList() {
    const JsonPlayList = localStorage.getItem('playList');
    const parseList = JSON.parse(JsonPlayList);
    return parseList;
}

function addPlayList(author = 'Лев', songName = 'Зараз я вам покажу як лев ричить', song = 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3', img = './assets/img/img160X160.png') {
    const newSong = {
        author: author,
        songName: songName,
        song: song,
        img: img,
    }
    playList = parsePlayList();
    playList.push(newSong);
    savePlayList();
    loadMusicList()
}

function openMusic(){
    const overlay = document.getElementById('overlay').classList.toggle('--open')
    const music = document.getElementById('music').classList.toggle('--open')
}
document.getElementById('close').addEventListener('click', openMusic)
document.getElementById('musicBtn').addEventListener('click', openMusic)


// function timeAudio(item){
//     const audio = new Audio(item.song); 
//         audio.addEventListener('loadedmetadata', () => {
//             const minutes = Math.floor(audio.duration / 60);
//             let seconds = Math.floor(audio.duration % 60);
//             if (seconds < 10) {
//                 seconds += '0';
//             }
//             let time = `${minutes}:${seconds}`
//             return time
//     });
// }

// function loadMusicList(){
//     const musicList = document.getElementById('musicList');
//     musicList.innerHTML = ''
    
//     parsePlayList().forEach((item, index) => {
//             musicList.insertAdjacentHTML('beforeend', 
//             `<li class="music__item song" id="${index}">
//             <span class="song__number">${index}</span>
//             <div class="song__wrapper" id="wrapper${index}">
//                 <img class="song__img" src="${item.img}" alt="photo">
//             </div>
//             <div class="song__info">
//                 <span class="song__name">${item.songName}</span>
//                 <span class="song__group">${item.author}</span>
//                 <span class="song__time">${timeAudio(item)}</span>
//             </div>
//             </li>`
//             );
//             const listItem = musicList.querySelector(`li[id="${index}"]`);
//             listItem.addEventListener('click', () => {
//                 playSongById(index - 1 )
//                 removePlayPause(index - 1 )
//             }); 
//         index++
//     });

// }
function timeAudio(item) {
    return new Promise((resolve) => {
        const audio = new Audio(item.song);
        audio.addEventListener('loadedmetadata', () => {
            const minutes = Math.floor(audio.duration / 60);
            let seconds = Math.floor(audio.duration % 60);
            if (seconds < 10) {
                seconds = `0${seconds}`;
            }
            const time = `${minutes}:${seconds}`;
            resolve(time);
        });
    });
}

async function loadMusicList() {
    const musicList = document.getElementById('musicList');
    musicList.innerHTML = '';

    const playList = await parsePlayList();
    for (let index = 0; index < playList.length; index++) {
        const item = playList[index];
        const time = await timeAudio(item);

        musicList.insertAdjacentHTML('beforeend', 
            `<li class="music__item song" id="${index}">
                <span class="song__number">${index + 1}</span>
                <div class="song__wrapper" id="wrapper${index}">
                    <img class="song__img" src="${item.img}" alt="photo">
                </div>
                <div class="song__info">
                    <span class="song__name">${item.songName}</span>
                    <span class="song__group">${item.author}</span>
                    <span class="song__time">${time}</span>
                </div>
            </li>`
        );
        const listItem = musicList.querySelector(`li[id="${index}"]`);
        listItem.addEventListener('click', () => {
            playSongById(index)
            removePlayPause(index)
        }); 
    }
}
loadMusicList()

function removePlayPause(id) {
    const listMusic = document.querySelectorAll('li');
    listMusic.forEach((li, index) => { 
        if (index == id) { 
            document.getElementById('wrapper' + (index)).classList.add('--pause')
        } else {
            document.getElementById('wrapper' + (index)).classList.remove('--play')
            document.getElementById('wrapper' + (index)).classList.remove('--pause')
        }
    });
}

let playPausa = false
function playSongById(pushSonId) {
    const audio = document.getElementById('audio');
    if(!(audio.src == parsePlayList()[pushSonId].song)){
        audio.src = parsePlayList()[pushSonId].song;
        audio.play()
        playPausa = true
    }else{
        if(playPausa){
            audio.pause()
            playPausa = false
            document.getElementById('wrapper' + (pushSonId) ).classList.add('--play')
        }else {
            audio.play()
            playPausa = true
            document.getElementById('wrapper' + (pushSonId) ).classList.add('--pause')
            document.getElementById('wrapper' + (pushSonId) ).classList.remove('--play')
        }
    }
    
}

function openForm(){
    document.getElementById('form').classList.toggle('--open')
    document.getElementById('overlay-form').classList.toggle('--open')
}

document.getElementById('close-form').addEventListener('click', openForm)
document.getElementById('openForm').addEventListener('click', openForm)

function addSongToList(){
    let author = document.getElementById('author').value || 'Лев';
    let songName = document.getElementById('songName').value || 'Зараз я вам покажу як лев ричить';
    let song = document.getElementById('song').value || 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3';
    let img = document.getElementById('img').value || './assets/img/img160X160.png';

    addPlayList(author, songName, song, img);

    document.getElementById('author').value = '';
    document.getElementById('songName').value = '';
    document.getElementById('song').value = '';
    document.getElementById('img').value = '';
}

document.getElementById('addSong').addEventListener('click', addSongToList)

const hint = [
    {
        author: "Eminem",
        img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/01/be/e0/01bee04f-a126-4f42-fa54-ff3b37c97639/06UMGIM16683.rgb.jpg/160x160bb.webp",
        song: "https://ts03.flac.pw/mp3/11573.mp3",
        songName: "Mockingbird",
    },
    {
        author: "Gorillaz",
        img: "https://is4-ssl.mzstatic.com/image/thumb/Music/v4/be/1b/01/be1b0107-3c4f-e111-915a-a61da7c4b7af/0094635559453_1500x1500_300dpi.jpg/160x160bb.webp",
        song: "https://ts01.flac.pw/mp3/1578.mp3",
        songName: "Feel Good Inc",
    },
    {
        author: "Slipknot",
        img: "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/f9/8c/6a/f98c6a9e-f1a3-860e-0d4a-dd5378f317a6/source/160x160bb.webp",
        song: "https://ts01.flac.pw/mp3/22122.mp3",
        songName: "Unsainted",
    }
]

console.log('Підказка з посиланнями на треки які можна додати до списку',hint)


