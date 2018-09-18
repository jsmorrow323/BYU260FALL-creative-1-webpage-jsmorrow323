var title = "";

function GetValue()
{
    var booklist = new Array("Mistborn","Alloy of Law","Elantris","The Emperors Soul","The Rithmatist","The Stormlight Archive","Warbreaker","Alcatraz v.s. the Evil Librarians","Legion","Steelheart","WhiteSand","First Born","Defending Elysium","Perfect State","Unfettered","Armored","Games Creatures Play","Shadows Beneath","Skyward");
    var random = booklist[Math.floor(Math.random() * booklist.length)];
    
    //alert(random);
    document.getElementById("message").innerHTML = random;
    
    title = random;
    return title;
}

function add_book_logo()
{
    //create image name
    var titleName = "photos/" + title + ".jpg";
    // alert(titleName);
    
    //pass and format image name
    var src = titleName;
    show_image(titleName, 300,500, "Book Logo");
}

var img = document.createElement("img");

function show_image(src, width, height, alt)
{
    //clear current image
    img.remove();
    
    //format new image
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    
    //display image
    document.body.appendChild(img);
    
    //tab out 50px
    img.style.marginLeft = "50px";
}

function clearPage()
{
    document.location.reload(true)
}