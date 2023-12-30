import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="Name">© 2024 L'anti-sèche MMI</p>
      <p className="auteur">
        Site créé par{" "}
        <a
          href="
    https://www.linkedin.com/in/benjamin-bois%C3%A9du-09434a241/"
        >
          Benjamin Boisédu
        </a>
      </p>
      <div className="Copyright">
        <p> Tout droits réservés à l'équipe de l'anti-sèche MMI </p>
      </div>
      <div className="Social">
        <a
          href="https://www.instagram.com/antisechemmi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
            alt="instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/anti-s%C3%A8che-mmi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a
          href="https://www.facebook.com/antisechemmi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/facebook.png"
            alt="facebook"
          />
        </a>
      </div>
    </div>
  );
}
