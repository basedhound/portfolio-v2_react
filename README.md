<div align="center">
    <a href="https://portfolio-v2-fv.netlify.app" target="_blank">
      <img src="/public/design/preview.png" alt="Project Banner">
    </a>
  <h3 align="center">Portfolio v2</h3>
</div>

## <br /> 📋 <a name="table">Table of Contents</a>

- ✨ [Introduction](#introduction)
- ⚙️ [Tech Stack](#tech-stack)
- 📝 [Features](#features)
- 🚀 [Quick Start](#quick-start)

## <br /> <a name="introduction">✨ Introduction</a>

**[EN]** A modern and minimalist portfolio website crafted using React and Vite. The site features smooth animations powered by Framer Motion, a responsive carousel implemented with the Swiper library, and also typewriter effect which adds a dynamic touch to the text elements. Additionally, dynamic filtering and sorting enhance the usability of the portfolio. For communication, EmailJS is integrated to enable direct contact using the form.

**[FR]** Un portfolio moderne et minimaliste réalisé avec React et Vite. Le site intègre des animations fluides grâce à Framer Motion, un carrousel réactif implémenté avec la bibliothèque Swiper, ainsi qu'un effet de machine à écrire qui ajoute une touche dynamique aux éléments textuels. Le filtrage ainsi que le tri dynamiques améliorent l'utilisation du portfolio. Pour la communication, EmailJS est intégré pour permettre un contact direct via le formulaire.

## <br /> <a name="tech-stack">⚙️ Tech Stack</a>

- [**React**](https://react.dev/reference/react) is a popular JavaScript library for building user interfaces, particularly single-page applications where data changes over time. React's component-based architecture allows developers to create reusable UI components, making development more efficient and the codebase easier to maintain.

- [**Framer Motion**](https://www.framer.com/motion/) is a React animation library designed for creating smooth, interactive animations and transitions. It simplifies complex animations with a straightforward API, supports gesture-based interactions, and offers physics-based animations for realistic motion effects.

- [**Typewriter Effect**](https://www.npmjs.com/package/react-simple-typewriter) is a common animation technique used to create a typing animation, where text appears on the screen as if it is being typed in real time. In React, this can be achieved using various libraries or custom code to enhance the user experience by adding dynamic and engaging text elements.

- [**EmailJS**](https://www.emailjs.com/docs/examples/reactjs/) is a service that enables developers to send emails directly from JavaScript applications without requiring server-side code. It supports various email service providers and allows integration with forms to send emails directly from the web application, making it ideal for contact forms and user feedback.

- [**Swiper**](https://swiperjs.com/react) is a modern touch slider library that provides a highly customizable and responsive carousel for web applications. It supports touch gestures, mouse interactions, and a wide range of features like lazy loading, parallax effects, and multiple slide layouts, making it a versatile choice for implementing carousels and sliders.

- [**Vite**](https://vitejs.dev/guide/) is a next-generation front-end build tool that focuses on speed and performance. It provides a fast development environment with instant hot module replacement (HMR) and optimized production builds. Vite's native support for modern JavaScript and its plugin ecosystem make it a powerful choice for developing modern web applications.

## <br/> <a name="features">📝 Features</a>
👉 **Responsive Design**: Fully functional and visually appealing across all devices and screen sizes.

👉 **Dynamic UI Components**: Interactive and engaging user interface elements built with React.

👉 **Smooth Animations**: Powered by Framer Motion for an engaging user experience.

👉 **Responsive Carousel**: Implemented with the Swiper library for seamless navigation.

👉 **Typewriter Effect**: Adds a dynamic touch to text elements, enhancing interactivity.

👉 **Dynamic Filtering and Sorting**: Enhances usability by allowing easy portfolio management.

👉 **Direct Contact Form**: Integrated with EmailJS to enable direct communication through the form.

👉 **Fast Development**: Built with Vite for a speedy and efficient development process.

## <br /> <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

<br/>**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

<br/>**Cloning the Repository**

```bash
git clone {git remote URL}
```

<br/>**Installation**

Let's install the project dependencies, from your terminal, run:

```bash
npm install
# or
yarn install
```

<br/>**Set Up Environment Variables**

Create a new file named `.env` in the client folder of your project and add the following content:

```env
VITE_EJS_KEY=
```

Replace the placeholder values with your actual respective account credentials:

- [EmailJs](https://www.emailjs.com/)

<br/>**Running the Project**

Installation will take a minute or two, but once that's done, you should be able to run the following command:

```bash
npm run dev
# or
yarn dev
```

Open [`http://localhost:5173`](http://localhost:5173) in your browser to view the project.
