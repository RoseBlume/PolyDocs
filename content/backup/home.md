---
title: Home
sidebar:
  order: 0
---

Welcome to the Home section of our documentation. Here, you will find a comprehensive guide to various programming languages and application frameworks. Whether you are a beginner looking to learn the basics or an experienced developer seeking to expand your knowledge, this section provides valuable resources and insights.

Explore the High Level Languages to understand the fundamentals of web development, server-side scripting, and versatile programming tasks. Dive into Low Level Languages for system-level programming and performance-critical applications. Discover App Frameworks to build cross-platform applications with ease.

<Tabs syncKey="distro">
  <TabItem label="Debian">

```sh
sudo apt update
sudo apt install libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libxdo-dev \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev
```

  </TabItem>
  <TabItem label="Arch">

```sh
sudo pacman -Syu
sudo pacman -S --needed \
  webkit2gtk-4.1 \
  base-devel \
  curl \
  wget \
  file \
  openssl \
  appmenu-gtk-module \
  libappindicator-gtk3 \
  librsvg \
  xdotool
```

  </TabItem>
  <TabItem label="Fedora">

```sh
sudo dnf check-update
sudo dnf install webkit2gtk4.1-devel \
  openssl-devel \
  curl \
  wget \
  file \
  libappindicator-gtk3-devel \
  librsvg2-devel \
  libxdo-devel
sudo dnf group install "c-development"
```

  </TabItem>
  <TabItem label="Gentoo">

```sh
sudo emerge --ask \
  net-libs/webkit-gtk:4.1 \
  dev-libs/libappindicator \
  net-misc/curl \
  net-misc/wget \
  sys-apps/file
```

  </TabItem>
  <TabItem label="OSTree">

```sh
sudo rpm-ostree install webkit2gtk4.1-devel \
  openssl-devel \
  curl \
  wget \
  file \
  libappindicator-gtk3-devel \
  librsvg2-devel \
  libxdo-devel \
  gcc \
  gcc-c++ \
  make
sudo systemctl reboot
```

  </TabItem>
  <TabItem label="openSUSE">

```sh
sudo zypper up
sudo zypper in webkit2gtk3-devel \
  libopenssl-devel \
  curl \
  wget \
  file \
  libappindicator3-1 \
  librsvg-devel
sudo zypper in -t pattern devel_basis
```

  </TabItem>
  <TabItem label="Alpine">
```sh
sudo apk add \
  build-base \
  webkit2gtk-4.1-dev \
  curl \
  wget \
  file \
  openssl \
  libayatana-appindicator-dev \
  librsvg
```

> Note: Alpine Linux containers don’t include any fonts by default. To ensure text renders correctly in your Tauri app, install at least one font package (for example, `font-dejavu `).

  </TabItem>
  <TabItem label="NixOS">

:::note
Instructions for Nix/NixOS can be found in the [NixOS Wiki](https://wiki.nixos.org/wiki/Tauri).
:::

  </TabItem>
</Tabs>



## High Level Languages
<CardGrid>
  <LinkCard 
    title="HTML" 
    href="/high-level/html/elements.html"
    description="Learn the basics of HTML and how to structure web content."
  />
  <LinkCard 
    title="CSS" 
    href="/high-level/css/basics.html"
    description="Discover how to style your web pages with CSS."
  />
  <LinkCard 
    title="JavaScript" 
    href="/high-level/javascript/variables.html"
    description="Understand the fundamentals of JavaScript for dynamic web content."
  />
  <LinkCard 
    title="C#" 
    href="/high-level/CSharp/data-types.html"
    description="Dive into C# programming and build robust applications."
  />
  <LinkCard 
    title="Dart" 
    href="/high-level/dart/variables.html"
    description="Explore Dart language and its applications in Flutter."
  />
  <LinkCard 
    title="Java" 
    href="/high-level/java/data-types.html"
    description="Master Java programming for various applications."
  />
  <LinkCard 
    title="PHP" 
    href="/high-level/php/data-types.html"
    description="Get started with PHP for server-side scripting."
  />
  <LinkCard 
    title="Python" 
    href="/high-level/python/data-types.html"
    description="Learn Python for versatile programming tasks."
  />
  <LinkCard 
    title="R" 
    href="/high-level/r/basic-syntax.html"
    description="Analyze data and perform statistical computing with R."
  />
  <LinkCard 
    title="SQL" 
    href="/high-level/sql/count.html"
    description="Manage and query databases using SQL."
  />
  <LinkCard 
    title="TypeScript" 
    href="/high-level/typescript/simple-types.html"
    description="Enhance your JavaScript with TypeScript."
  />
</CardGrid>

## Low Level Languages
<CardGrid>
  <LinkCard 
    title="C" 
    href="/low-level/c/Get_Started.html"
    description="Learn the fundamentals of C programming for system-level applications."
  />
  <LinkCard 
    title="C++" 
    href="/low-level/CPP/Variables.html"
    description="Master C++ for performance-critical applications."
  />
  <LinkCard 
    title="NASM" 
    href="/low-level/nasm/Basic_Syntax.html"
    description="Dive into NASM for low-level assembly programming."
  />
  <LinkCard 
    title="Rust" 
    href="/low-level/rust/comments.html"
    description="Explore Rust for safe and concurrent systems programming."
  />
</CardGrid>