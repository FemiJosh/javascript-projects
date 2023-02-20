            //SELCTING ELEMENTS
const linksContainer = document.querySelector('.nav-links-container');
const burger = document.querySelector('.burger');
const nav = document.getElementsByTagName('nav');
const logoCont = document.querySelector('.logo-container');
const loginPage = document.querySelector('.login-page');
const registerPage = document.querySelector('.register-page');
const loginCont = document.querySelectorAll('.login-and-register');
const movieContEl = document.querySelectorAll('.movie-box-container');
const menuBtns = document.querySelector(".menu-btns");
const remainderCont = document.querySelector('.remainder-container');
const body = document.querySelector('body');
const moreBtn = document.querySelector('.morebtn');


                //SELECTING ELEMENTS ENDS


                // GETTING APIS AND DISPLAYING

                //OPEING MOVIES STARTS 
    let eachMovies = '';

 function getPicture(posterpath){
                return `https://www.themoviedb.org/t/p/original${posterpath}`
            }

            let num = 1;
    // let movieUrl = ``

            function displayMovie(num){
                fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d1715382eeb174fd056f98ce782a6135&language=en-US&page=${num}`).then(response => response.json())
                .then(res => {
                    let allData = res.results;
                    eachMovies = allData.map(eachMovie =>{
                        return `<div class="theboxes">
                        <img src= ${getPicture(eachMovie.poster_path)} class="box-img">
                        <p class="movie-title"> ${eachMovie.title}</p>
                        <h3 class="movie-category"> ${eachMovie.release_date} </h3>
                            <button class="btns remainder-btn">
                                set remainder
                            </button>
                        </div>
                    </div>`
                    }).join('')
                    movieContEl[0].innerHTML += eachMovies;
                    displayRemainderBtn();

                })
                .catch( err => new Error )
            }
                //OPEING MOVIES ENDS 



                // DISPLAY COMING SOON MOVIES STARTS 
function displayComingMovies(){
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=d1715382eeb174fd056f98ce782a6135&language=en-US&page=1`)
    .then(res => res.json())
    .then (results => {
        let realData = results.results
        eachMovies = realData.map(eachMovie =>{
            return `<div class="theboxes">
            <img src= ${getPicture(eachMovie.poster_path)} class="box-img">
            <p class="movie-title"> ${eachMovie.title}</p>
            <h3 class="movie-category"> ${eachMovie.release_date} </h3>
        </div>`
        }).join('')
        movieContEl[1].innerHTML += eachMovies;       
    })
    .catch( err => {
        new Error
    console.log(err) })
        }

                // DISPLAY COMING SOON MOVIES ENDS 


                // DISPLAY NEWS AND OTHERS STARTS
const newsBoxContEl = document.querySelector('.newsbox-container')
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '6190eee07fmsh775b0400439c646p129cf0jsnb377dcba7b32',
                        'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
                    }
                };
                
                fetch('https://crypto-news16.p.rapidapi.com/news/top/10', options)
                    .then(response => response.json())
                    .then(response => {
                       let eachNews =  response.map(news =>{
                            return ` <ul class="news-list">
                            <li> <a href="${news.url}" class="news"> ${news.title}</a></li>
                            <span class = 'date'> ${news.date}</span>
                            </ul>
                            `  
                        }).join('');
                        newsBoxContEl.innerHTML = eachNews;
                    })


                    .catch(err => console.error(err));


                // DISPLAY NEWS AND OTHERS  ENDS 


                            // GETTING APIS AND DISPLAYING ENDS 


                //GETTING THE GENRES

                // function fetchGenres(){
                //     fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=d1715382eeb174fd056f98ce782a6135&language=en-US`)
                //     .then(res => res.json())
                //     .then (results => {
                //         let realData = results.genres
                        
                   

                        // eachMovies = realData.map(eachMovie =>{
                        //     return `<div class="theboxes">
                        //     <img src= ${getPicture(eachMovie.poster_path)} class="box-img">
                        //     <p class="movie-title"> ${eachMovie.title}</p>
                        //     <h3 class="movie-category"> ${eachMovie.release_date} </h3>
                        // </div>`
                        // }).join('')
                        // movieContEl[1].innerHTML += eachMovies; 
                        
                        

                             // let genresArray = [];
                        // genresArray[0] = { "id":`${realData.id}` , "name": `${realData.name}`}
                        // genresArray[1] = { "id":`${realData.id}` , "name": `${realData.name}`}

                        // let tempData = [];
                        // for (let index = 0 ; index<genresArray.length ;index++){
                        //     if(genresArray[index].name == `${realData.name}`){
                        //         tempData.push(genresArray)
                        //     }
                        // }
                        // genresArray =tempData;

                        // console.log(tempData)
                        
                    // })
                    // .catch( err => {
                    //     new Error
                    // console.log(err) })
                    //     }

                    //     fetchGenres();


                //ENDING THE GENRES






                // DISPLAY MOIVES AND CATEGORIES
let remainderBtn;   
let isAlarmSet = false;


                //DISPLAY SEARCHED MOVIES START
                fetch('https://crypto-news16.p.rapidapi.com/news/top/5', options)
                .then(response => response.json())
                .then(response => {
                   work(response)
                })

                function work(draw){
                    draw.map(eachMap =>{
                        console.log(eachMap.title)
                    })
                }
                //DISPLAY SEARCHED MOVIES ENDS


// const moviesList = [
//     {
//     id: "1",
//     img: "./Images/PopCorn.jpg",
//     movieTitle: 'Venom and every other reubbis that wants to be causing me wahala on this code',
//     movieCategory: 'Action',
//     movieTime: '100',
//     },
//     {
//         id: "2",
//         img: "./Images/PopCorn.jpg",
//         movieTitle: 'SuperStory',
//         movieCategory: 'Drama',
//         movieTime: '150',
//     },
//     {
//         id: "3",
//         img: "./Images/PopCorn.jpg",
//         movieTitle: 'Willi Willi',
//         movieCategory: 'Tragedy',
//         movieTime: '120',
//     },
//     {
//         id: "4",
//         img: "./Images/PopCorn.jpg",
//         movieTitle: 'Baba Suwe',
//         movieCategory: 'Comedy',
//         movieTime: '110',
//         },
//         {
//             id: "5",
//             img: "./Images/PopCorn.jpg",
//             movieTitle: 'Ayanmatangan',
//             movieCategory: 'Thriller',
//             movieTime: '170',
//             },

//             {
//                 id: "5",
//                 img: "./Images/PopCorn.jpg",
//                 movieTitle: 'Ayanmatangan',
//                 movieCategory: 'Thriller',
//                 movieTime: '170',
//                 },
//                 {
//                     id: "5",
//                     img: "./Images/PopCorn.jpg",
//                     movieTitle: 'Ayanmatangan',
//                     movieCategory: 'Thriller',
//                     movieTime: '170',
//                     }, {
//                         id: "2",
//                         img: "./Images/PopCorn.jpg",
//                         movieTitle: 'SuperStory',
//                         movieCategory: 'Drama',
//                         movieTime: '150',
//                     },

//         ]


window.addEventListener('load', ()=>{
    displayMovie(1);
    displayComingMovies()
})

moreBtn.addEventListener('click',()=>{
    num++;
    displayMovie(num)
    console.log(num)
})

let reducedMovies = moviesList.reduce((presentResult , presentItem)=>{
   
    if(!presentResult.includes(presentItem.movieCategory)){
        presentResult.push(presentItem.movieCategory)
    }
    return presentResult;
},['all'])


console.log(reducedMovies);

function displayCatBtns(thembtn){
    thembtn.map(eachbtn =>{
        return menuBtns.innerHTML += `<button class="btns" data-btnid="${eachbtn}">${eachbtn}</button>
        `
    })
}
displayCatBtns(reducedMovies);

const categoryBtns = menuBtns.querySelectorAll('button');


categoryBtns.forEach(catBtn =>{
    catBtn.addEventListener('click', (e)=>{
        target = e.currentTarget.dataset.btnid;
        
        let filteredMovies = moviesList.filter(eachMovies =>{
            // console.log(eachMovies.movieCategory, target)
            if(eachMovies.movieCategory === target){
                // console.log(eachMovies)
                    return eachMovies;
            }
        })
        if( target === 'all'){
            displayMovie(moviesList);
            console.log('right')
        }
        else {
            // console.log(filteredMovies);
            displayMovie(filteredMovies);
            // console.log('others')
        }
    })
})

function displayRemainderBtn(){
    let eachBox = movieContEl[0].querySelectorAll('.theboxes')
    eachBox.forEach(box =>{
        let remainderBtn = box.querySelector('.remainder-btn');
        box.addEventListener('click' , ()=>{
            eachBox.forEach(item =>{
                let remainderBtn = item.querySelector('.remainder-btn');
                if(item !== box){
                    remainderBtn.classList.remove('display-remainder-btn');
                    item.classList.remove('for-image-box')
                }
            })
            remainderBtn.classList.toggle('display-remainder-btn');
            box.classList.toggle('for-image-box');


            remainderBtn.addEventListener('click',()=>{
                pageDisplay(remainderCont);

                console.log(eachBox)
                // if(isAlarmSet){
                //     remainderBtn.innerHTML = 'Set Remainder';
                //     alarmTime = ''
                //     return isAlarmSet = false
                // }
                // isAlarmSet = true;
                // remainderBtn.innerHTML = 'Cancel Remainder'
            })
            
        })
    })
}
  


                //DISPLAY MOVIES AND CATEGORIES ENDS



                //DISPLAY PAGES AND OTHERS

function displayLinks(){
    linksContainer.classList.toggle('nav-display');
    let contain = linksContainer.classList.contains('nav-display')
    if(contain){
        burger.src = "./icons/times-solid.svg";
    }
    else{
        burger.src = "./icons/hamburger-solid.svg"
    }
}

function pageDisplay(element){
    element.style.display = 'flex';
    body.style.overflow = 'hidden';
    

}
function removePage(element){
    element.style.display = 'none';
    body.style.overflow = 'auto';
}

                //DISPLAY PAGES AND OTHERS ENDS


                //REMAINDER FUNCTIONS AND SETTING

    const remainderSelectsCont = document.querySelector('.remainder-selects');
    const remainderSelects = remainderSelectsCont.querySelectorAll('select');

        for (let i = 12 ; i > 0; i--) {
        i = i < 10? `0${i}` : i;
        let options = `<option value="${i}"> ${i} </option>`
        remainderSelects[0].insertAdjacentHTML('beforeend', options)
    }
    for (let i = 59 ; i > 0; i--) {
        i = i < 10? `0${i}` : i;
        let options = `<option value="${i}"> ${i} </option>`
        remainderSelects[1].insertAdjacentHTML('beforeend', options)
    }
    for (let i = 2 ; i > 0; i--) {
        let ampm = i > 1? 'AM' : 'PM'
        let options = `<option value="${ampm}"> ${ampm} </option>`
        remainderSelects[2].insertAdjacentHTML('beforeend', options)
    }

    function setTime(){

        let presentTime = new Date();

        let h , m, s, date , ampm

        date = presentTime.getDate();
        // d = presentTime.getDay();
        h = presentTime.getHours();
        m = presentTime.getMinutes();
        s = presentTime.getSeconds();

        if(h > 12){
            h = h - 12;
            ampm = "PM"
        }

        h = h == 0? h = 12 : h;

        h = h < 10? `0${h}` : h;
        m = m < 10? `0${m}` : m;
        s = s < 10? `0${s}` : s;

        let theTime = `${h}:${m} ${ampm}`
        // console.log(h , m ,s , date);
        // console.log(theTime)
        if(alarmTime == theTime){
            console.log('now working')
        }

    }

    setInterval(setTime , 1000);
                //SETTING INDICATOR ALARM


                                 //INDICATOR FUNCTIONS AND SETTINGS

    let indicatorMsg = `<img src="./icons/arrow-up-solid.svg" class="socials indicator-icon">
    <p class="indicator-text"> Remainder has been set </p>`

    function displayIndicator(msg){
        const indicatorCont = document.querySelector('.indicator-section')
        let indicatorEl = document.createElement('div');
        indicatorEl.classList.add('indicator-container');
        indicatorEl.innerHTML = msg
        indicatorCont.appendChild(indicatorEl);

        setTimeout(()=>{
            const indicatorEl = indicatorCont.querySelector('.indicator-container');
            indicatorEl.remove()
        },5000)
    }

                 
                //INDICATOR FUNCTIONS AND SETTINGS ENDS 

    let alarmTime; 
    const mainRemainderBtn = document.querySelector('.main-remainder-btn');
    const bokkedMoviesCountEl = document.querySelector('.booked-movies-count');
    let count = '';
    function setAlarm(){
        alarmTime = `${remainderSelects[0].value}:${remainderSelects[1].value} ${remainderSelects[2].value}`
        console.log(alarmTime)
    }

    remainderSelectsCont.addEventListener('submit' , (e)=>{
        e.preventDefault();
        setAlarm();
        count++;
        bokkedMoviesCountEl.innerText = count;


        if(alarmTime.includes('Hour')||alarmTime.includes('Minutes')||alarmTime.includes('AM/PM')){
            return alert('Please Input a Correct Time');
        }        
        removePage(remainderCont)
    })
    
               //REMAINDER FUNCTIONS AND SETTINGS ENDS 



    



























                    //MOVIE DATABASE 

//     let mainData = fetch('https://api.simkl.com/movies/trending/interval?client_id=f02fa03d35e73db269af2f7784770ec5f266ce492fe8f99a41023c0caaa48b70')
//     .then( data => data.json())
//     .then(data => console.log(data))
// console.log (mainData)
    
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '49fb20bdbfmsh016d55d7c53efb9p178fbdjsn8f594476e543',
// 		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
// 	}
// };

// fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6190eee07fmsh775b0400439c646p129cf0jsnb377dcba7b32',
// 		'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
// 	}
// };

// fetch('https://moviesdb5.p.rapidapi.com/om?s=Spider%20Man', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'X-RapidAPI-Key': '6190eee07fmsh775b0400439c646p129cf0jsnb377dcba7b32',
    //         'X-RapidAPI-Host': 'iwatchonline.p.rapidapi.com'
    //     }
    // };