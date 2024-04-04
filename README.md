# My Portfolio Website

Welcome to my portfolio website! This project is built with Next.js, Tailwind CSS, TypeScript, and deployed on Vercel.

## About

This website serves as my online portfolio, showcasing my skills, projects, and achievements. It's designed to provide visitors with an overview of my professional background and experiences.

## Features

- Responsive and visually appealing design.
- Sections for showcasing projects, skills, and contact information.
- Built-in contact form for easy communication.
- Easy-to-update content and projects through data files.
- Deployment on Vercel for fast and reliable hosting.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building server-rendered and statically generated applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript.
- [Vercel](https://vercel.com/): A cloud platform for hosting your applications.

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/hleomojica/henrrymojica.me-next.git
   ```

## Dev Server with HTTPS Proxy On macOS

1. Install
   ```bash
   brew install mkcert
   ```
2. Install root certificate:
   ```bash
   mkcert -install
   ```
3. Generate certificate for localhost:

   ```bash
   mkcert localhost
   ```

4. Install the HTTPS proxy and run the proxy
   ```bash
   npm install -g local-ssl-proxy
   local-ssl-proxy --source 3000 --target 3001 --cert localhost.pem --key localhost-key.pem
   ```
