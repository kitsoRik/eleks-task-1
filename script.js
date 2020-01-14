let ratings = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

document.addEventListener("DOMContentLoaded", ev => {
     let stars_s = document.getElementsByClassName("stars");

     for(let i = 0; i < stars_s.length; i++){    
          let stars = stars_s[i];

          let index = Math.random() * ratings.length;
          stars.setAttribute("rating", ratings[Math.floor(index)]);
          
          let rating = Number.parseFloat(stars.getAttribute("rating"));
          for(let j = 0; j < 5; j++) {
               if(rating < j + 1) {
                    if(rating + 0.5 == j + 1) {
                         stars.appendChild(halfStar());
                    }else {
                         stars.appendChild(emptyStar());
                    }
               }else {
                    stars.appendChild(fillStar());
               }
          }
     }
     window.onresize = function() {
          document.getElementsByClassName("main")[0].style.height = (window.innerHeight - 90) + "px";
     }
     document.getElementsByClassName("main")[0].style.height = (window.innerHeight - 90) + "px";
     
});


function fillStar() {
     let el = document.createElement("i");
     el.classList.add("fas");
     el.classList.add("fa-star");
     return el;
}

function halfStar() {
     let el = document.createElement("i");
     el.classList.add("fas");
     el.classList.add("fa-star-half-alt");
     return el;
}

function emptyStar() {
     let el = document.createElement("i");
     el.classList.add("far");
     el.classList.add("fa-star");
     return el;
}