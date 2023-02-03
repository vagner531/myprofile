import {
    FaGithub,
    FaDev,
    FaLinkedin,
    FaQuora,
    FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Vagner Santos. All Rights Reserved.`,
    author: {
        name: "Vagner Santos",
        accounts: [{
                url: "https://github.com/vagner531",
                label: "Github Account",
                type: "gray",
                icon: < FaGithub / >
            },
            {
                url: "https://dev.to/vagner531",
                label: "Dev Account",
                type: "gray",
                icon: < FaDev / >
            },
            {
                url: "https://www.linkedin.com/in/vagnersantosnascimento/",
                label: "LinkedIn Account",
                type: "linkedin",
                icon: < FaLinkedin / >
            },
            // {
            //   url: "https://www.quora.com/profile/Muhammad-Ahmad-66",
            //   label: "Quora Account",
            //   type: "red",
            //   icon: <FaQuora />
            // },
            {
                url: "mailto:vagnersantos.vagnerndsanto@gmail.com",
                label: "Vagner Santos",
                type: "gray",
                icon: < FiMail / >
            }
        ]
    }
};

export default siteConfig;