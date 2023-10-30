urls = [];
if (window.localStorage.getItem("IsLoggedIn") !== "true") {
  window.localStorage.setItem("IsLoggedIn", "false");
}

async function getUrlsByUsername(username) {
  const response = await fetch(`http://localhost:8080/user/${username}`);
  urls = await response.json();
}

function block_domains() {
  getUrlsByUsername("alanka").then(() => {
    if (urls.includes(window.location.hostname)) {
      document.body.innerHTML = "<h1>Cant Go hERE</h1>";
    }
  });
}

function register() {
  console.log(document.getElementById("username").value);
  window.localStorage.setItem("IsLoggedIn", "true");
}

// block_domains();

window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById("register");
  if (el) {
    el.addEventListener("click", register);
  }
});

if (localStorage.getItem("IsLoggedIn") === "true") {
  showSection2();
} else {
  showSection1();
}

function showSection1() {
  window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById("notLogged");
    if (el) {
      document.getElementById("isLogged").style.display = "block";
      document.getElementById("notLogged").style.display = "none";
    }
  });
}

function showSection2() {
  window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById("notLogged");
    if (el) {
      document.getElementById("isLogged").style.display = "none";
      document.getElementById("notLogged").style.display = "block";
    }
  });
}

// -----------------------
const navigateToFormStep = (stepNumber) => {
  /**
   * Hide all form steps.
   */
  window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll(".form-step").forEach((formStepElement) => {
      formStepElement.classList.add("d-none");
    });
  });

  window.addEventListener("DOMContentLoaded", (event) => {
    document
      .querySelectorAll(".form-stepper-list")
      .forEach((formStepHeader) => {
        formStepHeader.classList.add("form-stepper-unfinished");
        formStepHeader.classList.remove(
          "form-stepper-active",
          "form-stepper-completed"
        );
      });
  });

  /**
   * Mark all form steps as unfinished.
   */

  /**
   * Show the current form step (as passed to the function).
   */

  window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector("#step-" + stepNumber).classList.remove("d-none");
  });

  const formStepCircle = window.addEventListener(
    "DOMContentLoaded",
    (event) => {
      document.querySelector('li[step="' + stepNumber + '"]');
    }
  );

  /**
   * Select the form step circle (progress bar).
   */

  /**
   * Mark the current form step as active.
   */

  formStepCircle.classList.remove(
    "form-stepper-unfinished",
    "form-stepper-completed"
  );
  formStepCircle.classList.add("form-stepper-active");
  /**
   * Loop through each form step circles.
   * This loop will continue up to the current step number.
   * Example: If the current step is 3,
   * then the loop will perform operations for step 1 and 2.
   */
  for (let index = 0; index < stepNumber; index++) {
    /**
     * Select the form step circle (progress bar).
     *
     *
     */

    const formStepCircle = window.addEventListener(
      "DOMContentLoaded",
      (event) => {
        document.querySelector('li[step="' + index + '"]');
      }
    );
    if (formStepCircle) {
      /**
       * Mark the form step as completed.
       */
      formStepCircle.classList.remove(
        "form-stepper-unfinished",
        "form-stepper-active"
      );
      formStepCircle.classList.add("form-stepper-completed");
    }

    /**
     * Check if the element exist. If yes, then proceed.
     */
  }
};
/**
 * Select all form navigation buttons, and loop through them.
 */

window.addEventListener("DOMContentLoaded", (event) => {
  document
    .querySelectorAll(".btn-navigate-form-step")
    .forEach((formNavigationBtn) => {
      /**
       * Add a click event listener to the button.
       */
      formNavigationBtn.addEventListener("click", () => {
        /**
         * Get the value of the step.
         */
        const stepNumber = parseInt(
          formNavigationBtn.getAttribute("step_number")
        );
        /**
         * Call the function to navigate to the target form step.
         */
        navigateToFormStep(stepNumber);
      });
    });
});
