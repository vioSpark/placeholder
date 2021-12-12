// First time writing in js, so prob not the best practices
const writing_projects = [
    {
        name: "Weather's effect on infarction",
        image: "infarct_vs_Peczely_number.png",
        description: "My bachelor thesis project about heart attack, weather, and conditional probabilities",
        github: "https://github.com/vioSpark/weather-data-analyzer-public"
    },
    {
        name: "Color sample measurement",
        image: "color_sample_measurement.jpg",
        description: "A research project where we examined what parameters affect the color change of coloring samples, using spectral measurements",
        github: "https://github.com/vioSpark/color_sample_measurements"
    },
    {
        name: "Virus.exe",
        image: "virus.jpg",
        description: "A discrete covid simulation using hypotethical parameters and a semi agent-based approach for a competition.",
        note: "It's a huge C++ project we still haven't cleaned up after submitting to Ericcson programozói bajnokság 2020",
        github: "https://github.com/Defragged-Zebra/Ericsson2020",
        logo: "DefraggedZebra"
    },
    {
        name: "Selfdriving pathfinding",
        image: "pathfinding.png",
        description: "A discrete pathfinding solution in a hypothetical word of fixed road-lengths, predictable traffic lights, and unpredictable traffic.",
        note: "It's a python project, submitted to a Bosch programming challange",
        github: "https://github.com/Defragged-Zebra/Bosch2020",
        logo: "DefraggedZebra"
    },
    {
        name: "Optic lens simulation",
        image: "filter_madness2.png",
        description: "The night when I nerded out, and made a mathematical model following a random youtube video.",
        note: "While this was a one-nighter project, I've solved many of the more complex homeworks with a notebook like this.",
        github: "https://github.com/vioSpark/lens-system-optimizer"
    },
    {
        name: "This website",
        image: "website2_edited.png",
        description: "I've always faniced people who have a website, so I made one for myself",
        github: "https://github.com/vioSpark/placeholder/settings/pages"
    },
    {
        name: "The burittos case",
        image: "burittos_case.png",
        description: 'My shot at analyzing the <a href="https://srcole.github.io/100burritos/">burittos dataset</a> under a weekend',
        coming_soon: "/"
    },
    {
        name: "What's this plant",
        image: "whats_that_plant.png",
        description: "A fun machine-learning competition, where we needed to classify the plants based on sattelite data (using NDVI measurements)",
        coming_soon: "/"
    }
]

const reading_projects = [
    {
        name: "Cool practicals",
        image: "opnenCV.png",
        description: "A few cool concepts we coded in practicals under my bachelors",
        github: "https://github.com/vioSpark/BME-cool-part"
    },
    {
        name: "Scale-equvariat CNNs",
        image: "sesn.png",
        description: "An assignment when we reviwed some high-level set theory to understand some of the latest improvements in image recognition",
        website: "https://spetrescu.github.io/sesn-reproducibility-project"
        // blogpost:"https://towardsdatascience.com/sesn-cec766026179"
    },
    {
        name: "Knowldge-management",
        image: "JIP_square.jpeg",
        description: "This time we translated an idea into a technological roadmap",
        note: "Briefly speaking it was about automatically extracting bits of knowledge from scientific articles",
        blog: "https://lukacs-mark.medium.com/here-comes-the-police-36e050a1224e"
    }
]

template = [
    {
        name: "",
        image: "",
        description: "",
        github: ""
    }
]

function is_valid(text) {
    return !(text == undefined || text == "" || text == null)
}

function is_button(key, value) {
    not_button_attributes = ["name", "image", "description", "note", "logo"]
    if (not_button_attributes.includes(key)) {
        return false
    }
    if (is_valid(value)) {
        return true
    } else {
        return false
    }
}

function add_github_logo(key, value) {
    return `
    <a class="btn btn-outline-primary" href="` + value + `" target="_blank"><svg
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
            focusable="false" width="1.03em" height="1em"
            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
            preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 250">
            <path
                d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z"
                fill="#161614" />
        </svg>
        GitHub
    </a>
    `
}

function add_coming_soon() {
    return `<a class="btn btn-outline-primary" href="#">` + `Coming soon` + `</a>`
}

function make_buttons(project) {
    button_html = ""
    for (const [key, value] of Object.entries(project)) {
        if (!(is_button(key, value))) {
            continue
        }
        if (key != "github" && key != "coming_soon") {
            button_html += `
        <p><a class="btn btn-outline-primary"
        href="`+ value + `" target="_blank">
        `+ key + `</a></p>`
        } else if (key == "github") {
            button_html += add_github_logo(key, value)
        } else if (key == "coming_soon") {
            button_html += add_coming_soon()
        }
    }
    return button_html
}

function create_card(project) {
    notes = ""
    if (is_valid(project.note)) {
        notes = ("<br>" + project.note)
    }

    button_html = make_buttons(project)

    card = document.createElement("div")
    card.innerHTML = `
        <div class="m-2 bd-highlight">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front position-relative">
                        <img class="flip-image" src="src/images/`+ project.image + `">
                        <h5 class="flip-title">`+ project.name + `</h5>
                    </div>
                    <div class="flip-card-back card-body">
                        <p class="text-justify">`+ project.description + notes + `</p>
                        `+ button_html + `
                    </div>
                    <h5 class="flip-title text-dark">`+ project.name + `</h5>
                </div>
            </div>
        </div>`
    return card
}

{/* <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
</div> */}


// writing projects
parent_div = document.getElementById("writing_projects")
for (const project of writing_projects) {
    parent_div.appendChild(create_card(project))
}

// reading projects
parent_div = document.getElementById("reading_projects")
for (const project of reading_projects) {
    parent_div.appendChild(create_card(project))
}