// Array of theme objects
const themes = [
  {
    background: "#1A1A2E",
    color: "#FFFFFF",
    primaryColor: "#0F3460"
  },
  {
    background: "#461220",
    color: "#FFFFFF",
    primaryColor: "#E94560"
  },
  {
    background: "#192A51",
    color: "#FFFFFF",
    primaryColor: "#967AA1"
  },
  {
    background: "#F7B267",
    color: "#000000",
    primaryColor: "#F4845F"
  },
  {
    background: "#F25F5C",
    color: "#000000",
    primaryColor: "#642B36"
  },
  {
    background: "#231F20",
    color: "#FFF",
    primaryColor: "#BB4430"
  }
];

// Function to set the theme by updating CSS variables
const setTheme = (theme) => {
  const root = document.querySelector(":root"); // Select the root element
  root.style.setProperty("--background", theme.background); // Update background color
  root.style.setProperty("--color", theme.color); // Update text color
  root.style.setProperty("--primary-color", theme.primaryColor); // Update primary color
};

// Function to display theme buttons
const displayThemeButtons = () => {
  const btnContainer = document.querySelector(".theme-btn-container"); // Select the button container
  themes.forEach((theme) => {
    const div = document.createElement("div"); // Create a button div
    div.className = "theme-btn"; // Add class to the button
    div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`; // Set button styles
    btnContainer.appendChild(div); // Append button to the container
    div.addEventListener("click", () => setTheme(theme)); // Add click event to change theme
  });
};

// Initialize theme buttons
displayThemeButtons();
