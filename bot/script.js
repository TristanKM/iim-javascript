const category = document.getElementById("category");
const codePostal = document.getElementById("codePostal");
const categoryError = document.getElementById("category-error");
const codePostalError = document.getElementById("codePostal-error");

document.getElementById("searchForm").addEventListener("submit", function (event) 
{
    event.preventDefault();

    function validateForm() {
      let isValid = true;

      if (category.value.trim() === "") {
        categoryError.style.display = "block";
        category.classList.add("error");
        isValid = false;
      } else {
        categoryError.style.display = "none";
        category.classList.remove("error");
      }

      const codePostalRegex = /^\d{5}$/;
      if (!codePostalRegex.test(codePostal.value.trim())) {
        codePostalError.style.display = "block";
        codePostal.classList.add("error");
        isValid = false;
      } else {
        codePostalError.style.display = "none";
        codePostal.classList.remove("error");
      }

      return isValid;
    }

    if (validateForm()) {
      const categoryValue = category.value.trim();
      const codePostalValue = codePostal.value.trim();

      fetch("http://127.0.0.1:3000/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: categoryValue,
          codePostal: codePostalValue,
        }),
      });
    }
  });
