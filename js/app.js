// select all slills
const skills = document.querySelectorAll('.skills-cards')
// listen for scroll event and call the checkBoxes function every time the user scrolls 
window.addEventListener('scroll', checkSkills)
// call function on pageload so the first boxes are displayed
checkSkills()


function checkSkills() {
       // variable stores the point at which you want the element to move into the page. In this example at 80% from the top.
 const triggerBottom = window.innerHeight / 5 * 4

    skills.forEach(skill => {
      // check the location of the box on the page
        const boxTop = skill.getBoundingClientRect().top

        // show the box when its further down the page then the 80% from the top
        if(boxTop < triggerBottom) {
            skill.classList.add('show-skills')
        } else {
            skill.classList.remove('show-skills')
        }
    })
}

// select all boxes
const portfolio = document.querySelectorAll('.portfolio-cards')
// listen for scroll event and call the checkBoxes function every time the user scrolls 
window.addEventListener('scroll', checkPortfolio)
// call function on pageload so the first boxes are displayed
checkPortfolio()

function checkPortfolio() {
     // variable stores the point at which you want the element to move into the page. In this example at 80% from the top.
 const triggerBottom = window.innerHeight / 5 * 4

 portfolio.forEach(port => {
      // check the location of the box on the page
        const boxTop = port.getBoundingClientRect().top

        // show the box when its further down the page then the 80% from the top
        if(boxTop < triggerBottom) {
            port.classList.add('port')
        } else {
            port.classList.remove('port')
        }
    })
}



// select all boxes
const boxes = document.querySelectorAll('.timeline')
// listen for scroll event and call the checkBoxes function every time the user scrolls 
window.addEventListener('scroll', checkBoxes)
// call function on pageload so the first boxes are displayed



checkBoxes()

function checkBoxes() {
     // variable stores the point at which you want the element to move into the page. In this example at 80% from the top.
 const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
      // check the location of the box on the page
        const boxTop = box.getBoundingClientRect().top

        // show the box when its further down the page then the 80% from the top
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}








