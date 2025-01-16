---
title: 'Dependencies'
sidebar:
  order: 1
---

 To edit dependencies in Cargo, you need to modify the `Cargo.toml` file in your Rust project. This file contains the configuration for your project's dependencies.



To add a new dependency, you can use the following syntax:



```toml

[dependencies]

dependency_name = "version"

```



Replace `dependency_name` with the name of the dependency you want to add, and `version` with the desired version number or version constraint.



For example, to add the `serde` dependency with version `1.0`, you would write:



```toml

[dependencies]

serde = "1.0"

```



To update an existing dependency, simply change the version number in the `Cargo.toml` file.



After modifying the `Cargo.toml` file, you can run `cargo build` or `cargo update` to fetch and update the dependencies specified in the file.



Remember to save the `Cargo.toml` file after making any changes.
