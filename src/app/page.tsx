// Components
import { Contact } from "@/components/Contact";
import { RecentPosts } from "@/components/RecentPosts";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectListItem } from "@/components/ProjectListItem";

// Images
import vanirImage from "@/assets/projects/vanir.png";
import envisageImage from "@/assets/projects/envisage.png";
import tentoriumImage from "@/assets/projects/tentorium.png";
import lomaImage from "@/assets/projects/loma.png";
import kaputImage from "@/assets/projects/kaput.png";
import adventureImage from "@/assets/projects/adventure.png";
import redditImage from "@/assets/projects/reddit.png";
import frankerImage from "@/assets/projects/franker.png";
import ticTacToeImage from "@/assets/projects/tic-tac-toe.png";
import keylightCommanderImage from "@/assets/projects/keylight-commander.png";

type ProjectListProps = {
  children: React.ReactNode;
};

const ProjectList: React.FC<ProjectListProps> = (props) => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 container pb-24">
      {props.children}
    </div>
  );
};

export default async function Home() {
  return (
    <main>
      <Hero />
      <Header id="work" title="Work" description="My professional work." />
      <ProjectList>
        <ProjectListItem
          image={lomaImage}
          title="LOMA"
          technologies={["React", "TypeScript", "PostgreSQL"]}
          description="I currently work as a founding engineer at LOMA, building a platform designed to scale and validate local marketing for multi-unit brands."
          websiteUrl="https://www.lomafunds.com/"
        />
        <ProjectListItem
          image={tentoriumImage}
          title="Tentorium"
          technologies={["Go", "React", "TypeScript"]}
          description="I helped Tentorium develop automated stock trading services that take emotions out of investing."
          websiteUrl="https://www.tentorium.io/"
        />
        <ProjectListItem
          image={vanirImage}
          title="Vanir"
          technologies={["React", "TypeScript", "Next.js"]}
          description="Created as a tool for Taylor University's IT department, Vanir is a lightweight and mobile-friendly application which combines data from the department's asset management, firewall, and helpdesk systems."
        />
        <ProjectListItem
          image={envisageImage}
          title="Envisage Planner"
          technologies={["Vue", "JavaScript", "Prisma"]}
          description="As a founding software & infrastructure engineer, I helped Envisage create a next-generation degree planner which helps students to reimagine college through academic planning."
          websiteUrl="https://envisageplanner.com/"
        />
      </ProjectList>

      <Header
        id="projects"
        title="Projects"
        description="My personal projects."
      />

      <ProjectList>
        <ProjectListItem
          image={kaputImage}
          title="Kaput-CLI"
          technologies={["Rust"]}
          description="The unofficial CLI client for Put.io. Kaput lets you manage your Put.io account from the comfort of your terminal!"
          websiteUrl="https://kaput.sh/"
          repoUrl="https://github.com/davidchalifoux/kaput-cli"
        />

        <ProjectListItem
          image={keylightCommanderImage}
          title="Keylight Commander"
          technologies={["TypeScript", "Rust", "React"]}
          description="Keylight Commander is an open-source and cross-platform application for controlling Elgato Key Lights."
          repoUrl="https://github.com/davidchalifoux/keylight-commander"
        />

        <ProjectListItem
          image={adventureImage}
          title="Adventure"
          technologies={["Vue", "Nuxt", "TailwindCSS"]}
          description="Adventure is a modern web-based version of the original Colossal Cave text adventure game. Created as a natural language processing experiment, it can recognize sentences instead of commands, and you can use speech-to-text and text-to-speech as well."
          websiteUrl="https://adventure.chalifoux.dev/"
          repoUrl="https://github.com/davidchalifoux/adventure"
        />

        <ProjectListItem
          image={redditImage}
          title="Reddit-Clone"
          technologies={["Vue", "Firebase", "JavaScript"]}
          description="Reddit clone built using Firebase and Vue. It features Google authentication, posting, voting, subreddits, user profiles, and notifications through Pushover."
          websiteUrl="https://reddit-clone.chalifoux.dev/"
          repoUrl="https://github.com/davidchalifoux/reddit-clone"
        />

        <ProjectListItem
          image={frankerImage}
          title="FrankerFaceZ for Raycast"
          technologies={["TypeScript"]}
          description="An extension for Raycast that allows you to quickly use the FrankerFaceZ emote library."
          websiteUrl="https://www.raycast.com/davidchalifoux/frankerfacez"
          repoUrl="https://github.com/raycast/extensions/tree/47cdb0892464fd5dc65af7eef231aef6bd93a4f9/extensions/frankerfacez/"
        />

        <ProjectListItem
          image={ticTacToeImage}
          title="Tic-Tac-Toe"
          technologies={["Vue", "JavaScript"]}
          description="The classic game of tic-tac-toe created with VueJS. You can play against a friend or a basic AI."
          websiteUrl="https://tic-tac-toe.chalifoux.dev/"
          repoUrl="https://github.com/davidchalifoux/tic-tac-toe"
        />
      </ProjectList>

      <Contact />

      <RecentPosts />
    </main>
  );
}
