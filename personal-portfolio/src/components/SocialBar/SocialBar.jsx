import "./style.css";

export const SocialBar = () => {
  return (
    <div className="d-flex justify-content-center newsletter-bx wow slideInUp flex-column align-items-center mt-5">
      <h3 className="mb-5">Social media</h3>
      <ul className="socialListUl">
        <li className="socialListIl">
          <a href="https://www.linkedin.com/in/gonzaloferrer0/">
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li className="socialListIl">
          <a href="https://github.com/facc77">
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
