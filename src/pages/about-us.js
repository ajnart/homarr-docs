import {
  IconCode,
  IconDashboard,
  IconDatabase,
  IconDragDrop,
  IconLock,
  IconSettings,
  IconUser,
} from '@tabler/icons';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

const authors = [
  {
    name: 'Thomas Camlong',
    image: 'https://avatars.githubusercontent.com/u/49837342?v=4',
    text: 'A passionate full stack developer from France',
    link: 'https://github.com/ajnart',
  },
  {
    name: 'Meier Lukas',
    image: 'https://avatars.githubusercontent.com/u/63781622?v=4',
    text: 'Working on different projects like ajnart/homarr and Meierschlumpf/sempla w/ NextJS, tRPC, Mantine',
    link: 'https://github.com/Meierschlumpf',
  },
  {
    name: 'manuel-rw',
    image: 'https://avatars.githubusercontent.com/u/30572287?v=4',
    link: 'https://github.com/manuel-rw',
    text: 'Developer apprentice 🚀, loves to code, always open minded to learn new things. 🌌 .NET, React / Next JS',
  },
  {
    link: 'https://github.com/walkxcode',
    name: 'Bjorn Lammers',
    image: 'https://avatars.githubusercontent.com/u/71191962?v=4',
    text: 'IT enthusiast from The Netherlands',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/18658092?v=4',
    name: 'Mauz',
    link: 'https://github.com/MauriceNino',
    text: 'Passionate JS/TS advocate',
  },
];

const roadmap = [
  {
    icon: <IconDashboard size="1rem" className="text-red-400" strokeWidth={1.5} />,
    title: 'MVP Dashboard',
    subtitle: 'Released in early 2022',
    content: 'A mininmal dashboard solution for creating very basic dashboards with apps on it.',
    reached: true,
  },
  {
    icon: <IconDragDrop size="1rem" className="text-red-400" strokeWidth={1.5} />,
    title: 'Drag and Drop System',
    subtitle: 'Released in 0.11.0',
    content:
      'A complete overhaul of the dashboard system, in which we implemented Gridstack as a drag and drop library.',
    reached: true,
  },
  {
    icon: <IconCode size="1rem" strokeWidth={1.5} />,
    title: 'Technical debt and tRPC migration',
    subtitle: 'Due to release in 0.12.4',
    content:
      "Homarr has grown in complexity and the code is starting to get a problem. We often hit a border, where it's getting harder to implement something, than it actually should be. This is also known as technical debt. We have learned many new things in our journey and have decided to migrate to tRPC. That will clean up code and enable us for faster development.",
    badge: 'In progress',
  },
  {
    icon: <IconLock size="1rem" strokeWidth={1.5} />,
    title: 'Authentication',
    subtitle: 'Due to release in 0.12.5',
    content:
      "A part of Homarr is still not secure enough to be exposed to the internet. Existing solutions for authentication exist, but are incredibly cumbersome. We'll implement a basic authentication solution using the new tRPC APIs and remove the old legacy systems.",
  },
  {
    icon: <IconDatabase size="1rem" strokeWidth={1.5} />,
    title: 'Breaking: Migrate from JSON to Sqlite',
    subtitle: 'Due to release in 0.13',
    content:
      "Homarr still uses an unstructured JSON file behind the scenes. This adds much complexity regarding types, errors, exceptions and relationships. In 0.13, we'll migrate to a RDBMS. After that, JSON will no longer be supported.",
  },
  {
    icon: <IconUser size="1rem" strokeWidth={1.5} />,
    title: 'Administration Pages',
    subtitle: 'Due to release in 0.13.1',
    content:
      "In this version, we'll add an administration section to Homarr and add a more complex permission system for users.",
  },
  {
    icon: <IconSettings size="1rem" strokeWidth={1.5} />,
    title: 'Dashboard administration & configuration',
    subtitle: 'Due to release in 0.13.2',
    content:
      "The settings in Homarr are a bit cluttered. We'll migrate the existing settings for dashboards to the new administration pages.",
  },
];

export default function Home() {
  return (
    <Layout title="Roadmap">
      <main className="mx-auto w-full md:w-2/3 ps-10 pr-10 mt-5">
        <h1 className="text-4xl">About us</h1>
        <p className="text-sm">
          Homarr is a community driven open source project that is being maintained by volunteers.
          We are working on Homarr, because we want to have fun, learn new technologies and get
          challenged. We are not sponsored and do not get any compensation for our work - we work on
          this project solely on our leisure time.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-10">
          {authors.map((author) => (
            <a className="hover:no-underline" href={author.link}>
              <div class="flex items-center space-x-4 h-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 p-2 rounded transition-colors">
                <img class="w-10 h-10 rounded-full" src={author.image} alt="" />
                <div class="font-medium dark:text-white">
                  <div>{author.name}</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">{author.text}</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex items-center flex-col gap-2">
          <p className="text-gray-500 text-sm m-0">including many more contributors...</p>
          <div class="flex -space-x-4">
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://avatars.githubusercontent.com/u/39219859?v=4"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://avatars.githubusercontent.com/u/15677803?v=4"
              alt=""
            />
            <img
              class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://avatars.githubusercontent.com/u/1828486?v=4"
              alt=""
            />
            <a
              class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="https://github.com/ajnart/homarr/graphs/contributors"
              target='_blank'
            >
              ...
            </a>
          </div>
        </div>

        <h2 className="text-2xl mt-16 mb-10">Roadmap</h2>

        <ol class="relative border-l border-0 border-gray-200 dark:border-gray-700 border-solid">
          {roadmap.map((item) => (
            <li class="mb-10 ml-6">
              <span
                class={clsx(
                  'absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-opacity-10 ',
                  item.reached ? 'bg-red-100 dark:ring-red-500 dark:bg-red-900' : 'bg-gray-100 dark:bg-zinc-600'
                )}
              >
                {item.icon}
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
                {item.badge && (
                  <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 ml-3">
                    {item.badge}
                  </span>
                )}
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.subtitle}
              </time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {item.content}
              </p>
            </li>
          ))}
        </ol>
      </main>
    </Layout>
  );
}
