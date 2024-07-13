import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

export const Contact: React.FC = () => {
  return (
    <div className="container py-64" id="contact">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-100">
            Contact
          </h2>
          <p className="mt-4 leading-7 text-neutral-400">Get in touch.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
          <div className="rounded-2xl bg-neutral-950 p-10">
            <div className="flex items-center gap-2">
              <IconMail className="text-neutral-100 w-6 h-6" />
              <h3 className="text-base font-semibold leading-7 text-neutral-100">
                Mail
              </h3>
            </div>
            <dl className="mt-3 space-y-1 text-sm leading-6 text-neutral-600">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <Link
                    className="font-semibold text-yellow-300"
                    href="mailto:mail@chalifoux.dev"
                  >
                    mail@chalifoux.dev
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl bg-neutral-950 p-10">
            <div className="flex items-center gap-2">
              <IconBrandGithub className="text-neutral-100 w-6 h-6" />
              <h3 className="text-base font-semibold leading-7 text-neutral-100">
                GitHub
              </h3>
            </div>
            <dl className="mt-3 space-y-1 text-sm leading-6 text-neutral-600">
              <div>
                <dt className="sr-only">GitHub</dt>
                <dd>
                  <Link
                    className="font-semibold text-yellow-300"
                    href="https://github.com/davidchalifoux"
                    target="_blank"
                  >
                    /davidchalifoux
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl bg-neutral-950 p-10">
            <div className="flex items-center gap-2">
              <IconBrandLinkedin className="text-neutral-100 w-6 h-6" />
              <h3 className="text-base font-semibold leading-7 text-neutral-100">
                LinkedIn
              </h3>
            </div>
            <dl className="mt-3 space-y-1 text-sm leading-6 text-neutral-600">
              <div>
                <dt className="sr-only">LinkedIn</dt>
                <dd>
                  <Link
                    className="font-semibold text-yellow-300"
                    href="https://www.linkedin.com/in/david-chalifoux/"
                    target="_blank"
                  >
                    /david-chalifoux
                  </Link>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl bg-neutral-950 p-10">
            <div className="flex items-center gap-2">
              <IconBrandX className="text-neutral-100 w-6 h-6" />
              <h3 className="text-base font-semibold leading-7 text-neutral-100">
                X
              </h3>
            </div>
            <dl className="mt-3 space-y-1 text-sm leading-6 text-neutral-600">
              <div>
                <dt className="sr-only">X</dt>
                <dd>
                  <Link
                    className="font-semibold text-yellow-300"
                    href="https://x.com/DavidChalifoux"
                  >
                    @davidchalifoux
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
