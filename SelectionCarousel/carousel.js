/**
 *  Advances the carousel to the next div.
 */
function next(carousel) {
    let carousels = document.getElementsByClassName(carousel);
    for (let i = 0; i < carousels.length; i++) {
        let options = carousels[i].getElementsByTagName("div");
        let index = 0;
        for (let i = 0; i < options.length; i++) {
            if (options[i].style.display !== "none") {
                index = i;
            }
        }
        options[index].style.display = "none";
        if (index === options.length-1) {
            options[0].style.display = "block";
        } else {
            options[index+1].style.display = "block";
        }
    }
}

/**
 *  Returns the carousel to the previously shown div.
 */
function prev(carousel) {
    let carousels = document.getElementsByClassName(carousel);
    for (let i = 0; i < carousels.length; i++) {
        let options = carousels[i].getElementsByTagName("div");
        let index = 0;
        for (let i = 0; i < options.length; i++) {
            if (options[i].style.display !== "none") {
                index = i;
            }
        }
        options[index].style.display = "none";
        if (index === 0) {
            options[options.length-1].style.display = "block";
        } else {
            options[index-1].style.display = "block";
        }
    }
}

/**
 *  Initializes the carousels for the page.
 *  Carousels should have 'carousel' somewhere in the class name.
 */
function initCarousel() {
    let elements = document.getElementsByTagName("div");
    for (let i = 0; i < elements.length; i++) {
        let className = elements[i].className;
        if (className.includes("carousel")) {
            let options = [];
            for (let j = 0; j < elements[i].childNodes.length; j++) {
                let child = elements[i].childNodes[j];
                if (child.className === "option") {
                    options.push(child);
                }
            }
            options.splice(0, 1);
            options.forEach(o => {
                o.style.display = "none";
            });
        }
    }
}
