import Head from "next/head";

import ProjectListItem from "../components/ProjectListItem";

import {
  TwitterOutlined,
  GithubOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

import kaputImage from "../public/images/work/kaput.png";
import adventureImage from "../public/images/work/adventure.png";
import ticTacToeImage from "../public/images/work/tic-tac-toe.png";
import redditImage from "../public/images/work/reddit.png";
import vanirImage from "../public/images/work/vanir.png";
import envisageImage from "../public/images/work/envisage.png";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Head>
        <title>David Chalifoux</title>
        <meta name="description" content="David Chalifoux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Old nav not being used */}
      {/* <nav className="flex items-center h-28 mx-8">
        <div className="mr-16 font-bold text-xl">Chalifoux.dev</div>
        <div className="mr-8 text-stone-400 hover:underline">
          <Link href="/">Home</Link>
        </div>
        <div className="mr-8 text-stone-400 hover:underline">
          <a href="#work">Work</a>
        </div>
        <div className="mr-8 text-stone-400 hover:underline">
          <a href="#contact">Contact</a>
        </div>
        <div className="text-stone-400">Blog</div>
      </nav> */}

      <main className="mx-8">
        <div className="h-96 flex flex-col justify-center text-lg text-center">
          <div>Hello!</div>
          <div>My name is David Chalifoux.</div>
          <div>I&apos;m a developer who loves the web.</div>
        </div>
        <div
          className="font-medium text-2xl text-stone-400 pt-8 pb-2 text-center"
          id="work"
        >
          Work
        </div>
        <ProjectListItem
          image={vanirImage}
          name={"Vanir"}
          description={
            "Created as an internal tool for Taylor University's IT department, Vanir is a lightweight and mobile-friendly application which combines data from the department's asset management, firewall, and helpdesk systems."
          }
        />
        <ProjectListItem
          image={envisageImage}
          siteURL="https://envisageplanner.com"
          name={"Envisage Planner"}
          description={
            "Working as a software & infrastructure engineer, I helped Envisage create a next-generation degree planner which helps students to reimagine college through academic planning."
          }
        />
        <ProjectListItem
          image={kaputImage}
          siteURL="https://github.com/davidchalifoux/kaput-cli"
          name={"Kaput-CLI"}
          sourceURL={"github.com/davidchalifoux/kaput-cli"}
          description={
            "The unofficial CLI client for Put.io - the remote version of your downloads folder. Kaput can be used to download and manage all of the files and transfers on your account. It's particularly useful when used on headless servers."
          }
        />
        <ProjectListItem
          image={adventureImage}
          name={"Adventure"}
          sourceURL={"github.com/davidchalifoux/adventure"}
          siteURL={"https://adventure.chalifoux.dev/"}
          description={
            "Adventure is a modern web-based version of the original Colossal Cave text adventure game. Created as a natural language processing experiment, you don't have to worry about getting the commands perfectly right, and you can use speech-to-text and text-to-speech as well."
          }
        />
        <ProjectListItem
          image={redditImage}
          siteURL="https://reddit-clone-643f9.web.app"
          name={"Reddit-Clone"}
          description={
            "Reddit clone that I built in a weekend using Firebase and Vue. It features Google authentication, posting, voting, subreddits, user profiles, and notifications through Pushover."
          }
        />
        <ProjectListItem
          image={ticTacToeImage}
          siteURL="https://tic-tac-toe.chalifoux.dev"
          name={"Tic-Tac-Toe"}
          sourceURL={"github.com/davidchalifoux/tic-tac-toe"}
          description={
            "The classic game of tic-tac-toe created with VueJS. You can play against a friend or a basic AI."
          }
        />
        <div
          className="font-medium text-2xl text-stone-400 pt-8 text-center mb-8"
          id="contact"
        >
          Contact
        </div>
        <div className="text-center text-lg">
          The best way to reach me is through{" "}
          <a href="mailto:mail@chalifoux.dev" className="underline">
            email
          </a>{" "}
          or social media.
        </div>
        <div className="text-center mt-8">
          <a
            href="https://twitter.com/DavidChalifoux"
            className="hover:text-[#00aced]"
          >
            <TwitterOutlined className="text-4xl" />
          </a>
          <a
            href="https://www.instagram.com/david.chalifoux/"
            className="hover:text-[#e1306c] ml-12"
          >
            <InstagramOutlined className="text-4xl" />
          </a>
          <a
            href="https://github.com/davidchalifoux"
            className="hover:text-[#c9510c] ml-12"
          >
            <GithubOutlined className="text-4xl" />
          </a>
        </div>
      </main>

      <footer className="h-36 flex items-center mt-12 mx-8 justify-center text-center">
        <div className="text-stone-600">
          Created with{" "}
          <a href="https://nextjs.org/" className="hover:underline">
            Next.js
          </a>
          .<br />
          Source code available on{" "}
          <a
            href="https://github.com/davidchalifoux/chalifoux.dev"
            className="hover:underline"
          >
            GitHub
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
