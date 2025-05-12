// Simple JavaScript for early 2000s style interactions

document.addEventListener("DOMContentLoaded", function () {
  const skipIntroButton = document.getElementById("skip-intro");
  const introAnimation = document.getElementById("intro-animation");
  const mainContent = document.getElementById("main-content");

  // Menu Toggle Functionality
  const menuToggleBtn = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  // const body = document.body; // or const wrapper = document.querySelector('.wrapper');

  // Create an overlay element
  const contentOverlay = document.createElement("div");
  contentOverlay.classList.add("content-overlay");
  document.body.appendChild(contentOverlay);

  if (menuToggleBtn && sidebar) {
    menuToggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("sidebar-open");
      menuToggleBtn.classList.toggle("active");
      // Update aria-expanded attribute for accessibility
      const isExpanded =
        menuToggleBtn.getAttribute("aria-expanded") === "true" || false;
      menuToggleBtn.setAttribute("aria-expanded", !isExpanded);
    });

    contentOverlay.addEventListener("click", function () {
      if (document.body.classList.contains("sidebar-open")) {
        document.body.classList.remove("sidebar-open");
        menuToggleBtn.classList.remove("active");
        menuToggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (skipIntroButton && introAnimation && mainContent) {
    // Initially, assume intro is visible and content is hidden
    // (Set display: none; in CSS for #main-content if intro should play first)
    // For now, we'll just handle the button click

    skipIntroButton.addEventListener("click", function () {
      introAnimation.style.display = "none";
      mainContent.style.display = "block";
    });

    // Optional: Automatically hide intro after a delay
    /*
        setTimeout(function() {
            if (introAnimation.style.display !== "none") { // Only hide if not already skipped
                introAnimation.style.display = "none";
                mainContent.style.display = "block";
            }
        }, 5000); // Hide after 5 seconds
        */
  }

  // Generate random visitor number for hit counter
  generateRandomVisitorCount();

  // Generate random units sold number
  generateRandomSoldCount();

  // Placeholder for other potential JS like hit counter simulation or guestbook interaction
  console.log("MartianToast 3000 scripts loaded!");
});

// Function to generate a random visitor count for the hit counter
function generateRandomVisitorCount() {
  const counterDigits = document.querySelectorAll(
    ".hit-counter .counter-display .counter-digit"
  );

  if (counterDigits.length > 0) {
    // Generate a random number between 10000 and 999999
    const minCount = 10000;
    const maxCount = 999999;
    const randomCount =
      Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;

    // Convert to string and pad with leading zeros if needed
    const countString = randomCount.toString().padStart(6, "0");

    // Update each digit in the counter
    for (let i = 0; i < counterDigits.length; i++) {
      if (i < countString.length) {
        counterDigits[i].textContent = countString[i];
      }
    }

    // Add occasional animation to a random digit to simulate counting
    const randomDigitIndex = Math.floor(Math.random() * counterDigits.length);
    counterDigits[randomDigitIndex].classList.add("pulse-animation");
  }
}

// Function to generate a random units sold count
function generateRandomSoldCount() {
  const counterDigits = document.querySelectorAll(
    ".hit-counter-inline .counter-digit"
  );

  if (counterDigits.length > 0) {
    // Generate a random number for 5 digits (0 to 99999)
    const minCount = 0;
    const maxCount = 99999;
    const randomCount =
      Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;

    // Convert to string and pad with leading zeros if needed (for 5 digits)
    const countString = randomCount.toString().padStart(5, "0");

    // Update each digit in the counter
    for (let i = 0; i < counterDigits.length; i++) {
      if (i < countString.length) {
        counterDigits[i].textContent = countString[i];
      } else {
        // Should not happen if HTML has 5 digits and countString has 5 digits
        counterDigits[i].textContent = "0";
      }
    }
  }
}
