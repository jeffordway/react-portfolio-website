import React, { useContext } from "react";
import { FaEnvelope, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IconsContext } from "../../contexts/IconsContext";

function ConnectLinks() {
  const { iconsStyle, faIconsSize } = useContext(IconsContext);

  return (
    <>
      <h2 className="font-bold mb-6 text-stone-800 dark:text-stone-300">
        Let's Connect
      </h2>
      <div className="font-medium text-stone-400">
        <a href="https://www.linkedin.com/in/jeffordway/" target="_blank">
          <div className={iconsStyle}>
            <FaLinkedin size={faIconsSize} />
            <div>Follow me on LinkedIn</div>
          </div>
        </a>
        <a href="https://github.com/jeffordway" target="_blank">
          <div className={iconsStyle}>
            <FaGithubSquare size={faIconsSize} />
            <div>Follow me on Github</div>
          </div>
        </a>
        <a href="mailto:jeff@ordway.me">
          <div className={iconsStyle}>
            <FaEnvelope size={faIconsSize} />
            <div>Send me an email</div>
          </div>
        </a>
      </div>
    </>
  );
}

export default ConnectLinks;
