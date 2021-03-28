const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

//Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.className = "subheading";

//Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs.style.color = "red";
}

//Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7

function catsNames(list) {
    for (let i = 0; i < list.name.length; i++) {
        console.log(list.name[i].toString());
    }
}

catsNames(cats);

//Question 8

const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
    for (let i = 0; i < cats.length; i++) {
        let finalHTML = "<h5>" + cats[i].name + "</h5>" + "<p>" + cats[i].age + "</p>";
        return finalHTML;
    }

}

createCats(cats);

catContainer.innerHTML = finalHTML;





