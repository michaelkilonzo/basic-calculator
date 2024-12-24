
# Calculator App 🧮

The **Calculator App** is a responsive and interactive calculator built with HTML, CSS, and JavaScript. It supports basic arithmetic operations and has an intuitive user interface, making it easy to perform calculations on any device.

---

## ✨ Features

- **Basic Arithmetic Operations:** Supports addition, subtraction, multiplication, and division.
- **Clear Button:** Resets the calculator to its initial state.
- **Negative/Positive Toggle (+/-):** Switch between positive and negative numbers.
- **Percentage Button (%):** Calculates percentage values.
- **Decimal Support:** Perform calculations with decimal points.
- **Responsive Layout:** The design adjusts to different screen sizes for ease of use on any device.

---

## 🚀 Getting Started

### Prerequisites

To run the app locally, you need:
- A web browser (e.g., Chrome, Firefox, Edge, Safari)
- A text editor (if you wish to modify the code)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/calculator-app.git
   ```

2. Navigate to the project folder:
   ```bash
   cd calculator-app
   ```

3. Open `index.html` in your web browser to start using the calculator.

---

## 📖 How to Use

1. **Input Digits:** Click on the numeric buttons (0-9) to input numbers.
2. **Perform Calculations:** Use the operation buttons (`+`, `-`, `*`, `/`) for calculations.
3. **Clear the Calculator:** Click on the **AC** button to reset the calculator.
4. **Switch Sign:** Use the **+/-** button to toggle between positive and negative values.
5. **Percentage Calculation:** Click the **%** button to calculate percentages.
6. **Decimal Input:** Click the **.** button to input decimal numbers.
7. **Result:** Click the **=** button to get the result of the calculation.

---

## 📂 Project Structure

```
calculator-app/
│
├── index.html        # Main HTML structure
├── style.css         # Styling for the app
├── scripts.js        # JavaScript functionality
└── README.md         # Documentation
```

---

## 🔧 Customization

### Change Button Colors

Edit the button background colors in `style.css` under the `button` selectors:
```css
button {
    background-color: #00adb5;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    letter-spacing: .12rem;
    cursor: pointer;
    transition: all 0.3s ease;
}
```

### Modify Layout

Adjust the grid layout or container size in the `.container` and `.btn-container` selectors:
```css
.container {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 320px;
    height: 480px;
}
```

---

## 🖼️ Demo

Here’s how it looks:

![Calculator App Screenshot](https://via.placeholder.com/800x400.png?text=Calculator+App+Screenshot)

(Optional: Replace with an actual screenshot or a link to a live demo)

---

## 🤝 Contribution

Contributions are welcome! If you’d like to improve this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Submit a pull request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software.

---

## 🙌 Acknowledgments

- Inspired by classic handheld calculators.
- Built using vanilla JavaScript, CSS, and HTML.

---

Enjoy calculating with ease! ✨
