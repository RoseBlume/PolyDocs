---
title: 'Package'
sidebar:
  order: 2
---

 To create a new package with Cargo, you can use the following command:



```bash

cargo new my-package

```



This will create a new directory called "my-package" with the basic structure for a Rust package. You can replace "my-package" with the desired name for your package.



Once the package is created, you can navigate into the directory using:



```bash

cd my-package

```



Inside the package directory, you will find a "src" directory where you can place your Rust source code files. By convention, the entry point of your package is usually a file called "main.rs" located in the "src" directory.



To build and run your package, you can use the following command:



```bash

cargo run

```



This will compile and execute your package. If your package has a "main.rs" file, it will be executed as the entry point.



You can also build your package without running it using:



```bash

cargo build

```



This will compile your package and generate the executable file in the "target/debug" directory.



To include dependencies in your package, you can specify them in the "Cargo.toml" file. For example, to include the "rand" crate, you can add the following line under the "[dependencies]" section:



```toml

rand = "0.8.4"

```



After adding the dependency, you can use it in your code by adding an import statement at the top of your source code file.



That's it! You have now created a new package with Cargo and learned how to build, run, and include dependencies in it.
