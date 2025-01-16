---
title: 'Profiles'
sidebar:
  order: 3
---

 Profiles in Cargo allow you to customize the build process for different scenarios or environments. They are defined in the `Cargo.toml` file and can be used to specify different settings for dependencies, features, optimizations, and more.



Here's an example of how you can define profiles in `Cargo.toml`:



```toml

[profile.dev]

opt-level = 0

debug = true



[profile.release]

opt-level = 3

debug = false

```



In this example, we have two profiles: `dev` and `release`. The `dev` profile is used for development purposes and has a lower optimization level (`opt-level = 0`) and debug symbols enabled (`debug = true`). On the other hand, the `release` profile is used for production builds and has a higher optimization level (`opt-level = 3`) and debug symbols disabled (`debug = false`).



You can also specify different dependencies or features for each profile. For example:



```toml

[profile.dev]

dependencies.mylib = { version = "0.1", features = ["dev"] }



[profile.release]

dependencies.mylib = { version = "0.1", features = ["prod"] }

```



In this case, the `dev` profile uses the `dev` feature of the `mylib` dependency, while the `release` profile uses the `prod` feature.



Profiles can be useful when you want to have different build configurations for development, testing, and production environments. They allow you to optimize your code and manage dependencies based on the specific requirements of each scenario.
