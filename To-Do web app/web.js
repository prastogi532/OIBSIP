shownotes();
   let addBtn = document.getElementById("addBtn");
   let addTitle = document.getElementById("addTitle");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle")
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let myObj ={
    title: addTitle.value,
    text: addTxt.value
}
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value ="";
 // console.log(notesObj);
  shownotes();

});
function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += ` 
   <div class="notescard my-2 mx-2" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title"> ${element.title} </h5>
    <p class="card-text">${element.text} </p>
    <button id ="${index}"onclick="deletenotes(this.id)"class="btn btn-primary"> Delete notes </button>
  </div>
</div> `

  })
  let noteselm = document.getElementById('notes');
  if (notesObj.length != 0) {
    noteselm.innerHTML = html;

  }
  else{
    noteselm.innerHTML= `Nothing to show! "add notes" section above to add notes`;
  }
}
  function deletenotes(index){
   // console.log('i am deleting',index); 
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    }
    else {
      notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
  }
  let search = document.getElementById('searchTxt');
  search.addEventListener("input",function(){
    let inputval =search.value.toLowerCase();
    //console.log( 'input event fired!',inputval);
    let notescard = document.getElementsByClassName('notescard')
    Array.from(notescard).forEach(function(element){
      let cardTxt =element.getElementsByTagName("p")[0].innerText;
      if(cardTxt.includes(inputval)){
        element.style.display = "block";
      }
      else{
        element.style.display ="none";
      }
     //console.log(cardTxt)

    })
      
    });
  
  




  




