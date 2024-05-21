document.querySelector(".showComic").innerHTML = `
<body>
    <h2>All Karaul chapters so far</h2>
    <p>Take your time while reading the pages!</p>
    <p><b>Note:</b> Those are placeholder chapters for now, they aren't real.</p>
    
    <div class="chapter-list">
        <div class="chapters"></div>
        <div class="placeholder"></div>
    </div><br/>
</body>
`;

var currentChapter = null

let chapters = document.querySelector(".chapters");

const chaptersArr = [
    {
        number: 1,
        pages: 4,
        title: "Gallery of Myles",
        notes : "Wow! It's a gallery of Myles!"
    },
    {
        number: 2,
        pages: 4,
        title: "Principum",
        notes : "I mean, at this point what did you expect?"
    },
    {
        number: 3,
        pages: 4,
        title: "Kangaroo Court",
        notes : "I don't even know what to say."
    }
]

chaptersArr.forEach(chapter=>{
  const currentElement = document.createElement("button");
  currentElement.innerHTML = "<b>Karaul Chapter " + chapter.number + ": " + chapter.title + "</b>";
  chapters.appendChild(currentElement);

  currentElement.onclick = function() {
    writeComic(chapter);
  }
})

let content = document.querySelector(".showContent");

function writeComic(chapter) {
    var number = chapter.number
    var pages = chapter.pages
    var title = chapter.title
    var notes = chapter.notes

    document.querySelector(".showComic").innerHTML = `
    <head>
        <style>
            .outer-wrapper{
                display: inline-block; 
                margin: 20px;
            }
            .frame{  
                width: 250px;
                height: 200px;
                border: 1px solid black;
                vertical-align: middle;
                text-align: center;
                display: table-cell;
            }    
            img{
                max-width: 100%;
                max-height: 100%;
                display: block;
                margin: 0 auto;
            }
        </style>
    </head>

    <body>
        <div id="title"></div></b>
        <div id="showContent"></div>
        <div class="min-height"></div>
        <div id="authorNotes"></div><br/>
        <button class="arrow" id = "previous" onclick="previous()">&laquo; PREVIOUS</button>
        <a href="webcomic.html" class="return">RETURN TO CHAPTER SELECT</a>
        <button class="arrow" id = "next" onclick="next()">NEXT &raquo;</button>
        <div class="min-height"></div>
    </body>
    `;

    for (let i = 1; i < pages + 1; i++) {
        var img = document.createElement("img")
        img.src = "chapters/chapter" + number + "/" + i + ".png";
        document.getElementById("showContent").appendChild(img);
    }

    document.getElementById("title").innerHTML = "<b><h1>" + "Karaul Chapter " + number + ": " + title + "</b></h1>";
    
    if (notes) {
        document.getElementById("authorNotes").innerHTML = "<b>AUTHOR NOTES: </b>" + notes;
    }

    var index = number - 1

    if(index - 1 in chaptersArr) {
        document.getElementById("previous").style.display = "inline"
    } else {
        document.getElementById("previous").style.display = "none"
    }

    if(index + 1 in chaptersArr) {
        document.getElementById("next").style.display = "inline"
    } else {
        document.getElementById("next").style.display = "none"
    }

    currentIndex = index;
}

function previous() {
    writeComic(chaptersArr[currentIndex - 1])
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function next() {
    writeComic(chaptersArr[currentIndex + 1])
    window.scrollTo({top: 0, behavior: 'smooth'});
}