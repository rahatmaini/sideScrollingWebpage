var html = `
<table style="width:100%; height:100%;">

<tr>
<td style="font-size: 150%; font-weight: 600">COURSE NAME</td>
</tr>

<tr>
<td><div><span class='ti-user'></span></div><br />INSTRUCTOR NAME</td>
</tr>

<tr>
<td><div><span class='ti-time'></span></div><br />COURSE TIME</td>
</tr>

<tr>
<td><div><span class='ti-calendar'></span></div><br />COURSE DAYS</td>
</tr>


</table>
`;

//load this data from database!
var courseNames=["COURSE NAME","APMA 3080","CS 2150", "CS 3102","CS 2150","CS 2150","CS 2150","CS 2150","CS 2150","CS 2150","CS 2150","CS 2150","CS 2150","CS 2150","ECE 2330"]; 

var instructorNames=["INSTRUCTOR NAME","Mark Floryan","Mark Floryan","Mark Floryan","Mark Floryan","Mark Floryan","Mark Floryan","Mark Floryan","Mark Floryan","Mark Floryan","Mark Floryan","Mark Floryan","Mark Floryan","Mark Floryan","Aaron Bloomfield"];

var courseTimes=["COURSE TIME", "9:00AM-9:50AM","9:00AM-9:50AM","9:00AM-9:50AM","9:00AM-9:50AM","9:00AM-9:50AM","9:00AM-9:50AM","9:00AM-9:50AM","9:00AM-9:50AM","9:00AM-9:50AM","9:00AM-9:50AM","9:00AM-9:50AM","9:00AM-9:50AM","9:00AM-9:50AM","10:00AM-10:50AM"];

var courseDays=["COURSE DAYS", "Monday, Wednesday, Friday","Monday, Wednesday, Friday","Monday, Wednesday, Friday","Monday, Wednesday, Friday","Monday, Wednesday, Friday","Monday, Wednesday, Friday","Monday, Wednesday, Friday","Monday, Wednesday, Friday","Monday, Wednesday, Friday","Monday, Wednesday, Friday","Monday, Wednesday, Friday","Monday, Wednesday, Friday","Monday, Wednesday, Friday","Tuesday, Thursday"];

var howManyCards=14
//


function myFunction() {

    var y=1;
    while (y<howManyCards+1)
    {
        document.getElementById("scrolling-wrapper").appendChild(createElementFromHTML('<div class="card" id="'+y.toString()+'"></div>'));
        y++;
    }


    var x=1; //x is the ID of the card
    while (x<howManyCards+1) //this is the number of courses + 1
    {
        html=html.replace(courseNames[x-1],courseNames[x]);
        html=html.replace(instructorNames[x-1],instructorNames[x]);
        html=html.replace(courseTimes[x-1],courseTimes[x]);
        html=html.replace(courseDays[x-1],courseDays[x]);

        document.getElementById(x.toString()).innerHTML = html;
        x++;
    }
    
}

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild; 
  }
