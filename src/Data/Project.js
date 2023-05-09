import HomePageMU from "../Image/ImageProjectMu/HomePage.png";
import MainLineupPage from "../Image/ImageProjectMu/MainLineupPage.png";
import ManagerPage from "../Image/ImageProjectMu/ManagerPage.png";
import LegendPage from "../Image/ImageProjectMu/LegendPage.png";

import HomePageMolla from "../Image/ImageProjectMolla/HomePage.png";
import ProductsPageMolla from "../Image/ImageProjectMolla/ProductsPage.png";
import ContactPageMolla from "../Image/ImageProjectMolla/ContactPage.png";
import LoginPageMolla from "../Image/ImageProjectMolla/LoginPage.png";
import CartPageMolla from "../Image/ImageProjectMolla/CartPage.png";
import CheckoutPageMolla from "../Image/ImageProjectMolla/CheckoutPage.png";

import HomePageRedux from "../Image/ImageProjectRedux/HomePage.png";
import AddPageRedux from "../Image/ImageProjectRedux/AddPage.png";

import HomePageQuiz from "../Image/ImageProjectPortolio/HomePageQuiz.png";
import QuestionPage from "../Image/ImageProjectPortolio/QuestionPage.png";
import ResultPage from "../Image/ImageProjectPortolio/ResultPage.png";

const ArrayProject = [
  {
    id: 1,
    src: [HomePageMU, MainLineupPage, ManagerPage, LegendPage],
    Name: "Web Manchester United",
    Technologies: "HTML/CSS, JavaScript",
    Features: "View detailed player information on Manchester United.",
    Preview: "https://vanthinn.github.io/Page-Manchester-United/",
    Source: "https://github.com/vanthinn/Page-Manchester-United",
  },
  {
    id: 2,
    src: [HomePageQuiz, QuestionPage, ResultPage],
    Name: "Quizes Game",
    Technologies: "VueJS, TailwindCSS",
    Features:
      " A website for users to experience questions with different topics through the game Quiz",
    Preview: "https://vuejs-vueuse-motion.vercel.app",
    Source: "https://github.com/vanthinn/vuejs-vueuse-motion",
  },
  {
    id: 3,
    src: [
      HomePageMolla,
      ProductsPageMolla,
      ContactPageMolla,
      LoginPageMolla,
      CartPageMolla,
      CheckoutPageMolla,
    ],
    Name: "Molla Shop",
    Technologies: "React, TailwindCSS, Firebase, Redux-toolkit",
    Features:
      "Register, login using Firebase, filter products, find products, display products in cart,  view detailed product information, pagination, responsive on Mobile, Tablet,",
    Preview: "https://e-shop-vanthinn.vercel.app/",
    Source: "https://github.com/vanthinn/e-shop",
  },
  {
    id: 4,
    src: [HomePageRedux, AddPageRedux],
    Name: "Product--Redux-Toolkit",
    Technologies: "React, Redux-toolkit",
    Features: "Add, Edit, Remove product",
    Preview: "https://product-redux-toolkit.vercel.app/product",
    Source: "https://github.com/vanthinn/Product---Redux-Toolkit",
  },
];

export default ArrayProject;
