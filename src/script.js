
// Array de las canciones para generar las cards

const songs = [
    {
        name: 'Psycho',
        artist: 'Red Velvet',
        imgSong: '../img/psycho.jpg',
        artistImg: '../img/artist/redvelvet.jpg',
        id: 1,
        music: '../music/psycho.mp3',
    },
    {
        name: 'Want U Back',
        artist: 'Cher Lloyd',
        imgSong: '../img/WantUBack.jpg',
        artistImg: '../img/artist/cherlloyd.jpg',
        id: 2,
        music: '../music/want u back.mp3',
    },
    {
        name: 'telepatia',
        artist: 'Kali Uchis',
        imgSong: '../img/telepatia.jpg',
        artistImg: '../img/artist/kaliuchis.jpg',
        id: '3',
        music: '../music/telepatia.mp3',
    },
    {
        name: 'Talking Body',
        artist: 'Tove Lo',
        imgSong: '../img/bodies.png',
        artistImg: '../img/artist/tovelo.jpg',
        id: 4,
        music: '../music/dadada.mp3',
    },
    {
        name: 'Life Sux (Sped up Ver.)',
        artist: 'Leah Kate',
        imgSong: '../img/lifesux.jpg',
        artistImg: '../img/artist/leahkate.jpg',
        id: 5,
        music: '../music/lifesux.mp3',
    },
    {
        name: 'Mas Fuerte',
        artist: 'Greeicy',
        imgSong: '../img/FuerteBG.jpg',
        artistImg: '../img/artist/greeicy.jpg',
        id: 6,
        music: '../music/masfuerte.mp3',
    },
    {
        name: 'By Your Side (feat. RAYE) (Cut Ver.)',
        artist: 'Jonas Blue',
        imgSong: '../img/AnimeCouple.jpg',
        artistImg: '../img/artist/jonasblue.jpg',
        id: 7,
        music: '../music/By Your Side.mp3',
    },
    {
        name: 'Make Me Move (James Roche Remix) (feat. Karra)',
        artist: 'Culture Code',
        imgSong: '../img/makememove.jpg',
        artistImg: '../img/artist/karra.png',
        id: 8,
        music: '../music/memove.mp3',
    },
    {
        name: 'Eyes Half Closed',
        artist: 'Crywolf',
        imgSong: '../img/EyesHalfClosed.jpg',
        artistImg: '../img/artist/crywolf.jpg',
        id: 9,
        music: '../music/EyesHalfClosed.mp3',
    },
    {
        name: 'Eyes Wide Shut (with Avril Lavigne)',
        artist: 'ILLENIUM',
        imgSong: '../img/EyeswithShut.png',
        artistImg: '../img/artist/illenium.png',
        id: 10,
        music: '../music/EyesWithShut.mp3',
    },


    {
        name: 'On & On (feat. Daniel Levi)',
        artist: 'Cartoon',
        imgSong: '../img/cartoon.jpg',
        artistImg: '../img/artist/cartoon.jpg',
        id: 11,
        music: '../music/cartoon.mp3',
    },
    {
        name: 'In The Name Of Love (feat. Bebe Rexha)',
        artist: 'Martin Garrix',
        imgSong: '../img/inthename.jpg',
        artistImg: '../img/artist/martingarrix.jpg',
        id: 12,
        music: '../music/inthename.mp3',
    },
    {
        name: 'Hot N Cold',
        artist: 'Katy Perry',
        imgSong: '../img/hotcold.jpg',
        artistImg: '../img/artist/katyperry.jpg',
        id: 13,
        music: '../music/hotcold.mp3',
    },
    {
        name: 'Get Him Back',
        artist: 'Olivia Rodrigo',
        imgSong: '../img/gethim.jpg',
        artistImg: '../img/artist/olivia.jpg',
        id: 14,
        music: '../music/gethim.mp3',
    },
    {
        name: 'Friends (feat. Anne Marie)',
        artist: 'Marshmello',
        imgSong: '../img/friends.jpg',
        artistImg: '../img/artist/marshmello.jpg',
        id: 15,
        music: '../music/friends.mp3',
    },
    {
        name: 'Traitor',
        artist: 'Olivia Rodrigo',
        imgSong: '../img/traitor.jpg',
        artistImg: '../img/artist/olivia.jpg',
        id: 16,
        music: '../music/traitor.mp3',
    },
    {
        name: "Don't Let Me Down (Illenium Remix)",
        artist: 'The Chainsmokers',
        imgSong: '../img/letme.jpg',
        artistImg: '../img/artist/chain.jpg',
        id: 17,
        music: '../music/letme.mp3',
    },
    {
        name: "Happier Than Ever (Edit)",
        artist: 'Billie Eilish',
        imgSong: '../img/happier.jpg',
        artistImg: '../img/artist/billie.jpg',
        id: 18,
        music: '../music/happierthanever.mp3',
    },
    {
        name: "10 Things I Hate About You (Sped Up)",
        artist: 'Leah Kate',
        imgSong: '../img/things.jpg',
        artistImg: '../img/artist/leahkate.jpg',
        id: 19,
        music: '../music/things.mp3',
    },
    {
        name: "Say Goodbye (feat. Marvin Divine)",
        artist: 'Unknown Brain',
        imgSong: '../img/say.png',
        artistImg: '../img/artist/brain.jpg',
        id: 20,
        music: '../music/SayGoodbye.mp3',
    },
];

localStorage.setItem("songs", JSON.stringify(songs));



//Funciones para la navegacion

const containerNav = document.querySelector('.containerNav');
const btnAbrir = document.getElementById('abrirNav');
const btnCerrarnav = document.getElementById('btnCerrar');

const navLinks = document.querySelectorAll('.nav_link');

btnAbrir.addEventListener('click', () => {
    containerNav.classList.add('show');
});

btnCerrarnav.addEventListener('click', () => {
    containerNav.classList.remove('show');
});

navLinks.forEach(nlink => {
    nlink.addEventListener('click', (e) => {
        navLinks.forEach(l => {
            l.classList.remove('active');
        });

        e.target.classList.add('active');
        containerNav.classList.remove('show');
    });
});

document.querySelectorAll('a[data-target]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Obtener el target de data-target
        const target = link.getAttribute('data-target');
        
        // Ocultar todas las secciones
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar la sección seleccionada
        const targetSection = document.getElementById(target);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

// Mostrar la primera sección por defecto
document.getElementById('section-main').classList.add('active');

//Generar cards para la seccion del main

const containerCards = document.getElementById('container-cards');

function generarCards(filteredSongs, container, cardClass, cardTemplateCallback) {
    container.innerHTML = '';

    filteredSongs.forEach((song, index) => {
        const div = document.createElement('div');
        div.classList.add(cardClass);
        div.classList.add('cardTrack');
        div.dataset.index = songs.indexOf(song);

        // Utiliza el callback para definir el contenido del innerHTML
        div.innerHTML = cardTemplateCallback(song);

        div.addEventListener('click', () => {
           // Usamos el índice original guardado en el data attribute
           const originalIndex = div.dataset.index;
           reproducirCancion(originalIndex);
        });

        container.append(div);
    });
}


// Obtener una lista única de artistas
function obtenerArtistasUnicos(songs) {
    const artistas = [];

    songs.forEach(song => {
        if (!artistas.some(artista => artista.name === song.artist)) {
            artistas.push({
                name: song.artist,
                imgArtist: song.artistImg // Asumiendo que tienes una imagen del artista
            });
        }
    });

    return artistas;
}

// Generar cards de artistas únicos
function generarCardsArtistas() {
    const artistContainer = document.querySelector('.artist-container');// Cambia esto por el contenedor correcto
    const artistas = obtenerArtistasUnicos(songs);

    artistContainer.innerHTML = '';

    artistas.forEach(artista => {
        const div = document.createElement('div');
        div.classList.add('artist-box');


        div.innerHTML = `
            <figure class="img-box">
                <img src="${artista.imgArtist}" alt="${artista.name} Imagen" class="img-style">
            </figure>
            <b>${artista.name}</b>
        `;

        artistContainer.append(div);
    });
}

generarCardsArtistas();

const artistContainer = document.querySelector('.artist-container');
const containerGrids = document.getElementById('container-grids');
const btnFilters = document.querySelectorAll('.btnFilter[data-target]');

btnFilters.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        btnFilters.forEach(btn => {
            btn.classList.remove('active');
        });

        

        link.classList.add('active');

        // Obtener el target de data-target
        const target = link.getAttribute('data-target');
        
        // Ocultar todas las secciones
        document.querySelectorAll('.gridC').forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar la sección seleccionada
        const targetSection = document.getElementById(target);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        if (artistContainer.classList.contains('active')) {
            containerGrids.classList.add('os');
        } else {
            containerGrids.classList.remove('os');
        }
    });
});


function templatePrincipal(song) {
    return `
        <figure class="figure-card">
            <img src="${song.imgSong}" alt="${song.name} Imagen" class="img-style">
        </figure>
        <div class="info-card">
            <b>${song.name}</b>
            <span class="artist-name">${song.artist}</span>
        </div>
    `;
}

function templateSecundario(song) {
    return `
        <div class="song-data">
            <figure class="figure-card">
                <img src="${song.imgSong}" alt="${song.name} Imagen" class="img-style">
            </figure>
             <div class="info-card">
                 <b>${song.name}</b>
                <span class="artist-name">${song.artist}</span>
             </div>
        </div>
        <button class="btnFavorite">
            <span class="material-icons-sharp">
                favorite_border
            </span>
        </button>
    `;
}

// Generar las cards en el primer contenedor con la primera plantilla
generarCards(songs, document.getElementById('container-cards'), 'song-card', templatePrincipal);

// Generar las cards en el segundo contenedor con una plantilla diferente
generarCards(songs, document.getElementById('containerSecon'), 'horizontal-card', templateSecundario);


//Filtros

const inputSearch = document.getElementById('searchSongs');

inputSearch.addEventListener('input', function () {
    const searchTerm = inputSearch.value.toLowerCase();

    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(searchTerm)
    );

    generarCards(filteredSongs, document.getElementById('container-cards'), 'song-card', templatePrincipal);
    generarCards(filteredSongs, document.getElementById('containerSecon'), 'horizontal-card', templateSecundario);
});


//Funciones del reproductor de musica


const audio = document.getElementById('audio');
const player = document.querySelector('.playerMusic');
const progressBar = document.getElementById('progressBar');
const progressContainer = document.getElementById('progressContainer');
const progressThumb = document.getElementById('progressThumb');

const btnPlay = document.getElementById('playBtn');
const playPauseIcon = document.getElementById('playIcon');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('previusBtn');
const btnAleatorio = document.getElementById('btnAleatorio');
const randomButton = document.getElementById('randomBtn');
const repeatButton = document.getElementById('repeatButton');
const currentTimeSpan = document.querySelector('.currentTime');
const totalTimeSpan = document.getElementById('totalTime');


let isPlaying = false;
let isDragging = false;
let currentSongIndex = 0;
let themeLigth = JSON.parse(localStorage.getItem('themeLigth')) || false;

let isRandom = false;
let isRepeating = false;

// Variable para determinar si se debe reproducir automáticamente
let shouldPlay = false;


const titulo = document.querySelector('#songName');
const artista = document.querySelector('#artistSpan');
const imgSong = document.querySelector('#imgSong');




// Función para manejar la repetición de la canción
repeatButton.addEventListener('click', () => {
    isRepeating = !isRepeating;

    isRandom = false;
    randomButton.classList.remove('active');

    if (isRepeating) {
        repeatButton.classList.add('active'); 
        audio.loop = true;
       
    } else {
        repeatButton.classList.remove('active');
        audio.loop = false;
    }
});


// Función para reproducir una canción aleatoria

btnAleatorio.addEventListener('click', () => {
    isRandom = !isRandom;

    randomButton.classList.add('active');
    if (isRepeating) {
        repeatButton.classList.remove('active'); 
        audio.loop = false;
    }


    playRandomSong();
    reproducirCancion(currentSongIndex);
});

function randomSong() {
    isRandom = !isRandom;
    isRepeating = false;
    audio.loop = false;
    repeatButton.classList.remove('active'); 

    if (isRandom) {
        randomButton.classList.add('active');
    } else {
        randomButton.classList.remove('active');
    }
}

function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    currentSongIndex = randomIndex;
}

function reproducirCancion(indice) {
    const cancion = songs[indice];
    if (cancion) {
        actualizarReproductor(cancion);
        guardarEstado(cancion);
        currentSongIndex = indice;
        audio.play(); // Asegúrate de que audio.src se haya establecido antes de llamar a play()
    }
}



function togglePlayPause() {
    if (isPlaying) {
        audio.pause(); // Pausar la canción
        playPauseIcon.textContent = 'pause'; // Cambiar al icono de play
    } else {
        const savedTime = parseFloat(localStorage.getItem('currentTime'));
        if (!isNaN(savedTime)) {
            audio.currentTime = savedTime; // Iniciar desde el tiempo guardado
        }

        audio.play(); // Reproducir la canción
        playPauseIcon.textContent = 'play_arrow'; // Cambiar al icono de pausa
    }
    isPlaying = !isPlaying; // Invertir el estado
}


function siguienteCancion() {
    if (isRandom == true) {
        playRandomSong();
    } else if (currentSongIndex < songs.length - 1) {
        currentSongIndex++;
    } else {
        currentSongIndex = 0;
    }
    
    reproducirCancion(currentSongIndex);
}

function anteriorCancion() {
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentSongIndex = songs.length - 1; // Si es la primera canción, vuelve a la última
    }
    reproducirCancion(currentSongIndex);
}

function guardarEstado(cancion) {
    localStorage.setItem('cancionActual', JSON.stringify(cancion));
    localStorage.setItem('currentSongIndex', currentSongIndex);
    
}

function actualizarReproductor(song) {
    audio.src = song.music;
    titulo.textContent = song.name;
    artista.textContent = song.artist;
    imgSong.src = song.imgSong;
    audio.currentTime = 0; // Resetear el currentTime al cargar una nueva canción
    localStorage.removeItem('currentTime'); // Limpiar el currentTime guardado
}
//Eventos del audio

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    // Formatear con dos dígitos
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = secs < 10 ? `0${secs}` : `${secs}`;

    return `${formattedMinutes}:${formattedSeconds}`;
}

// Funcion para la barra de progreso de la cancion

// Maneja el clic en la barra de progreso para ajustar el tiempo
progressContainer.addEventListener('click', function (event) {
    const width = this.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});


document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const rect = progressContainer.getBoundingClientRect();
        const width = rect.width;
        const clickX = event.clientX - rect.left;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
        updateProgress();
    }
});

function updateProgress() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    const thumbOffset = 5;
    progressBar.style.width = `${progressPercent}%`;
    progressThumb.style.left = `calc(${progressPercent}% - ${10 - thumbOffset}px)`; // Center the thumb
}

// Maneja el arrastre del thumb para ajustar el tiempo
progressThumb.addEventListener('mousedown', () => {
    isDragging = true;
    audio.pause(); // Pausar durante el arrastre
});


document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        // Verifica si el audio estaba en reproducción antes de comenzar el arrastre
        if (!audio.paused) {
            audio.play(); // Reanudar la reproducción si estaba en curso
        }
    }
});




// Evento para cargar la duración y el tiempo guardado
audio.addEventListener('loadedmetadata', function () {
    const duration = formatTime(audio.duration);
    totalTimeSpan.textContent = duration;

    // Cargar el tiempo guardado si existe
    const savedTime = parseFloat(localStorage.getItem('currentTime'));
    if (!isNaN(savedTime)) {
        audio.currentTime = savedTime; // Iniciar desde el tiempo guardado
    }

    // Solo reproducir si debería hacerlo
    if (shouldPlay) {
        audio.play();
    }
});



audio.addEventListener('timeupdate', function () {
    const currentTime = formatTime(audio.currentTime);
    currentTimeSpan.textContent = currentTime;

    localStorage.setItem('currentTime', audio.currentTime);
});

audio.addEventListener('timeupdate', updateProgress);

audio.addEventListener('canplay', function () {
    if (audio.currentTime > 0) {
        audio.play(); // Reproduce desde el tiempo guardado
    }
});


audio.addEventListener('ended', () => {
    if (!isRepeating && !isRandom) {
        if (currentSongIndex < songs.length - 1) {
            currentSongIndex++; // Avanza a la siguiente canción
        } else {
            currentSongIndex = 0; // Vuelve a la primera canción si es la última
        }
    } else if(!isRepeating && isRandom){
        playRandomSong();
    }

    
    reproducirCancion(currentSongIndex);
});

audio.addEventListener('play', () => {
    isPlaying = true;
    playPauseIcon.textContent = 'pause';
});

audio.addEventListener('pause', () => {
    isPlaying = false;
    playPauseIcon.textContent = 'play_arrow';
});

// Añadir event listeners a los botones de siguiente y anterior y de play
btnPlay.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', siguienteCancion);
prevBtn.addEventListener('click', anteriorCancion);
randomButton.addEventListener('click', randomSong);



// Cargar estado anterior y preparar el reproductor
document.addEventListener('DOMContentLoaded', () => {
    cargarEstado();

    // Asegurarse de que no se reproduzca automáticamente al cargar
    shouldPlay = false;
});

function cargarEstado() {
    const cancionActual = JSON.parse(localStorage.getItem('cancionActual'));
    const indiceGuardado = parseInt(localStorage.getItem('currentSongIndex'), 10);
    document.documentElement.style.setProperty('--main-color', localStorage.getItem('colorMain'));

    applyTheme();
    
    colorsBtn.forEach((button, index) => {
        if (colors[index] === localStorage.getItem('colorMain')) {
            button.classList.add('choose');
        } else {
            button.classList.remove('choose');
        }
    });
   

    if (cancionActual && !isNaN(indiceGuardado)) {
        actualizarReproductor(cancionActual);
        currentSongIndex = indiceGuardado;
    }
}


//Funcion de botones extra

//Mini reproductor

const btnRadio = document.getElementById('radioPlayer');


const footer = document.querySelector('.footer');

btnRadio.addEventListener('click', function() {
    const iconRadio = this.querySelector('span.material-icons-sharp');

    footer.classList.toggle('mini-re');

    if (footer.classList.contains('mini-re')) {
        iconRadio.textContent = "close";
    } else {
        iconRadio.textContent = "radio";
    }
});

//Cambiar de tema funcion

const btnDark = document.getElementById('btnDark');
const btnLigth = document.getElementById('btnLigth');
const indicador = document.querySelector('.indicador');

// Eventos para cambiar el tema
btnLigth.addEventListener('click', () => {
    themeLigth = true;
    applyTheme();
});

btnDark.addEventListener('click', () => {
    themeLigth = false;
    applyTheme();
});

function applyTheme() {
    if (themeLigth) {
        document.body.classList.add('light-theme');
        btnLigth.classList.add('active');
        btnDark.classList.remove('active');
        indicador.textContent = "Claro";
    } else {
        document.body.classList.remove('light-theme');
        btnDark.classList.add('active');
        btnLigth.classList.remove('active');
        indicador.textContent = "Oscuro";
    }

    // Guardar en localStorage
    localStorage.setItem('themeLigth', JSON.stringify(themeLigth));
}

applyTheme();





//Pagina configuracion

const boxConfis = document.querySelectorAll('.box-confi');

boxConfis.forEach(item => {
    item.addEventListener('click', function () {
        // Primero, verificamos si el div actual ya tiene la clase 'open'
        const isOpen = this.classList.contains('open');

        // Eliminamos la clase 'open' de todos los divs
        boxConfis.forEach(box => {
            box.classList.remove('open');
            // Aseguramos que todos los párrafos estén ocultos y el ícono se reinicie
            const icon = box.querySelector('span.iconExpand');
            const faqB = box.querySelector('.faq-box');
            icon.textContent = 'expand_more';
            faqB.classList.remove('show');
        });

        // Si el div actual no estaba abierto, lo abrimos
        if (!isOpen) {
            this.classList.add('open');
            const iconSpan = this.querySelector('span.iconExpand');
            const faq = this.querySelector('.faq-box');
            iconSpan.textContent = 'expand_less';
            faq.classList.add('show');
        }
    });
});

const colorsBtn = document.querySelectorAll('.color');

const colors = ["#6557bc","#f7c94b","#68cdea","#00bf8e","#f75842"];

colorsBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        colorsBtn.forEach(btn => {
            btn.classList.remove('choose');
        });

        button.classList.add('choose');

        // Cambia la variable --main-color en :root según el índice del botón
        document.documentElement.style.setProperty('--main-color', colors[index]);
        localStorage.setItem('colorMain', colors[index]);
    });
});























//Navegacion del player

const moreBtns = document.getElementById('mostrarBotones');
const containerBtns = document.querySelector('.btns-responsive');

const volumenMostrar = document.getElementById('btnVolumen');
const volumenDiv = document.querySelector('.volumenDiv');

moreBtns.addEventListener('click', () => {
    containerBtns.classList.toggle('show');
});

volumenDiv.addEventListener('click', (e) => {
    e.stopPropagation();
});

volumenMostrar.addEventListener('click', () => {
    volumenDiv.classList.toggle('show');
});

