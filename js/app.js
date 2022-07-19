// select all slills
const skills = document.querySelectorAll('.skills-cards')
// listen for scroll event and call the checkSkills function every time the user scrolls 
window.addEventListener('scroll', checkSkills)
// call function on pageload so the first cards are displayed
// variable stores the point at which i want the element to move into the page. In this example at 80% from the top.
const triggerBottom = window.innerHeight / 5 * 4
checkSkills()

function checkSkills() {
    skills.forEach(skill => {
      // check the location of the cards on the page
        const boxTop = skill.getBoundingClientRect().top
        // show the card when its further down the page then the 80% from the top
        if(boxTop < triggerBottom) {
            skill.classList.add('show-skills')
        } 
    })
}

// select all cards
const portfolio = document.querySelectorAll('.portfolio-cards')
// listen for scroll event and call the checkPortfolio function every time the user scrolls 
window.addEventListener('scroll', checkPortfolio)
// call function on pageload so the first Portfolio are displayed
checkPortfolio()

function checkPortfolio() {
 portfolio.forEach(port => {
      // check the location of the portfolio on the page
        const boxTop = port.getBoundingClientRect().top
        // show the box when its further down the page then the 80% from the top
        if(boxTop < triggerBottom) {
            port.classList.add('port')
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
    boxes.forEach(box => {
      // check the location of the box on the page
        const boxTop = box.getBoundingClientRect().top
        // show the box when its further down the page then the 80% from the top
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } 
    })
}








